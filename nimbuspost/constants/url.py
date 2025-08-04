class URLB2C(object):
    BASE_URL = 'https://api.nimbuspost.com/v1'
    LOGIN = "/users/login"
    COURIER = "/courier"
    SERVICEABILITY = "/serviceability"
    SHIPMENT = "/shipments"
    CANCEL = "/cancel"
    MANIFEST = "/manifest"
    TRACK = "/track"
    NDR = "/ndr"
    ACTION = '/action'


class URLB2B(object):
    BASE_URL = 'https://ship.nimbuspost.com/api'
    LOGIN = "/users/login"
    COURIER = "/courier"
    SERVICEABILITY = "/serviceability"
    SHIPMENT = "/shipmentcargo"
    CREATE = '/create'
    CANCEL = '/cancel'
    MANIFEST = '/pickup'
    TRACK = '/track'
    WALLET = '/wallet_balance'
