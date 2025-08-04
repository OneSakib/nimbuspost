from .base import Resource
from ..constants.url import URLB2B


class Wallet(Resource):
    def __init__(self, client=None):
        super(Wallet, self).__init__(client)
        self.base_url = URLB2B.SHIPMENT+URLB2B.WALLET

    def wallet_balance(self, data={}, **kwargs):
        url = self.base_url
        return self.get_url(url, data, **kwargs)
