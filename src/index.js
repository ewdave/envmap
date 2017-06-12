'use strict';

/**
 * Return an object of all environment variables starting 
 * with the given prefix, lower-cased and stripped.
 * @param {* string} prefix 
 * @returns {* Object}
 */
const prefix = prefix => {
  prefix = prefix.toLowerCase();
  const envVarObj = lowerObj(process.env);

  return Object.keys(envVarObj).reduce((envObj, envName) => {
    if (envName.startsWith(prefix)) {
      const newEnvName = envName.slice(prefix.length);
      envObj[newEnvName] = envVarObj[envName];
      return envObj;
    }

    return envObj;
  }, {});
};

/**
 * Returns a new object with the keys (strings) lower-cased
 * @param {* object} obj 
 * @returns {* Object}
 */
const lowerObj = obj => {
  return Object.keys(obj).reduce((lowerNames, name) => {
    lowerNames[name.toLowerCase()] = obj[name];
    return lowerNames;
  }, {});
};

module.exports = { prefix }
