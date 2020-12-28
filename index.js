const ZonesFactory = require('./Modules/Zones');
const Axios = require('axios');
const RecordsFactory = require('./Modules/Records');

class Client {
    constructor(apiKey, errorHandler = (err) => {}) {
        this.apiKey = apiKey;
        this.errorHandler = errorHandler;

        this.Axios = Axios.create({
            baseURL: "https://dns.hetzner.com/api/v1/",
            headers: {
                'Auth-API-Token': this.apiKey
            }
        });

        this.Zones = ZonesFactory(this);
        this.Records = RecordsFactory(this);
    }
}

module.exports = Client;
