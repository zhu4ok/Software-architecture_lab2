const convict = require('convict');

// Додаємо визначення формату для URL
convict.addFormat({
  name: 'url',
  validate: function(val) {
    // Проста регулярна перевірка на валідність URL
    if (!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(val)) {
      throw new Error('must be a valid URL');
    }
  },
  coerce: function(val) {
    return new URL(val);
  }
});

const config = convict({
  port: {
    doc: 'The port the proxy server will run on',
    format: 'port',
    default: 3001,
    env: 'PORT',
  },
  api_url: {
    doc: 'URL of the target API',
    format: 'url',
    default: 'http://localhost:3000',
    env: 'API_URL',
  }
});

config.validate({ allowed: 'strict' });

module.exports = config;
