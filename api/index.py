# Serverless entrypoint for Vercel / AWS Lambda
from backend.main import app

# Handler for serverless execution
handler = app
