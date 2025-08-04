from .base import Resource
from ...constants.url import URLB2C


class Ndr(Resource):
    def __init__(self, client=None):
        super(Ndr, self).__init__(client)
        self.base_url = URLB2C.NDR

    def submit_action(self, data={}, **kwargs):
        url = self.base_url+URLB2C.ACTION
        return self.post_url(url, data, **kwargs)

    def fetch(self, data={}, ** kwargs):
        url = self.base_url
        return self.get_url(url, data, **kwargs)
