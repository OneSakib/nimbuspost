from ...constants.url import URLB2C
from .base import Resource


class Courier(Resource):
    def __init__(self, client=None):
        super().__init__(client)
        self.base_url = URLB2C.COURIER

    def fetch_all(self, data={}, **kwargs):
        url = self.base_url+URLB2C.SERVICEABILITY
        return self.get_url(url, data, **kwargs)

    def serviceability(self, data={}, **kwargs):
        url = self.base_url+URLB2C.SERVICEABILITY
        return self.post_url(url, data, **kwargs)
