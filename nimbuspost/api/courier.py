import requests
from ..config import BASE_URL, API_KEY

def get_couriers():
    response = requests.get(f"{BASE_URL}/couriers", headers={"Authorization": f"Bearer {API_KEY}"})
    response.raise_for_status()
    return response.json()
