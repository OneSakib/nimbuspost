from .api import courier, order

class NimbusClient:
    def get_couriers(self):
        return courier.get_couriers()

    def create_order(self, payload):
        return order.create_order(payload)
