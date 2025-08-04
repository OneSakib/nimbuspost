from .base import Resource
from ...constants.url import URLB2C


class Shipment(Resource):
    def __init__(self, client=None):
        super(Shipment, self).__init__(client)
        self.base_url = URLB2C.SHIPMENT

    def create(self, data={}, **kwargs):
        url = self.base_url
        return self.post_url(url, data, **kwargs)

    def track(self, awb_number, data={}, ** kwargs):
        url = self.base_url+URLB2C.TRACK+'/'+awb_number
        return self.get_url(url, data, **kwargs)

    def cancel(self, data={}, **kwargs):
        url = self.base_url+URLB2C.CANCEL
        return self.post_url(url, data, **kwargs)

    def manifest(self, data={}, **kwargs):
        url = self.base_url+URLB2C.MANIFEST
        return self.post_url(url, data, **kwargs)
