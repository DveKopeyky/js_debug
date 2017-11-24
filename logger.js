logger = {
  data: {},
  
  addLog: function (message, key, element) {
    if (key === undefined) {
      key = 'default';
    }
    if (logger.data[key] === undefined) {
      logger.data[key] = {};
      logger.data[key].message = '\n';
    }

    if (element) {
      if (logger.data[key][element] === undefined) {
        logger.data[key][element] = logger.data[key][element] || {};
        logger.data[key][element].message += '\n';
      }
      logger.data[key][element].message += message + '\n';
    }
    logger.data[key].message += message + '\n';
  },  
  
  showLogInfo: function (key, type, element) {
    var debugLog;
    if (element === undefined) {
      debugLog = logger.data[key].message;
    }
    else {
      debugLog = logger.data[key][element].message;
    }

    switch(type) {
      case 'error':
        console.error(debugLog);
        break;

      case 'warn':
        console.warn(debugLog);
        break;

      default:
        console.log(debugLog);
    }
  };
};    
