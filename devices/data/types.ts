export type Status = 'latest' | 'compatible' | 'none'

export type GridCell = { html: string | null; span: number } | null

export interface Device {
  slug: string
  name: string
  category: string
  status: Status
  /** Display label for the summary chart, e.g. "iOS 26.1 (26.2 beta 1)" */
  version: string
  /** e.g. "There are no available tools..." shown under the device heading */
  note: string | null
  /** Table header labels, e.g. ["From","To","Hello Screen","Passcode Screen"] */
  columns: string[]
  /** One row per array entry, one GridCell per column (same length as columns) */
  grid: GridCell[][]
}
