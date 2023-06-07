import { type Request, type Response } from 'express'
import { google } from 'googleapis'
import config from '@src/config'
import { cleanResponse } from '@src/api/utils/object'
import { authFunction } from '@src/api/utils/auth'

export const parseGoogleSheets = async (req: Request, res: Response) => {
  try {
    const googleSheets = google.sheets('v4')
    const getRows = await googleSheets.spreadsheets.values.get({
      auth: authFunction(),
      spreadsheetId: config.google.spreadsheetId,
      range: 'Sheet1!A:B',
    })
    const data = cleanResponse(getRows.data.values)
    return res.status(200).json({ data })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error.message })
  }
}

//Write row(s) to spreadsheet
//await googleSheets.spreadsheets.values.append({
//auth,
//spreadsheetId,
//range: 'Sheet1!A:B',
//valueInputOption: 'USER_ENTERED',
//resource: {
// /values: [[request, name]],
//},/})
