from .base import Resource
from ...constants.url import URLB2B


class Courier(Resource):
    def __init__(self, client=None):
        super(Courier, self).__init__(client)
        self.base_url = URLB2B.COURIER

    def fetch(self, data={}, **kwargs):
        url = self.base_url+URLB2B.SERVICEABILITY
        return self.get_url(url, data, **kwargs)

    def serviceability(self, data={}, **kwargs):
        url = self.base_url+URLB2B.SERVICEABILITY
        return self.post_url(url, data, **kwargs)
