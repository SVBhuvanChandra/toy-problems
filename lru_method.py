class LRUcache:
    def __init__(self, cacheSize):
        self.cacheSize = cacheSize
        self.cache = []

    def put(self, additem):
        if len(self.cache) >= self.cacheSize:
            self.cache.pop(0)
        self.cache.append(additem)

    def get(self, getitem):
        del_item = self.cache.pop(self.cache.index(getitem))
        self.cache.append(del_item)
        return del_item

    def get_cache(self):
        return self.cache

if __name__ == "__main__":
    LRUcache(input("enter size of the cache"))