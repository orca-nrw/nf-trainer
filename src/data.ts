export default [
  {
    id: 1,
    description: 'In der folgenden Tabelle wird beschrieben, welche Personen in ihren Veranstaltungen Skripte in welcher Anzahl verkaufen.',
    tableData: [
      {
        Veranstaltungsnummer: 112,
        Veranstaltungsname: 'Englisch',
        Personalnummer: 198,
        Name: 'Schulz',
        Skriptnummer: 2,
        Preis: 25,
        Anzahl: 4
      },
      {
        Veranstaltungsnummer: 112,
        Veranstaltungsname: 'Englisch',
        Personalnummer: 237,
        Name: 'Lange',
        Skriptnummer: 9,
        Preis: 44,
        Anzahl: 5
      },
      {
        Veranstaltungsnummer: 112,
        Veranstaltungsname: 'Englisch',
        Personalnummer: 11,
        Name: 'Meyer',
        Skriptnummer: 2,
        Preis: 25,
        Anzahl: 4
      },
      {
        Veranstaltungsnummer: 202,
        Veranstaltungsname: 'Spanisch',
        Personalnummer: 198,
        Name: 'Schulz',
        Skriptnummer: 4,
        Preis: 22,
        Anzahl: 9
      }
    ],
    hasViolatingColumns: false,
    violatingColumns: [],
    functionalDependencies: [
      {
        primaryKeys: ['Veranstaltungsnummer'],
        columns: ['Veranstaltungsname'],
        type: 'partiell'
      },
      {
        primaryKeys: ['Personalnummer'],
        columns: ['Name'],
        type: 'partiell'
      },
      {
        primaryKeys: ['Skriptnummer'],
        columns: ['Preis'],
        type: 'partiell'
      },
      {
        primaryKeys: ['Veranstaltungsnummer', 'Personalnummer', 'Skriptnummer'],
        columns: ['Anzahl'],
        type: 'voll'
      }
    ],
    primaryKeys: ['Veranstaltungsnummer', 'Personalnummer', 'Skriptnummer'],
    secondNormalForm: [
      {
        primaryKeys: ['Veranstaltungsnummer'],
        columns: ['Veranstaltungsname']
      },
      {
        primaryKeys: ['Personalnummer'],
        columns: ['Name']
      },
      {
        primaryKeys: ['Skriptnummer'],
        columns: ['Preis']
      },
      {
        primaryKeys: ['Veranstaltungsnummer', 'Personalnummer', 'Skriptnummer'],
        columns: ['Anzahl']
      }
    ],
    secondFormTableData: [
      [
        {
          Veranstaltungsnummer: 202,
          Veranstaltungsname: 'Spanisch'
        },
        {
          Veranstaltungsnummer: 112,
          Veranstaltungsname: 'Englisch'
        }
      ],
      [
        {
          Personalnummer: 11,
          Name: 'Meyer'
        },
        {
          Personalnummer: 198,
          Name: 'Schulz'
        },
        {
          Personalnummer: 237,
          Name: 'Lange'
        }
      ],
      [
        {
          Skriptnummer: 2,
          Preis: 25
        },
        {
          Skriptnummer: 4,
          Preis: 22
        },
        {
          Skriptnummer: 9,
          Preis: 44
        }
      ],
      [
        {
          Veranstaltungsnummer: 112,
          Personalnummer: 237,
          Skriptnummer: 9,
          Anzahl: 5
        },
        {
          Veranstaltungsnummer: 112,
          Personalnummer: 198,
          Skriptnummer: 2,
          Anzahl: 4
        },
        {
          Veranstaltungsnummer: 112,
          Personalnummer: 11,
          Skriptnummer: 2,
          Anzahl: 4
        },
        {
          Veranstaltungsnummer: 202,
          Personalnummer: 198,
          Skriptnummer: 4,
          Anzahl: 9
        }
      ]
    ],
    thirdNormalFormSolutions: [
      {
        primaryKeys: ['Veranstaltungsnummer'],
        columns: ['Veranstaltungsname']
      },
      {
        primaryKeys: ['Personalnummer'],
        columns: ['Name']
      },
      {
        primaryKeys: ['Skriptnummer'],
        columns: ['Preis']
      },
      {
        primaryKeys: ['Veranstaltungsnummer', 'Personalnummer', 'Skriptnummer'],
        columns: ['Anzahl']
      }
    ]
  }
]
