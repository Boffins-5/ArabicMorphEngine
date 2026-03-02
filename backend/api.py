from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from arabicMorphEngine.backend.engine import run_engine

app = FastAPI(
    title="ArabicMorph Research Engine Api",
    description="Arabic Root & Morphological Analysis System",
    version="1.0"
)

# 🔥 ADD THIS PART
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # your frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request body schema
class TextRequest(BaseModel):
    text: str


@app.post("/analyze")
def analyze_text(request: TextRequest):
    result = run_engine(request.text)
    return result