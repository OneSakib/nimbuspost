
from ..cache_manager.cache_manager import CacheManager
from ..cache_manager.memory_backend import MemoryBackend

backend = MemoryBackend(ttl=600)  # 10 min TTL
cache = CacheManager(backend)


# This function set value
def setKey(key, value):
    if value != None:
        return cache.set(key, value)
    return


# This function set value if key exist then give error
def addKey(key, value):
    return cache.add(key, value)


# this function get value by key
def getKey(key):
    return cache.get(key)


# this function delete value by key
def deleteKey(key):
    return cache.delete(key)


# this function delete value by pattern
def getAllKey(pattern):
    return cache.keys(pattern)

# Check key is exist


def isKey(key):
    # return key in cache

    return False


def clean_cache():
    cache.clear()
