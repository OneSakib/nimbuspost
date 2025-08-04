import time
from ..constants import URLB2C, URLB2B
import requests
import jwt
from ..utils import handle_cache


class TokenManagerB2C(object):
    TOKEN = 'token_b2c'

    def __init__(self, auth):
        self.url = URLB2C.BASE_URL+URLB2C.LOGIN
        self.auth = auth
        self.token_data = None
        self.session = requests.Session()
        self.method = 'post'
        self.headers = {
            'Content-Type': 'application/json'
        }

    def save_token(self, token_data):
        """Save token data to a file."""
        handle_cache.setKey(self.TOKEN, token_data)

    def load_token(self):
        """Load token data from a file if available and valid."""
        if handle_cache.isKey(self.TOKEN):
            try:
                if not self.is_token_valid():
                    self.token_data = None
                else:
                    self.token_data = None
            except Exception as e:
                self.token_data = None
        return self.token_data

    def is_token_valid(self):
        """Check if the token is still valid."""
        if not self.token_data:
            return False
        try:
            decoded_token = jwt.decode(self.token_data, algorithms=["HS512"],
                                       options={"verify_signature": False})
            current_time = time.time()
            if 'exp' in decoded_token and current_time > decoded_token['exp']:
                return True
            return False
        except jwt.ExpiredSignatureError:
            return True
        except:
            return False

    def generate_token(self):
        """Generate a new token using the API endpoint."""
        response = getattr(self.session, self.method)(
            self.url, json=self.auth, headers=self.headers)
        print(">>>>", response.json())
        if response.status_code == 200:            
            token_data = response.json()['data']
            self.save_token(token_data)
            return token_data
        else:
            raise Exception(
                f"Failed to generate token: {response.status_code}, {response.text}")

    def get_token(self):
        """Get a valid token, regenerating if necessary."""
        token = self.load_token()
        if token is None:
            token = self.generate_token()
        return "Bearer "+token


class TokenManagerB2B(object):
    TOKEN = 'token_b2b'

    def __init__(self, auth):
        self.url = URLB2B.BASE_URL+URLB2B.LOGIN
        self.auth = auth
        self.token_data = None
        self.session = requests.Session()
        self.method = 'post'
        self.headers = {
            'Content-Type': 'application/json'
        }

    def save_token(self, token_data):
        """Save token data to a file."""
        handle_cache.setKey(self.TOKEN, token_data)

    def load_token(self):
        """Load token data from a file if available and valid."""
        if handle_cache.isKey(self.TOKEN):
            try:
                if not self.is_token_valid():
                    self.token_data = None
                else:
                    self.token_data = None
            except Exception as e:
                self.token_data = None
        return self.token_data

    def is_token_valid(self):
        """Check if the token is still valid."""
        try:
            decoded_token = jwt.decode(self.token_data, algorithms=["HS512"],
                                       options={"verify_signature": False})
            current_time = time.time()
            if 'exp' in decoded_token and current_time > decoded_token['exp']:
                return True
            return False
        except jwt.ExpiredSignatureError:
            return True
        except:
            return False

    def generate_token(self):
        """Generate a new token using the API endpoint."""
        # Make a POST request to the token endpoint
        response = getattr(self.session, self.method)(
            self.url, json=self.auth, headers=self.headers)
        if response.status_code == 200:
            token_data = response.json()['data']
            self.save_token(token_data)
            return token_data
        else:
            raise Exception(
                f"Failed to generate token: {response.status_code}, {response.text}")

    def get_token(self):
        """Get a valid token, regenerating if necessary."""
        token = self.load_token()
        if token is None:
            token = self.generate_token()
        return "Bearer "+token
