import uvicorn
import os
import sys

if __name__ == "__main__":
    # Ensure current directory is in sys.path
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    if base_dir not in sys.path:
        sys.path.insert(0, base_dir)

    print("=================================================================")
    print("  Lakshaya International School - Python Serverless Backend API")
    print("  Listening on http://localhost:8000")
    print("  Docs available at: http://localhost:8000/docs")
    print("=================================================================")
    uvicorn.run("backend.main:app", host="127.0.0.1", port=8000, reload=True)
