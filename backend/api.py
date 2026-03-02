from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from arabicMorphEngine.backend.engine import run_engine
import uvicorn

app = FastAPI(
    title="ArabicMorph Research Engine Api",
    description="Arabic Root & Morphological Analysis System",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # IMPORTANT: change this for Replit
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextRequest(BaseModel):
    text: str

@app.post("/analyze")
def analyze_text(request: TextRequest):
    result = run_engine(request.text)
    return result

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8080)