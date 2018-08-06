const envInt = (variable, def) => {
  const value = process.env[variable]
  if (!value) {
    return def
  }
  const numValue = parseInt(value)

  if (isNaN(numValue)) {
    throw new Error(`Environment variable ${variable} should be a number`)
  }

  return numValue
}

const envStr = (variable, def) => {
  return process.env[variable] || def
}

export const PORT = envInt('PORT', 3000)
export const HOST = envStr('HOST', '::')

export const ORIENT_DB_HOST = envStr('ORIENT_DB_HOST', '::1')
export const ORIENT_DB_PORT = envInt('ORIENT_DB_PORT', 2424)
export const ORIENT_DB_DATABASE = envStr('ORIENT_DB_DATABASE', 'flexrating')
export const ORIENT_DB_USERNAME = envStr('ORIENT_DB_USERNAME', 'root')
export const ORIENT_DB_PASSWORD = envStr('ORIENT_DB_PASSWORD', 'root')
