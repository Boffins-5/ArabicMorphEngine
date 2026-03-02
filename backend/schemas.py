# define word data structure


# schemas.py
# Data models for Arabic Morphology Engine

from dataclasses import dataclass, asdict
from typing import List, Dict


# -----------------------------
# Word-Level Schema
# -----------------------------
@dataclass
class WordSchema:
    surface: str
    normalized: str
    root: str
    lemma: str
    pos: str
    pattern: str
    frequency: int

    def to_dict(self):
        return asdict(self)


# -----------------------------
# Root-Level Schema
# -----------------------------
@dataclass
class RootSchema:
    root: str
    forms: List[Dict]     # [{"surface": "", "freq": int}]
    lemmas: List[str]
    total_frequency: int

    def to_dict(self):
        return asdict(self)


# -----------------------------
# Statistics Schema
# -----------------------------
@dataclass
class StatsSchema:
    total_tokens: int
    unique_words: int
    unique_roots: int
    processing_time_sec: float

    def to_dict(self):
        return asdict(self)