import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "sEGH8gzdQfQ5u90Nn8RLoDmQ+Z8hGtHzXtOwcQOXYZKHdnYMuYN7z1vx3gVEXl6Q",
      cookieSecret: process.env.COOKIE_SECRET || "CrzBLEVRcQIg3wBxffo6Z/jN29NHMd4KxtVosMZIEZ0E470gk2wkNyenvyhqVm3q",
    }
  }
})
