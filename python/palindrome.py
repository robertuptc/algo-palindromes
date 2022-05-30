import re
def palindrome(word):
    word_to_string = str(word)
    original_word = re.sub(r'[^a-zA-Z0-9]', "", word_to_string.lower())
    reversed_word = re.sub(r'[^a-zA-Z0-9]', "", word_to_string[::-1].lower())

    return original_word == reversed_word




