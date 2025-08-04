from nimbuspost.client import ClientB2C
from dotenv import load_dotenv
import os
load_dotenv()
if __name__ == '__main__':
    auth = {
        "email": os.getenv('NIMBUS_EMAIL'),
        "password": os.getenv('NIMBUS_PASSWORD')
    }
    print("AUTH", auth)
    client = ClientB2C(auth=auth)
    print("Fetch all", client.courier.fetch_all())
