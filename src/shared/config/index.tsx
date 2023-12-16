/**
 * Module for initializing environment variables
 * @remark If the value of any variable is not found,
 * the application will immediately throw an error during module initialization
 * @module
 */

/**
 * Get the value of an environment variable
 * @throwable
 */
const getEnvVar = (key: string) => {
  if (process.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return process.env[key] || "";
};

/** API entrypoint */
export const API_URL = getEnvVar("REACT_APP_API_URL");

/** Program execution mode */
export const NODE_ENV = getEnvVar("NODE_ENV");
/** Development mode */
export const isDevEnv = NODE_ENV === "development";
/** Production mode */
export const isProdEnv = NODE_ENV === "production";
