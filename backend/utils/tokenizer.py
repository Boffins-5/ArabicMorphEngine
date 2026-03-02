# extract arabic tokens safely
from camel_tools.tokenizers.word import simple_word_tokenize
import re
def tokenize_text(text):
    tokens = simple_word_tokenize(text)

    cleaned_tokens = []
    for token in tokens:
        #remove pure numbers
        if token.isdigit():
            continue
        #remove the punctuation-only tokens
        if re.fullmatch(r'\W+',token):
            continue
        if len(token) < 2 and token not in ['و', 'ف', 'ب', 'ل', 'ك']:
            continue
        cleaned_tokens.append(token)

    return cleaned_tokens