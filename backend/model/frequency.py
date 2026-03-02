# frequency.py
# مسئول فقط عن حساب تكرار الكلمات
# Only counts how many times each word appears in text


def count_frequency(tokens):
    """
    Count frequency of each word in token list.

    Parameters:
        tokens (list): List of tokenized words

    Returns:
        dict: { word: frequency }
    """

    freq_dict = {}

    for token in tokens:
        # Increment count safely
        freq_dict[token] = freq_dict.get(token, 0) + 1

    return freq_dict