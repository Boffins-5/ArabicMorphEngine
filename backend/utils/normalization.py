#  arabic cleaning rules
## dediac alef normalization
import unicodedata
from camel_tools.utils.normalize import normalize_unicode
from camel_tools.utils.normalize import normalize_alef_ar
from camel_tools.utils.normalize import normalize_alef_maksura_ar
from camel_tools.utils.dediac import dediac_ar
def unicode_normalize(text):
    return unicodedata.normalize("NFC",text)

def normalize_text(text: str) ->str :
    text= unicode_normalize(text)
    #normalize unicode inconsistencies
    text = normalize_unicode(text)

    #remove the arabic diacritics
    text = dediac_ar(text)

    #Normalize Alef variants
    text = normalize_alef_ar(text)

    #Normalize Alef maksura
    text = normalize_alef_maksura_ar(text)

    #remove tatweel
    text = text.replace("-","")

    return text