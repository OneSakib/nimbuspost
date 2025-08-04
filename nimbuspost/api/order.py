import requests
from ..config import BASE_URL, API_KEY

def create_order(payload: dict):
    response = requests.post(
        f"{BASE_URL}/orders",
        json=payload,
        headers={"Authorization": f"Bearer {API_KEY}"}
    )
    response.raise_for_status()
    return response.json()
