import OrientDB from 'orientjs'

import {
  ORIENT_DB_HOST,
  ORIENT_DB_PORT,
  ORIENT_DB_USERNAME,
  ORIENT_DB_PASSWORD,
  ORIENT_DB_DATABASE,
} from './config'
import log from './log'

const createDb = async () => {
  const server = OrientDB({
    host: ORIENT_DB_HOST,
    port: ORIENT_DB_PORT,
    username: ORIENT_DB_USERNAME,
    password: ORIENT_DB_PASSWORD,
  })

  const db = server.use(ORIENT_DB_DATABASE)

  console.log('a')
  try {
    await db.open()
    const res = await db.query('SELECT FROM V LIMIT 1')
    console.log('res', res)
  } catch (err) {
    console.log('err', err)
  }

  return db
}

export default createDb
