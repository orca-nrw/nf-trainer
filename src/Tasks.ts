interface Task {
  id: number,
  description: string,
  tableData: Object[],
  hasViolatingColumns: boolean,
  violatingColumns: string[],
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
  thirdNormalFormSolutions: {
    primaryKeys: string[],
    columns: string[]
  }[]
}

const tasks: Task[] = [
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
  },
  {
    id: 2,
    description: `Betrachten Sie die folgende, in der Arztpraxis von Dr. Beschränkt geführte Tabelle, wobei KK für Krankenkasse und P für Patient steht. 
    Ein Patient gehört genau einer Krankenkasse an und hat an einem Behandlungstag zu einer Diagnose höchsten eine Therapie.`,
    tableData: [
      {
        KK_NR: 1467,
        KK_Name: 'AOK-GM',
        P_Name: 'Müller, Erwin',
        P_Adresse: 'GM',
        P_Geb_Tag: '13.08.56',
        Behandlungstag: '04.04.02; 31.03.02',
        Diagnose: 'Hautrötung; Abschürfung; Sodbrennen; Tennisarm',
        Therapie: 'Salbe; Pflaster; Tabletten; Spritze',
        KK_Adresse: 'GM',
        Diagnose_Beschreibung: 'Haut ist rot, Teile der Haut sind abgeschürft, Patient hat Sodbrennen, Patient hat einen Tennisarm',
        P_Tel: '02261/45556'
      },
      {
        KK_NR: 1789,
        KK_Name: 'BKK-Textil',
        P_Name: 'Meier, Ema',
        P_Adresse: 'Berg-Gladbach',
        P_Geb_Tag: '12.11.67',
        Behandlungstag: '31.05.02',
        Diagnose: 'Sodbrennen',
        Therapie: 'Tabletten',
        KK_Adresse: 'Köln',
        Diagnose_Beschreibung: 'Patient hat Sodbrennen',
        P_Tel: '02263/344785'
      },
      {
        KK_NR: 3456,
        KK_Name: 'TK',
        P_Name: 'Bäcker, Arno',
        P_Adresse: 'GM',
        P_Geb_Tag: '30.04.80',
        Behandlungstag: '12.09.02',
        Diagnose: 'Abschürfung',
        Therapie: 'Pflaster',
        KK_Adresse: 'Köln',
        Diagnose_Beschreibung: 'Teile der Haut sind abgeschürft',
        P_Tel: '02261/643678'
      },
      {
        KK_NR: 3456,
        KK_Name: 'TK',
        P_Name: 'Schulz, Hugo',
        P_Adresse: 'Köln',
        P_Geb_Tag: '30.06.79',
        Behandlungstag: '08.09.99',
        Diagnose: 'Tennisarm',
        Therapie: 'Spritze',
        KK_Adresse: 'Köln',
        Diagnose_Beschreibung: 'Patient hat einen Tennisarm',
        P_Tel: '0221/5477428'
      }
    ],
    hasViolatingColumns: true,
    violatingColumns: ['Behandlungstag', 'Diagnose_Beschreibung', 'Diagnose', 'Therapie'],
    functionalDependencies: [
      {
        primaryKeys: ['KK_NR'],
        columns: ['KK_Name', 'KK_Adresse'],
        type: 'transitiv'
      },
      {
        primaryKeys: ['P_Name'],
        columns: ['KK_NR', 'KK_Name', 'P_Adresse', 'P_Geb_Tag', 'KK_Adresse', 'P_Tel'],
        type: 'partiell'
      },
      {
        primaryKeys: ['P_Name', 'Behandlungstag', 'Diagnose'],
        columns: ['Therapie'],
        type: 'voll'
      },
      {
        primaryKeys: ['Diagnose'],
        columns: ['Diagnose_Beschreibung'],
        type: 'partiell'
      }
    ],
    primaryKeys: ['P_Name', 'Behandlungstag', 'Diagnose'],
    secondNormalForm: [
      {
        primaryKeys: ['P_Name'],
        columns: ['KK_NR', 'KK_Name', 'P_Adresse', 'P_Geb_Tag', 'KK_Adresse', 'P_Tel']
      },
      {
        primaryKeys: ['P_Name', 'Behandlungstag', 'Diagnose'],
        columns: ['Therapie']
      },
      {
        primaryKeys: ['Diagnose'],
        columns: ['Diagnose_Beschreibung']
      }
    ],
    secondFormTableData: [
      [
        {
          P_Name: 'Müller, Erwin',
          KK_NR: '1467',
          KK_Name: 'AOK-GM',
          P_Adresse: 'GM',
          P_Geb_Tag: '13.08.56',
          KK_Adresse: 'GM',
          P_Tel: '02261/45556'
        },
        {
          P_Name: 'Meier, Ema',
          KK_NR: '1789',
          KK_Name: 'BKK-Textil',
          P_Adresse: 'Berg.-Gladb.',
          P_Geb_Tag: '12.11.67',
          KK_Adresse: 'Köln',
          P_Tel: '02263/344785'
        },
        {
          P_Name: 'Bäcker, Arno',
          KK_NR: '3456',
          KK_Name: 'TK',
          P_Adresse: 'GM',
          P_Geb_Tag: '30.04.80',
          KK_Adresse: 'Köln',
          P_Tel: '02261/643678'
        },
        {
          P_Name: 'Schulz, Hugo',
          KK_NR: '3456',
          KK_Name: 'TK',
          P_Adresse: 'Köln',
          P_Geb_Tag: '30.06.79',
          KK_Adresse: 'Köln',
          P_Tel: '0221/5477428'
        }
      ],
      [
        {
          P_Name: 'Meier, Ema',
          Behandlungstag: '31.05.98',
          Diagnose: 'Sodbrennen',
          Therapie: 'Tabletten'
        },
        {
          P_Name: 'Müller, Erwin',
          Behandlungstag: '31.03.99',
          Diagnose: 'Tennisarm',
          Therapie: 'Spritze'
        },
        {
          P_Name: 'Müller, Erwin',
          Behandlungstag: '04.04.98',
          Diagnose: 'Hautrötung',
          Therapie: 'Salbe'
        },
        {
          P_Name: 'Müller, Erwin',
          Behandlungstag: '04.04.98',
          Diagnose: 'Abschürfung',
          Therapie: 'Pflaster'
        },
        {
          P_Name: 'Müller, Erwin',
          Behandlungstag: '04.04.98',
          Diagnose: 'Sodbrennen',
          Therapie: 'Tabletten'
        },
        {
          P_Name: 'Bäcker, Arno',
          Behandlungstag: '12.09.99',
          Diagnose: 'Abschürfung',
          Therapie: 'Pflaster'
        },
        {
          P_Name: 'Schulz, Hugo',
          Behandlungstag: '08.09.99',
          Diagnose: 'Tennisarm',
          Therapie: 'Spritze'
        }
      ],
      [
        {
          Diagnose: 'Abschürfung',
          Diagnose_Beschreibung: 'Teile der Haut sind abgeschürft'
        },
        {
          Diagnose: 'Tennisarm',
          Diagnose_Beschreibung: 'Patient hat einen Tennisarm'
        },
        {
          Diagnose: 'Sodbrennen',
          Diagnose_Beschreibung: 'Patient hat Sodbrennen'
        },
        {
          Diagnose: 'Hautrötung',
          Diagnose_Beschreibung: 'Haut ist rot'
        }
      ]
    ],
    thirdNormalFormSolutions: [
      {
        primaryKeys: ['P_Name'],
        columns: ['P_Adresse', 'P_Geb_Tag', 'P_Tel', 'KK_NR']
      },
      {
        primaryKeys: ['KK_NR'],
        columns: ['KK_Name', 'KK_Adresse']
      },
      {
        primaryKeys: ['P_Name', 'Behandlungstag', 'Diagnose'],
        columns: ['Therapie']
      },
      {
        primaryKeys: ['Diagnose'],
        columns: ['Diagnose_Beschreibung']
      }
    ]
  }
]

export default tasks
