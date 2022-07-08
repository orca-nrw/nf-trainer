import React from 'react'

interface PropType {
  tableData: Object[]
  primaryKeys?: string[]
}

export default function Table({ tableData, primaryKeys }: PropType) {
  const columnHeaders = Object.keys(tableData[0])
  const primaryKeyColumnIndices =
    primaryKeys
      ?.filter((key) => columnHeaders.includes(key))
      .map((key) => columnHeaders.indexOf(key)) || []

  return (
    <div className="overflow-x-auto">
      <table className="shadow  w-full">
        <thead>
          <tr className="border">
            {Object.keys(tableData[0]).map((key) => {
              return (
                <th
                  className="bg-gray-100 border text-left px-4 py-2 whitespace-nowrap"
                  key={key}
                >
                  {key} {primaryKeys && primaryKeys.includes(key) ? '🔑' : ''}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => {
            return (
              <tr className={index % 2 === 1 ? 'bg-gray-50' : ''} key={index}>
                {Object.values(row).map((entry, index) => {
                  return (
                    <td
                      className={`border px-4 py-2 ${
                        // Primary Key columns should be highlighted
                        primaryKeyColumnIndices?.includes(index)
                          ? 'font-bold italic'
                          : ''
                      }`}
                      key={index}
                    >
                      {entry}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
