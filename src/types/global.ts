export interface Task {
  id: number,
  description: string,
  tableData: object[],
  hasViolatingColumns: boolean,
  violatingColumns: string[]
}

