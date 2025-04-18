word = "Python is good"

print(word.lower())
print(len(word))
print(word.upper())
print(word.title())
print(word.capitalize())
print(word.strip())
print(word.replace("Python", "C++"))
print(word.replace(" ", ""))
print(word.find("good"))

print(word.split())
print(" ".join(word))

print(word.isalpha())
print(word.replace(" ", "").isalpha())

print(word.count('o'))
print(min(word.split()))
print(sorted(word.split()))
