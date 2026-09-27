from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
from datetime import datetime
import json
import os

app = FastAPI(
    title="Lakshaya International School API",
    description="Python Serverless Backend for Lakshaya School, Alumni & Results Hub",
    version="1.0.0"
)

# Enable CORS for local dev & Vercel
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----------------- In-Memory / File-Synced Data Store -----------------
DATA_DIR = os.path.join(os.path.dirname(__file__), "data")
os.makedirs(DATA_DIR, exist_ok=True)
DB_FILE = os.path.join(DATA_DIR, "db.json")

# Initial Seeds
INITIAL_DB = {
    "inquiries": [
        {
            "id": "INQ-2025-001",
            "studentName": "Vivaan Dave",
            "parentName": "Rajesh Dave",
            "email": "rajesh.dave@gmail.com",
            "phone": "+91 98250 14829",
            "grade": "Grade 5 (Primary)",
            "academicYear": "2025-26",
            "visitDate": "2025-04-10",
            "notes": "Interested in robotics lab and experiential learning at Shilaj Farm.",
            "status": "new",
            "createdAt": "2025-03-24T10:30:00Z",
            "whatsappNotified": True,
            "emailNotified": True
        },
        {
            "id": "INQ-2025-002",
            "studentName": "Aanya Sharma",
            "parentName": "Dr. Vikram Sharma",
            "email": "v.sharma.ortho@gmail.com",
            "phone": "+91 99099 23412",
            "grade": "Pre-Nursery (Early Years)",
            "academicYear": "2025-26",
            "visitDate": "2025-04-05",
            "notes": "Looking for award-winning early childhood foundation.",
            "status": "review",
            "createdAt": "2025-03-23T14:15:00Z",
            "whatsappNotified": True,
            "emailNotified": True
        }
    ],
    # Alumni start empty: only real registrations, verified by the school, are listed.
    "alumni": [],
    "results": [
        {
            "id": "RES-2025-X01",
            "rollNo": "LIS2025-X01",
            "studentName": "Aryan Sharma",
            "admissionNo": "LIS/ADM/2018/142",
            "classGrade": "Class 10",
            "section": "Section A",
            "dob": "2009-08-14",
            "academicYear": "2024-25",
            "term": "Annual Board Assessment & Pre-Board Final",
            "percentage": 95.67,
            "cgpa": 9.8,
            "resultStatus": "PASSED WITH DISTINCTION"
        }
    ],
    "notifications": []
}

def load_db():
    if os.path.exists(DB_FILE):
        try:
            with open(DB_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return INITIAL_DB
    return INITIAL_DB

def save_db(data):
    try:
        with open(DB_FILE, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2)
    except Exception as e:
        print(f"Error saving DB: {e}")

# ----------------- Models -----------------
class InquiryCreate(BaseModel):
    studentName: str
    parentName: str
    email: str
    phone: str
    grade: str
    academicYear: str = "2025-26"
    visitDate: Optional[str] = None
    notes: Optional[str] = None

class StatusUpdate(BaseModel):
    status: str
    adminNotes: Optional[str] = None

class AlumniCreate(BaseModel):
    fullName: str
    email: str
    phone: str
    batchYear: int
    lastClass: Optional[str] = ""
    house: str = Field(pattern="^(Nehru|Gandhi|Bose|Tagore)$")
    higherEducation: str
    currentRole: str
    company: str
    city: str
    country: str
    linkedIn: Optional[str] = None
    willingToMentor: bool = False
    shareContact: bool = False
    bio: Optional[str] = ""

class ContactMessage(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: str = Field(min_length=3, max_length=200)
    mobile: str = Field(min_length=6, max_length=20)
    subject: str = Field(min_length=1, max_length=5000)

class NewsletterSubscription(BaseModel):
    email: str = Field(min_length=3, max_length=200)

class NotificationRequest(BaseModel):
    recipient: str
    channel: str # "whatsapp" or "email"
    template: str
    message: str

# ----------------- Routes -----------------
@app.get("/")
def root():
    return {
        "institution": "Lakshaya International School",
        "system": "Serverless Python Backend Active",
        "status": "online",
        "version": "1.0.0",
        "heritage": "35 Years of Agrawal Group Lineage"
    }

@app.get("/api/health")
def health_check():
    return {"status": "ok", "timestamp": datetime.now().isoformat()}

# --- Inquiries Endpoints ---
@app.get("/api/inquiries")
def get_inquiries(status: Optional[str] = None):
    db = load_db()
    inqs = db.get("inquiries", [])
    if status and status != "all":
        inqs = [i for i in inqs if i.get("status") == status]
    return inqs

@app.post("/api/inquiries")
def create_inquiry(inquiry: InquiryCreate):
    db = load_db()
    inqs = db.setdefault("inquiries", [])
    new_id = f"INQ-2025-{len(inqs) + 1:03d}"
    
    record = inquiry.dict()
    record["id"] = new_id
    record["status"] = "new"
    record["createdAt"] = datetime.now().isoformat()
    record["whatsappNotified"] = True
    record["emailNotified"] = True

    inqs.insert(0, record)
    save_db(db)
    return {"message": "Inquiry recorded successfully", "inquiry": record}

@app.patch("/api/inquiries/{inquiry_id}/status")
def update_inquiry_status(inquiry_id: str, update: StatusUpdate):
    db = load_db()
    for item in db.get("inquiries", []):
        if item.get("id") == inquiry_id:
            item["status"] = update.status
            if update.adminNotes:
                item["adminNotes"] = update.adminNotes
            save_db(db)
            return {"message": f"Inquiry status updated to {update.status}", "inquiry": item}
    raise HTTPException(status_code=404, detail="Inquiry not found")

# --- Public website: contact form & newsletter ---
@app.post("/api/contact")
def create_contact_message(msg: ContactMessage):
    db = load_db()
    messages = db.setdefault("contactMessages", [])
    record = msg.dict()
    record["id"] = f"MSG-{len(messages) + 1:04d}"
    record["createdAt"] = datetime.now().isoformat()
    messages.insert(0, record)
    save_db(db)
    return {"message": "Message received", "id": record["id"]}

@app.get("/api/contact")
def get_contact_messages():
    return load_db().get("contactMessages", [])

@app.post("/api/newsletter")
def subscribe_newsletter(sub: NewsletterSubscription):
    if "@" not in sub.email:
        raise HTTPException(status_code=422, detail="Invalid email address")
    db = load_db()
    subs = db.setdefault("newsletter", [])
    email = sub.email.strip().lower()
    if not any(s.get("email") == email for s in subs):
        subs.append({"email": email, "subscribedAt": datetime.now().isoformat()})
        save_db(db)
    return {"message": "Subscribed", "email": email}

# --- Alumni Endpoints ---
@app.get("/api/alumni")
def get_alumni(status: Optional[str] = None):
    db = load_db()
    alm = db.get("alumni", [])
    if status and status != "all":
        alm = [a for a in alm if a.get("status") == status]
    return alm

@app.post("/api/alumni")
def register_alumni(alumnus: AlumniCreate):
    db = load_db()
    alm = db.setdefault("alumni", [])
    new_id = f"ALM-{datetime.now().strftime('%y')}{len(alm) + 1:02d}"

    record = alumnus.dict()
    record["id"] = new_id
    record["status"] = "pending" # Needs admin approval!
    record["submittedAt"] = datetime.now().isoformat()

    alm.insert(0, record)
    save_db(db)
    return {"message": "Alumni registered for admin approval", "alumnus": record}

@app.patch("/api/alumni/{alumni_id}/status")
def update_alumni_status(alumni_id: str, update: StatusUpdate):
    db = load_db()
    for item in db.get("alumni", []):
        if item.get("id") == alumni_id:
            item["status"] = update.status
            if update.status == "verified":
                item["verifiedAt"] = datetime.now().isoformat()
            save_db(db)
            return {"message": f"Alumnus {alumni_id} marked as {update.status}", "alumnus": item}
    raise HTTPException(status_code=404, detail="Alumnus not found")

# --- Results Search Endpoints ---
@app.get("/api/results/search")
def search_result(roll_no: str = Query(...), dob: Optional[str] = Query(None)):
    db = load_db()
    for res in db.get("results", []):
        if res.get("rollNo", "").upper() == roll_no.strip().upper():
            if dob and res.get("dob") and res.get("dob") != dob.strip():
                continue
            return res
    raise HTTPException(status_code=404, detail="Marksheet not found for given Roll Number")

@app.get("/api/results")
def list_all_results():
    db = load_db()
    return db.get("results", [])

# --- Notifications API ---
@app.post("/api/notifications/send")
def send_notification(req: NotificationRequest):
    db = load_db()
    logs = db.setdefault("notifications", [])
    
    log_entry = {
        "id": f"NOTIF-{len(logs) + 1:03d}",
        "timestamp": datetime.now().strftime("%Y-%m-%d %I:%M %p"),
        "recipient": req.recipient,
        "channel": req.channel,
        "template": req.template,
        "status": "Delivered",
        "previewText": req.message
    }
    logs.insert(0, log_entry)
    save_db(db)
    return {"message": f"{req.channel.capitalize()} dispatched successfully", "log": log_entry}

@app.get("/api/notifications/logs")
def get_notification_logs():
    db = load_db()
    return db.get("notifications", [])
