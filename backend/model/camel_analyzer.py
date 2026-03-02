# wrapper around camel analyzer

from camel_tools.morphology.database import MorphologyDB
from camel_tools.morphology.analyzer import Analyzer

# Load database once
db = MorphologyDB.builtin_db()
analyzer = Analyzer(db)


def analyze_word(word):
    output = analyzer.analyze(word)

    # If nothing returned
    if not output:
        return None

    # Detect ambiguity
    ambiguous = len(output) > 1

    # Take first analysis for now
    analysis = output[0]

    result = {
        "word": word,
        "lemma": analysis.get("lex"),
        "root": analysis.get("root"),      # NO FILTERING
        "pos": analysis.get("pos"),
        "pattern": analysis.get("pattern"),
        "gloss": analysis.get("gloss"),
        "analysis_count": len(output),
        "ambiguous": ambiguous
    }

    return result