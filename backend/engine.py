# engine.py
# Core orchestration engine

import time
import json

from arabicMorphEngine.backend.utils.normalization import normalize_text
from arabicMorphEngine.backend.utils.tokenizer import tokenize_text
from arabicMorphEngine.backend.model.frequency import count_frequency
from arabicMorphEngine.backend.model.camel_analyzer import analyze_word
from arabicMorphEngine.backend.model.processor import clean_root
from arabicMorphEngine.backend.schemas import WordSchema, RootSchema, StatsSchema


class ArabicMorphologyEngine:

    def __init__(self):
        self.words = []
        self.roots = {}
        self.stats = None

    # ---------------------------------
    # Main Processing Pipeline
    # ---------------------------------
    def process_text(self, text):

        start_time = time.time()

        # Step 1: Normalize
        normalized_text = normalize_text(text)

        # Step 2: Tokenize
        tokens = tokenize_text(normalized_text)

        # Step 3: Word Frequency
        freq_dict = count_frequency(tokens)

        # Step 4: Morphological Analysis (unique words only)
        for word, freq in freq_dict.items():

            analysis = analyze_word(word)

            if not analysis:
                continue

            word_obj = WordSchema(
                surface=word,
                normalized=word,
                root=analysis.get("root"),
                lemma=analysis.get("lemma"),
                pos=analysis.get("pos"),
                pattern=analysis.get("pattern"),
                frequency=freq
            )

            self.words.append(word_obj)

        # Step 5: Group by Root
        self._group_by_root()

        end_time = time.time()

        # Step 6: Stats
        self.stats = StatsSchema(
            total_tokens=len(tokens),
            unique_words=len(freq_dict),
            unique_roots=len(self.roots),
            processing_time_sec=round(end_time - start_time, 3)
        )

    # ---------------------------------
    # Internal Root Grouping
    # ---------------------------------
    def _group_by_root(self):

        root_dict = {}

        for word in self.words:

            root = clean_root(word.root)

            if not root:
                continue

            if root not in root_dict:
                root_dict[root] = {
                    "forms": [],
                    "lemmas": set(),
                    "total_frequency": 0
                }

            root_dict[root]["forms"].append({
                "surface": word.surface,
                "freq": word.frequency
            })

            if word.lemma:
                root_dict[root]["lemmas"].add(word.lemma)

            root_dict[root]["total_frequency"] += word.frequency

        # Convert to RootSchema objects
        for root, data in root_dict.items():

            root_obj = RootSchema(
                root=root,
                forms=data["forms"],
                lemmas=sorted(list(data["lemmas"])),
                total_frequency=data["total_frequency"]
            )

            self.roots[root] = root_obj

    # ---------------------------------
    # Generate JSON-Ready Output
    # ---------------------------------
    def generate_output(self):

        return {
            "book_stats": self.stats.to_dict(),
            "roots": {
                root: root_obj.to_dict()
                for root, root_obj in self.roots.items()
            }
        }

    # ---------------------------------
    # Export JSON
    # ---------------------------------
    def export_json(self, filepath):

        output_data = self.generate_output()

        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(output_data, f, ensure_ascii=False, indent=4)

    # ---------------------------------
    # Reset Engine
    # ---------------------------------
    def reset(self):
        self.words = []
        self.roots = {}
        self.stats = None
# ---------------------------------
# Simple Wrapper Function
# ---------------------------------
def run_engine(text, export_path=None):

    engine = ArabicMorphologyEngine()

    engine.process_text(text)

    if export_path:
        engine.export_json(export_path)

    return engine.generate_output()