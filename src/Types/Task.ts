export interface Task {
  title: string
  description: string
  tableData: Object[]
  hasViolatingColumns: boolean
  hasViolatingColumnsExplanation?: string
  violatingColumns: string[]
  violatingColumnsExplanation?: string
  firstNormalFormTableData?: Object[]
  functionalDependencies: {
    primaryKeys: string[]
    columns: string[]
    type: string
  }[]
  functionalDependenciesExplanation?: string
  functionalDependencyTypesExplanation? : string
  primaryKeys: string[]
  primaryKeysExplanation?: string
  secondNormalForm: {
    primaryKeys: string[]
    columns: string[]
  }[]
  secondNormalFormExplanation?: string
  secondFormTableData: Object[][]
  alreadyThirdNormalForm: boolean
  alreadyThirdNormalFormExplanation?: string
  thirdNormalFormSolutions: {
    primaryKeys: string[]
    columns: string[]
  }[]
  thirdNormalFormExplanation?: string
}
