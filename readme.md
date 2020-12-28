# Hetzner-DNS Client for JS

## Installation

```npm i -S hetzner-dns```

## How To!?

```js
const Hetzner = require('hetzner-dns');

const Client = new Hetzner(apiKey);
```

All API methods are then available on the client. Every method returns a promise. Promises should resolve to response data, or reject to an Axios error.

Example:

```js
const Hetzner = require('hetzner-dns');
const Client = new Hetzner(apiKey);

Client.Zones.GetAll().then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});
```

Should output a response matching:

```json
{
  "records": [
    {
      "type": "A",
      "id": "string",
      "created": "2020-12-28T04:40:06Z",
      "modified": "2020-12-28T04:40:06Z",
      "zone_id": "string",
      "name": "string",
      "value": "string",
      "ttl": 0
    }
  ]
}
```

As per the documentation, available here: https://dns.hetzner.com/api-docs/#operation/GetRecords
