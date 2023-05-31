import * as Papa from 'papaparse'
import { type Request, type Response } from 'express'

export const parseGoogleSheets = async (req: Request, res: Response) => {
  try {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/1SJ8LxWmaxKBTgDJLvfD9NZLctBT931x19--qH2yLxck/pub?output=csv',
      {
        download: true,
        header: true,
        complete: (results) => {
          return res.status(200).json({ message: 'Parsing Google Sheets', data: results.data })
        },
      }
    )
  } catch (error) {
      console.error(error)
      return res.status(500).json({ error: error.message })
    }
}
