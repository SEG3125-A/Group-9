const axios = require('axios');
const https = require('https');

const defaultOptions = {
  version: 3,
  clusterId: 'demo',
  apiKey: null,
  secret: null
}

class PieSocket{
  
  constructor(options) {
    options = options || {};
    this.options = {...defaultOptions, ...options };
    this.connections = {}
  }

  publish(channel, event, data, meta) {
    var pubData = {
      key: this.options.apiKey,
      secret: this.options.secret,
      channelId: channel,
      message: {
        event: event,
        data: data,
        meta: meta
      }
    };

    const url = `https://${this.options.clusterId}.piesocket.com/api/publish?src=piesocket-nodejs&v=${this.options.version}`;

    const agent = new https.Agent({
      rejectUnauthorized: false
    });

    return axios.post(url, pubData, {
      httpsAgent: agent,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

module.exports = PieSocket;