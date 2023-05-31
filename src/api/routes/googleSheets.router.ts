import { Router } from 'express'
import { parseGoogleSheets } from '@src/api/services/googleSheets.service'

const GoogleSheetRouter = Router()
GoogleSheetRouter.get('/parse', parseGoogleSheets)

export default GoogleSheetRouter
