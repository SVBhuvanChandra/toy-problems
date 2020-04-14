class LRUcache:
    def __init__(self, cacheSize):
        self.cacheSize = cacheSize
        self.cache = []

if __name__ == "__main__":
    LRUcache(input("enter size"))