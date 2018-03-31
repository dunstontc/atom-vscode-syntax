const settings = {
  config: {
    scheme: {
      type: 'string',
      default: 'dark-default',
      enum: [
        "dark-default",
        // "light-default"
        // "high-contrast"
        "dark-custom",
        "dark-super-custom"
        // "light-custom"
        // "high-contrast-custom"
      ]
    }
  }
};

module.exports = settings;
