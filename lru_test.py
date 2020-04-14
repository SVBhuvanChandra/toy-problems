from lru_method import LRUcache

class main:
    def __init__(self):
        self.cacheitem = LRUcache(3)
        self.test_cases()

    def test_cases(self):
        self.cacheitem.put(5)
        print(self.check([5]))

        self.cacheitem.put(10)
        print(self.check([5, 10]))

        self.cacheitemget(5)
        print(self.check([10, 5]))

        self.cacheitem.put(15)
        print(self.check([10, 5, 15]))

    def check(self, checker):
        res = self.cacheitem.get_cache()
        print(res)

if __name__ == "__main__":
    main()