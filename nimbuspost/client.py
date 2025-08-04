from .api.b2c import courier, shipment, ndr
from .api.b2b import courier as courier_b2b, shipment as shipment_b2b
import requests
from .constants import HTTP_STATUS_CODE, ERROR_CODE, URLB2C, URLB2B
from .token_manager.token_manager import TokenManagerB2C, TokenManagerB2B
# from pkg_resources import DistributionNotFound
import json
from .errors import (BadRequestError, GatewayError,
                     ServerError)


class ClientB2C:
    """Nimbus B2c client class"""

    DEFAULTS = {
        'base_url': URLB2C.BASE_URL
    }

    def __init__(self, session=None, auth=None, **options):
        """
        Initialize a Client object with session,
        optional token handler, and options
        """
        self.session = session or requests.Session()
        self.auth = auth
        self.base_url = self._set_base_url(**options)
        self.app_details = []
        self.token_manager = TokenManagerB2C(auth=auth)
        self.courier = courier.Courier(client=self)
        self.shipment = shipment.Shipment(client=self)
        self.ndr = ndr.Ndr(client=self)

    def _set_base_url(self, **options):
        base_url = self.DEFAULTS['base_url']

        if 'base_url' in options:
            base_url = options['base_url']
            del (options['base_url'])

        return base_url

    def _update_user_agent_header(self, options):
        user_agent = "{}{} {}".format('Nimbus-Python/', self._get_version(),
                                      self._get_app_details_ua())
        if 'headers' in options:
            options['headers']['Authorization'] = self.token_manager.get_token()
            options['headers']['User-Agent'] = user_agent
        else:
            options['headers'] = {'User-Agent': user_agent}
            options['headers']['Authorization'] = self.token_manager.get_token()

        return options

    def _get_version(self):
        version = "1.0.0"
        # try:  # nosemgrep : gitlab.bandit.B110
        #     # version = pkg_resources.require("nimbuspost")[0].version
        #     version = "1.0.0"
        # except DistributionNotFound:  # pragma: no cover
        #     pass
        return version

    def _get_app_details_ua(self):
        app_details_ua = ""

        app_details = self.get_app_details()

        for app in app_details:
            if 'title' in app:
                app_ua = app['title']
                if 'version' in app:
                    app_ua += "/{}".format(app['version'])
                app_details_ua += "{} ".format(app_ua)

        return app_details_ua

    def set_app_details(self, app_details):
        self.app_details.append(app_details)

    def get_app_details(self):
        return self.app_details

    def request(self, method, path, **options):
        """
        Dispatches a request to the Nimbus HTTP API
        """
        options = self._update_user_agent_header(options)

        url = "{}{}".format(self.base_url, path)
        response = getattr(self.session, method)(
            url, **options)
        if ((response.status_code >= HTTP_STATUS_CODE.OK) and
                (response.status_code < HTTP_STATUS_CODE.REDIRECT)):
            return json.dumps({}) if (response.status_code == 204) else response.json()
        else:
            msg = ""
            code = ""
            json_response = response.json()
            if 'message' in json_response:
                msg = json_response['message']
            if str.upper(code) == ERROR_CODE.MISSING_AUTH_TOKEN:
                raise BadRequestError(msg)
            else:
                raise ServerError(msg)

    def get(self, path, params, **options):
        """
        Parses GET request options and dispatches a request
        """
        data, options = self._update_request({}, options)
        return self.request('get', path, params=params, **options)

    def post(self, path, data, **options):
        """
        Parses POST request options and dispatches a request
        """
        data, options = self._update_request(data, options)
        return self.request('post', path, data=data, **options)

    def patch(self, path, data, **options):
        """
        Parses PATCH request options and dispatches a request
        """
        data, options = self._update_request(data, options)
        return self.request('patch', path, data=data, **options)

    def delete(self, path, data, **options):
        """
        Parses DELETE request options and dispatches a request
        """
        data, options = self._update_request(data, options)
        return self.request('delete', path, data=data, **options)

    def put(self, path, data, **options):
        """
        Parses PUT request options and dispatches a request
        """
        data, options = self._update_request(data, options)
        return self.request('put', path, data=data, **options)

    def _update_request(self, data, options):
        """
        Updates The resource data and header options
        """
        data = json.dumps(data)

        if 'headers' not in options:
            options['headers'] = {}

        options['headers'].update({'Content-type': 'application/json'})

        return data, options


class ClientB2B:
    """Nimbus B2B client class"""

    DEFAULTS = {
        'base_url': URLB2B.BASE_URL
    }

    def __init__(self, session=None, auth=None, **options):
        """
        Initialize a Client object with session,
        optional token handler, and options
        """
        self.session = session or requests.Session()
        self.auth = auth

        self.base_url = self._set_base_url(**options)

        self.app_details = []
        self.token_manager = TokenManagerB2B(auth=auth)
        self.courier = courier_b2b.Courier(client=self)
        self.shipment = shipment_b2b.Shipment(client=self)

    def _set_base_url(self, **options):
        base_url = self.DEFAULTS['base_url']

        if 'base_url' in options:
            base_url = options['base_url']
            del (options['base_url'])

        return base_url

    def _update_user_agent_header(self, options):
        user_agent = "{}{} {}".format('Nimbus-Python/', self._get_version(),
                                      self._get_app_details_ua())
        if 'headers' in options:
            options['headers']['Authorization'] = self.token_manager.get_token()
            options['headers']['User-Agent'] = user_agent
        else:
            options['headers'] = {'User-Agent': user_agent}
            options['headers']['Authorization'] = self.token_manager.get_token()

        return options

    def _get_version(self):
        version = "1.0.0"
        # try:  # nosemgrep : gitlab.bandit.B110
        #     version = "1.0.0"
        #     # version = pkg_resources.require("nimbus")[0].version
        # except DistributionNotFound:  # pragma: no cover
        #     pass
        return version

    def _get_app_details_ua(self):
        app_details_ua = ""

        app_details = self.get_app_details()

        for app in app_details:
            if 'title' in app:
                app_ua = app['title']
                if 'version' in app:
                    app_ua += "/{}".format(app['version'])
                app_details_ua += "{} ".format(app_ua)

        return app_details_ua

    def set_app_details(self, app_details):
        self.app_details.append(app_details)

    def get_app_details(self):
        return self.app_details

    def request(self, method, path, **options):
        """
        Dispatches a request to the Nimbus HTTP API
        """
        options = self._update_user_agent_header(options)
        url = "{}{}".format(self.base_url, path)
        response = getattr(self.session, method)(
            url, **options)
        if ((response.status_code >= HTTP_STATUS_CODE.OK) and
                (response.status_code < HTTP_STATUS_CODE.REDIRECT)):
            return json.dumps({}) if (response.status_code == 204) else response.json()
        else:
            msg = ""
            code = ""
            json_response = response.json()
            if 'message' in json_response:
                msg = json_response['message']
            if str.upper(code) == ERROR_CODE.MISSING_AUTH_TOKEN:
                raise BadRequestError(msg)
            else:
                raise ServerError(msg)

    def get(self, path, params, **options):
        """
        Parses GET request options and dispatches a request
        """
        data, options = self._update_request({}, options)
        return self.request('get', path, params=params, **options)

    def post(self, path, data, **options):
        """
        Parses POST request options and dispatches a request
        """
        data, options = self._update_request(data, options)
        return self.request('post', path, data=data, **options)

    def patch(self, path, data, **options):
        """
        Parses PATCH request options and dispatches a request
        """
        data, options = self._update_request(data, options)
        return self.request('patch', path, data=data, **options)

    def delete(self, path, data, **options):
        """
        Parses DELETE request options and dispatches a request
        """
        data, options = self._update_request(data, options)
        return self.request('delete', path, data=data, **options)

    def put(self, path, data, **options):
        """
        Parses PUT request options and dispatches a request
        """
        data, options = self._update_request(data, options)
        return self.request('put', path, data=data, **options)

    def _update_request(self, data, options):
        """
        Updates The resource data and header options
        """
        data = json.dumps(data)
        if 'headers' not in options:
            options['headers'] = {}

        options['headers'].update({'Content-type': 'application/json'})
        return data, options
