export interface Task {
  id: number,
  title: string,
  description: string,
  tableData: Object[],
  hasViolatingColumns: boolean,
  violatingColumns: string[],
  firstNormalFormTableData?: Object[],
  functionalDependencies: {
    primaryKeys: string[],
    columns: string[],
    type: string
  }[],
  primaryKeys: string[],
  secondNormalForm: {
    primaryKeys: string[],
    columns: string[]
  }[],
  secondFormTableData: Object[][],
  alreadyThirdNormalForm: boolean,
  thirdNormalFormSolutions: {
    primaryKeys: string[],
    columns: string[]
  }[]
}
