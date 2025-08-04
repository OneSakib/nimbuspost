class CacheManager:
    def __init__(self, backend):
        """
        Accepts a backend object that must implement:
        - get(key)
        - set(key, value)
        - add(key, value)
        - delete(key)
        - incr(key, delta)
        - clear()
        - keys(pattern)
        """
        self.backend = backend

    def set(self, key, value):
        if value is not None:
            return self.backend.set(key, value)

    def get(self, key):
        return self.backend.get(key)

    def add(self, key, value):
        return self.backend.add(key, value)

    def delete(self, key):
        return self.backend.delete(key)

    def incr(self, key, value=1):
        return self.backend.incr(key, value)

    def exists(self, key):
        return self.get(key) is not None

    def keys(self, pattern="*"):
        return self.backend.keys(pattern)

    def clear(self):
        return self.backend.clear()
