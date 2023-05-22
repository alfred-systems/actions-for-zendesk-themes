const axios = require('axios');

const instance = axios.create({
  baseURL: `https://${process.env['ZENDESK_SUBDOMAIN']}.zendesk.com/api/v2`,
  auth: {
    username: process.env['ZENDESK_EMAIL'],
    password: process.env['ZENDESK_TOKEN']
  }
});

instance.get('/guide/theming/themes')
  .then((response) => {
    console.log(JSON.stringify(response.data));
    return JSON.stringify(response.data);
  })
  .catch((error) => {
    console.log(JSON.stringify(error));
    return new Error(JSON.stringify(error));
  });
