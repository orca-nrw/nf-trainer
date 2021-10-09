import React from 'react'
import Table from './Table'

interface PropTypes {
  gridData: Object[][]
}

export default function TableGrid ({ gridData }: PropTypes) {
  if (gridData.length > 1) {
    return (
    <div className="grid grid-cols-2 gap-4">
      {gridData.map((tableData, index) => {
        return <Table tableData={tableData} key={index} />
      })}
    </div>
    )
  } else {
    return (
      <Table tableData={gridData[0]} />
    )
  }
}
