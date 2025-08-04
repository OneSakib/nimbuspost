from cachetools import TTLCache
from fnmatch import fnmatch


class MemoryBackend:
    def __init__(self, maxsize=1000, ttl=3600):
        self.cache = TTLCache(maxsize=maxsize, ttl=ttl)

    def get(self, key):
        return self.cache.get(key)

    def set(self, key, value):
        self.cache[key] = value
        return True

    def add(self, key, value):
        if key in self.cache:
            return False
        self.cache[key] = value
        return True

    def delete(self, key):
        return self.cache.pop(key, None)

    def incr(self, key, delta=1):
        self.cache[key] = self.cache.get(key, 0) + delta
        return self.cache[key]

    def keys(self, pattern="*"):
        return [k for k in self.cache if fnmatch(k, pattern)]

    def clear(self):
        self.cache.clear()
        return True
