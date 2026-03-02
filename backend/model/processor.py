 # processor.py
# Helper processing utilities for morphology layer
# This file MUST remain lightweight and not duplicate engine logic


def clean_root(root):
    """
    Clean and validate Arabic root.

    - Remove dots if exist (CAMeL sometimes returns dotted roots)
    - Strip whitespace
    - Ensure triliteral or quadriliteral root

    Returns:
        Clean root string OR None if invalid
    """

    if not root:
        return None

    root = root.replace(".", "").strip()

    # Arabic standard roots are 3 or 4 letters
    if len(root) not in (3, 4):
        return None

    return root

