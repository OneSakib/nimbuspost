from .base import Resource
from ...constants.url import URLB2B


class Shipment(Resource):
    def __init__(self, client=None):
        super(Shipment, self).__init__(client)
        self.base_url = URLB2B.SHIPMENT

    def create(self, data={}, **kwargs):
        url = self.base_url+URLB2B.CREATE
        return self.post_url(url, data, **kwargs)

    def track(self, awb_number, data={}, **kwargs):
        url = self.base_url+URLB2B.TRACK+'/'+awb_number
        return self.get_url(url, data, **kwargs)

    def cancel(self, data={}, **kwargs):
        url = self.base_url+URLB2B.CANCEL
        return self.post_url(url, data, **kwargs)

    def manifest(self, data={}, **kwargs):
        url = self.base_url+URLB2B.MANIFEST
        return self.post_url(url, data, **kwargs)
