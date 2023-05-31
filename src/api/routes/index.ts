import { Router } from 'express'
import healthCheckRoute from '@src/api/routes/healthcheck'
import GoogleSheetRouter from '@src/api/routes/googleSheets.router'

export default (): Router => {
  const router = Router()
  router.use('/health', healthCheckRoute)
  router.use('/google-sheets', GoogleSheetRouter)
  return router
}
