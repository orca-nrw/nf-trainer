import { Task } from './Types/Task'

const tasks: Task[] = [
  {
    id: 1,
    title: 'Skriptverkauf',
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
    alreadyThirdNormalForm: true,
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
    title: 'Patienten der Arztpraxis',
    description: 'Betrachten Sie die folgende, in der Arztpraxis von Dr. Beschränkt geführte Tabelle, wobei KK für Krankenkasse und P für Patient steht. \nEin Patient gehört genau einer Krankenkasse an und hat an einem Behandlungstag zu einer Diagnose höchsten eine Therapie.',
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
        Diagnose_Beschreibung: 'Haut ist gerötet, Teile der Haut sind abgeschürft, Patient hat Sodbrennen, Patient hat einen Tennisarm',
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
    firstNormalFormTableData: [
      {
        KK_NR: 1467,
        KK_Name: 'AOK-GM',
        P_Name: 'Müller, Erwin',
        P_Adresse: 'GM',
        P_Geb_Tag: '13.08.56',
        Behandlungstag: '31.03.99',
        Diagnose: 'Tennisarm',
        Therapie: 'Spritze',
        KK_Adresse: 'GM',
        Diagnose_Beschreibung: 'Patient hat einen Tennisarm',
        P_Tel: '02261/45556'
      },
      {
        KK_NR: 1467,
        KK_Name: 'AOK-GM',
        P_Name: 'Müller, Erwin',
        P_Adresse: 'GM',
        P_Geb_Tag: '13.08.56',
        Behandlungstag: '04.04.98',
        Diagnose: 'Abschürfung',
        Therapie: 'Pflaster',
        KK_Adresse: 'GM',
        Diagnose_Beschreibung: 'Teile der Haut sind abgeschürft',
        P_Tel: '02261/45556'
      },
      {
        KK_NR: 1467,
        KK_Name: 'AOK-GM',
        P_Name: 'Müller, Erwin',
        P_Adresse: 'GM',
        P_Geb_Tag: '13.08.56',
        Behandlungstag: '04.04.98',
        Diagnose: 'Sodbrennen',
        Therapie: 'Tabletten',
        KK_Adresse: 'GM',
        Diagnose_Beschreibung: 'Patient hat Sodbrennen',
        P_Tel: '02261/45556'
      },
      {
        KK_NR: 1789,
        KK_Name: 'BKK-Textil',
        P_Name: 'Meier, Ema',
        P_Adresse: 'Berg.-Gladb.',
        P_Geb_Tag: '12.11.67',
        Behandlungstag: '31.05.98',
        Diagnose: 'Sodbrennen',
        Therapie: 'Tabletten',
        KK_Adresse: 'Köln',
        Diagnose_Beschreibung: 'Patient hat Sodbrennen',
        P_Tel: '02263/344785'
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
      },
      {
        KK_NR: 1467,
        KK_Name: 'AOK-GM',
        P_Name: 'Müller, Erwin',
        P_Adresse: 'GM',
        P_Geb_Tag: '13.08.56',
        Behandlungstag: '04.04.98',
        Diagnose: 'Hautrötung',
        Therapie: 'Salbe',
        KK_Adresse: 'GM',
        Diagnose_Beschreibung: 'Haut ist gerötet',
        P_Tel: '02261/45556'
      },
      {
        KK_NR: 3456,
        KK_Name: 'TK',
        P_Name: 'Bäcker, Arno',
        P_Adresse: 'GM',
        P_Geb_Tag: '30.04.80',
        Behandlungstag: '12.09.99',
        Diagnose: 'Abschürfung',
        Therapie: 'Pflaster',
        KK_Adresse: 'Köln',
        Diagnose_Beschreibung: 'Teile der Haut sind abgeschürft',
        P_Tel: '02261/643678'
      }
    ],
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
          Diagnose_Beschreibung: 'Haut ist gerötet'
        }
      ]
    ],
    alreadyThirdNormalForm: false,
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
  },
  {
    id: 3,
    title: 'Küchen-Großhändler',
    description: 'Ein Großhändler für Küchenartikel hat die Bestellungen seiner Kunden tabellarisch zusammengefasst. \nDabei stehen die Präfixe K_ für Kunden, A_ für Artikel und H_ für Hersteller. \n\nAußerdem gilt: \nDie Kombination Kunde-Artikel kommt in der Tabelle jeweils nur einmal vor, da alte Bestellungen gelöscht werden. \nEin Artikel wird immer nur von einem Hersteller geliefert.',
    tableData: [
      {
        K_NR: '1003',
        K_Name: 'Lüdtke',
        K_Adresse: 'Marienheide',
        A_NR: 'A13',
        A_Bezeichnung: 'Alu-Topf1',
        H_NR: 'H01',
        H_Name: 'PBTopf',
        A_Preis: '10,70',
        Bestellmenge: '100'
      },
      {
        K_NR: '1003',
        K_Name: 'Lüdtke',
        K_Adresse: 'Marienheide',
        A_NR: 'A36',
        A_Bezeichnung: 'Besteck',
        H_NR: 'H03',
        H_Name: 'Kochass',
        A_Preis: '21,80',
        Bestellmenge: '80'
      },
      {
        K_NR: '1004',
        K_Name: 'Maier',
        K_Adresse: 'Dortmund',
        A_NR: 'A11',
        A_Bezeichnung: 'Stahl-Topf',
        H_NR: 'H10',
        H_Name: 'IKEA',
        A_Preis: '16,20',
        Bestellmenge: '150'
      },
      {
        K_NR: '1001',
        K_Name: 'Schmidt',
        K_Adresse: 'Gummersbach',
        A_NR: 'A11',
        A_Bezeichnung: 'Stahl-Topf',
        H_NR: 'H10',
        H_Name: 'IKEA',
        A_Preis: '16,20',
        Bestellmenge: '90'
      },
      {
        K_NR: '1001',
        K_Name: 'Schmidt',
        K_Adresse: 'Gummersbach',
        A_NR: 'A17',
        A_Bezeichnung: 'Bratpfanne',
        H_NR: 'H04',
        H_Name: 'Gourmet',
        A_Preis: '31,50',
        Bestellmenge: '50'
      },
      {
        K_NR: '1002',
        K_Name: 'Müller',
        K_Adresse: 'Lindlar',
        A_NR: 'A09',
        A_Bezeichnung: 'Schüssel',
        H_NR: 'H03',
        H_Name: 'Kochass',
        A_Preis: '23,30',
        Bestellmenge: '80'
      },
      {
        K_NR: '1003',
        K_Name: 'Lüdtke',
        K_Adresse: 'Marienheide',
        A_NR: 'A14',
        A_Bezeichnung: 'Alu-Topf2',
        H_NR: 'H01',
        H_Name: 'PBTopf',
        A_Preis: '14,50',
        Bestellmenge: '50'
      },
      {
        K_NR: '1004',
        K_Name: 'Maier',
        K_Adresse: 'Dortmund',
        A_NR: 'A09',
        A_Bezeichnung: 'Schüssel',
        H_NR: 'H03',
        H_Name: 'Kochass',
        A_Preis: '23,30',
        Bestellmenge: '100'
      }
    ],
    hasViolatingColumns: false,
    violatingColumns: [],
    functionalDependencies: [
      {
        primaryKeys: [
          'K_NR'
        ],
        columns: [
          'K_Name',
          'K_Adresse'
        ],
        type: 'partiell'
      },
      {
        primaryKeys: [
          'A_NR'
        ],
        columns: [
          'A_Bezeichnung',
          'H_NR',
          'H_Name',
          'A_Preis'
        ],
        type: 'partiell'
      },
      {
        primaryKeys: [
          'H_NR'
        ],
        columns: [
          'H_Name'
        ],
        type: 'transitiv'
      },
      {
        primaryKeys: [
          'K_NR',
          'A_NR'
        ],
        columns: [
          'Bestellmenge'
        ],
        type: 'voll'
      }
    ],
    primaryKeys: [
      'K_NR',
      'A_NR'
    ],
    secondNormalForm: [
      {
        primaryKeys: [
          'K_NR'
        ],
        columns: [
          'K_Name',
          'K_Adresse'
        ]
      },
      {
        primaryKeys: [
          'A_NR'
        ],
        columns: [
          'A_Bezeichnung',
          'H_NR',
          'H_Name',
          'A_Preis'
        ]
      },
      {
        primaryKeys: [
          'K_NR',
          'A_NR'
        ],
        columns: [
          'Bestellmenge'
        ]
      }
    ],
    secondFormTableData: [
      [
        {
          K_NR: '1002',
          K_Name: 'Müller',
          K_Adresse: 'Lindlar'
        },
        {
          K_NR: '1001',
          K_Name: 'Schmidt',
          K_Adresse: 'Gummersbach'
        },
        {
          K_NR: '1003',
          K_Name: 'Lüdtke',
          K_Adresse: 'Marienheide'
        },
        {
          K_NR: '1004',
          K_Name: 'Maier',
          K_Adresse: 'Dortmund'
        }
      ],
      [
        {
          A_NR: 'A13',
          A_Bezeichnung: 'Alu-Topf1',
          H_NR: 'H01',
          H_Name: 'PBTopf',
          A_Preis: '10,70'
        },
        {
          A_NR: 'A09',
          A_Bezeichnung: 'Schüssel',
          H_NR: 'H03',
          H_Name: 'Kochass',
          A_Preis: '23,30'
        },
        {
          A_NR: 'A14',
          A_Bezeichnung: 'Alu-Topf2',
          H_NR: 'H01',
          H_Name: 'PBTopf',
          A_Preis: '14,50'
        },
        {
          A_NR: 'A36',
          A_Bezeichnung: 'Besteck',
          H_NR: 'H03',
          H_Name: 'Kochass',
          A_Preis: '21,80'
        },
        {
          A_NR: 'A11',
          A_Bezeichnung: 'Stahl-Topf',
          H_NR: 'H10',
          H_Name: 'IKEA',
          A_Preis: '16,20'
        },
        {
          A_NR: 'A17',
          A_Bezeichnung: 'Bratpfanne',
          H_NR: 'H04',
          H_Name: 'Gourmet',
          A_Preis: '31,50'
        }
      ],
      [
        {
          K_NR: '1003',
          A_NR: 'A36',
          Bestellmenge: '80'
        },
        {
          K_NR: '1001',
          A_NR: 'A11',
          Bestellmenge: '90'
        },
        {
          K_NR: '1003',
          A_NR: 'A13',
          Bestellmenge: '100'
        },
        {
          K_NR: '1003',
          A_NR: 'A14',
          Bestellmenge: '50'
        },
        {
          K_NR: '1001',
          A_NR: 'A17',
          Bestellmenge: '50'
        },
        {
          K_NR: '1004',
          A_NR: 'A11',
          Bestellmenge: '150'
        },
        {
          K_NR: '1004',
          A_NR: 'A09',
          Bestellmenge: '100'
        },
        {
          K_NR: '1002',
          A_NR: 'A09',
          Bestellmenge: '80'
        }
      ]
    ],
    alreadyThirdNormalForm: false,
    thirdNormalFormSolutions: [
      {
        primaryKeys: [
          'K_NR'
        ],
        columns: [
          'K_Name',
          'K_Adresse'
        ]
      },
      {
        primaryKeys: [
          'K_NR',
          'A_NR'
        ],
        columns: [
          'Bestellmenge'
        ]
      },
      {
        primaryKeys: [
          'H_NR'
        ],
        columns: [
          'H_Name'
        ]
      },
      {
        primaryKeys: [
          'A_NR'
        ],
        columns: [
          'A_Bezeichnung',
          'H_NR',
          'A_Preis'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Autohändler',
    description: 'Ein Autohändler speichert die von ihm angebotenen Fahrzeuge in einer redundanten Tabelle. \n\nDabei gilt: \nAdresse und das Land beziehen sich auf den Hersteller. \nDie Adresse wird nur als zusammenhängendes Textfeld gespeichert. \nDie ID bezieht sich auf ein konkretes Fahrzeug bzw. Motorrad. \nDer Typ und die Anzahl der Räder hängen vom Modell und vom Hersteller ab.',
    tableData: [
      {
        ID: '4718',
        Hersteller: 'Vespa',
        Modell: 'II',
        Typ: 'Motorrad',
        Anz_Raeder: '2',
        PS: '6',
        Adresse: 'La Strada 2, 1223 Rom',
        Land: 'Italien',
        Klimaanlage: 'Nein'
      },
      {
        ID: '4714',
        Hersteller: 'Suzuki',
        Modell: 'GX',
        Typ: 'Motorrad',
        Anz_Raeder: '2',
        PS: '80',
        Adresse: 'Koniciva 3, Yokahama',
        Land: 'Japan',
        Klimaanlage: 'Nein'
      },
      {
        ID: '4717',
        Hersteller: 'VW',
        Modell: 'Golf',
        Typ: 'PKW',
        Anz_Raeder: '4',
        PS: '92',
        Adresse: 'Volkswagenstr, 10; 34444 Wolfsburg',
        Land: 'Deutschland',
        Klimaanlage: 'Ja'
      },
      {
        ID: '4711',
        Hersteller: 'VW',
        Modell: 'Käfer',
        Typ: 'PKW',
        Anz_Raeder: '4',
        PS: '45',
        Adresse: 'Volkswagenstr, 10; 34444 Wolfsburg',
        Land: 'Deutschland',
        Klimaanlage: 'Ja'
      },
      {
        ID: '4712',
        Hersteller: 'Hanomag',
        Modell: 'II',
        Typ: 'LKW',
        Anz_Raeder: '4',
        PS: '220',
        Adresse: 'Musterstr,27, 2222 Hamburg',
        Land: 'Deutschland',
        Klimaanlage: 'Nein'
      },
      {
        ID: '4715',
        Hersteller: 'Ford',
        Modell: 'Focus',
        Typ: 'PKW',
        Anz_Raeder: '4',
        PS: '65',
        Adresse: 'Fritzweg 26, 54478 Köln',
        Land: 'Deutschland',
        Klimaanlage: 'Ja'
      },
      {
        ID: '4716',
        Hersteller: 'VW',
        Modell: 'Golf',
        Typ: 'PKW',
        Anz_Raeder: '4',
        PS: '72',
        Adresse: 'Volkswagenstr, 10; 34444 Wolfsburg',
        Land: 'Deutschland',
        Klimaanlage: 'Nein'
      }
    ],
    hasViolatingColumns: false,
    violatingColumns: [],
    functionalDependencies: [
      {
        primaryKeys: [
          'Hersteller'
        ],
        columns: [
          'Adresse',
          'Land'
        ],
        type: 'transitiv'
      },
      {
        primaryKeys: [
          'Hersteller',
          'Modell'
        ],
        columns: [
          'Typ',
          'Anz_Raeder'
        ],
        type: 'transitiv'
      },
      {
        primaryKeys: [
          'ID'
        ],
        columns: [
          'Hersteller',
          'Modell',
          'Typ',
          'Anz_Raeder',
          'PS',
          'Adresse',
          'Land',
          'Klimaanlage'
        ],
        type: 'voll'
      }
    ],
    primaryKeys: [
      'ID'
    ],
    secondNormalForm: [
      {
        primaryKeys: [
          'ID'
        ],
        columns: [
          'Hersteller',
          'Modell',
          'Typ',
          'Anz_Raeder',
          'PS',
          'Adresse',
          'Land',
          'Klimaanlage'
        ]
      }
    ],
    secondFormTableData: [
      [
        {
          ID: '4717',
          Hersteller: 'VW',
          Modell: 'Golf',
          Typ: 'PKW',
          Anz_Raeder: '4',
          PS: '92',
          Adresse: 'Volkswagenstr, 10; 34444 Wolfsburg',
          Land: 'Deutschland',
          Klimaanlage: 'Ja'
        },
        {
          ID: '4718',
          Hersteller: 'Vespa',
          Modell: 'II',
          Typ: 'Motorrad',
          Anz_Raeder: '2',
          PS: '6',
          Adresse: 'La Strada 2, 1223 Rom',
          Land: 'Italien',
          Klimaanlage: 'Nein'
        },
        {
          ID: '4715',
          Hersteller: 'Ford',
          Modell: 'Focus',
          Typ: 'PKW',
          Anz_Raeder: '4',
          PS: '65',
          Adresse: 'Fritzweg 26, 54478 Köln',
          Land: 'Deutschland',
          Klimaanlage: 'Ja'
        },
        {
          ID: '4711',
          Hersteller: 'VW',
          Modell: 'Käfer',
          Typ: 'PKW',
          Anz_Raeder: '4',
          PS: '45',
          Adresse: 'Volkswagenstr, 10; 34444 Wolfsburg',
          Land: 'Deutschland',
          Klimaanlage: 'Ja'
        },
        {
          ID: '4716',
          Hersteller: 'VW',
          Modell: 'Golf',
          Typ: 'PKW',
          Anz_Raeder: '4',
          PS: '72',
          Adresse: 'Volkswagenstr, 10; 34444 Wolfsburg',
          Land: 'Deutschland',
          Klimaanlage: 'Nein'
        },
        {
          ID: '4712',
          Hersteller: 'Hanomag',
          Modell: 'II',
          Typ: 'LKW',
          Anz_Raeder: '4',
          PS: '220',
          Adresse: 'Musterstr,27, 2222 Hamburg',
          Land: 'Deutschland',
          Klimaanlage: 'Nein'
        },
        {
          ID: '4714',
          Hersteller: 'Suzuki',
          Modell: 'GX',
          Typ: 'Motorrad',
          Anz_Raeder: '2',
          PS: '80',
          Adresse: 'Koniciva 3, Yokahama',
          Land: 'Japan',
          Klimaanlage: 'Nein'
        }
      ]
    ],
    alreadyThirdNormalForm: false,
    thirdNormalFormSolutions: [
      {
        primaryKeys: [
          'ID'
        ],
        columns: [
          'Hersteller',
          'Modell',
          'PS',
          'Klimaanlage'
        ]
      },
      {
        primaryKeys: [
          'Hersteller'
        ],
        columns: [
          'Adresse',
          'Land'
        ]
      },
      {
        primaryKeys: [
          'Hersteller',
          'Modell'
        ],
        columns: [
          'Typ',
          'Anz_Raeder'
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Prüfungsamt',
    description: 'Betrachten Sie die folgende, im Prüfungsamt geführte Tabelle. \n\nDabei stehen die Präfixe P_ für Prüfer, S_ für Studierender und Fak_ für Fakultät. \nAußerdem ist die Fakultätsnummer einer Prüfung zugeordnet, nicht dem Studierenden.',
    tableData: [
      {
        P_NR: '1',
        P_Name: 'Bertelsmeier',
        Fach: 'Datenbanken',
        Mat_NR: '230800',
        S_Name: 'Schmidt',
        S_Geb_Tag: '04.05.79',
        Fak_NR: '20',
        Fak_Name: 'Informatik',
        Dekan: 'Stahl',
        Note: '2.7',
        Datum_Pruefung: '11.07.2008'
      },
      {
        P_NR: '1',
        P_Name: 'Bertelsmeier',
        Fach: 'Datenbanken',
        Mat_NR: '230799',
        S_Name: 'Maier',
        S_Geb_Tag: '04.04.79',
        Fak_NR: '20',
        Fak_Name: 'Informatik',
        Dekan: 'Stahl',
        Note: '3',
        Datum_Pruefung: '11.07.2008'
      },
      {
        P_NR: '2',
        P_Name: 'Buse',
        Fach: 'Mathematik',
        Mat_NR: '237681',
        S_Name: 'Wein',
        S_Geb_Tag: '01.04.80',
        Fak_NR: '18',
        Fak_Name: 'Elektrotechnik',
        Dekan: 'Bongrads',
        Note: '3',
        Datum_Pruefung: '15.07.2008'
      },
      {
        P_NR: '2',
        P_Name: 'Buse',
        Fach: 'Mathematik',
        Mat_NR: '237682',
        S_Name: 'Josch',
        S_Geb_Tag: '08.09.70',
        Fak_NR: '18',
        Fak_Name: 'Elektrotechnik',
        Dekan: 'Bongrads',
        Note: '4',
        Datum_Pruefung: '15.07.2008'
      },
      {
        P_NR: '3',
        P_Name: 'Victor',
        Fach: 'Java',
        Mat_NR: '203491',
        S_Name: 'Hein',
        S_Geb_Tag: '04.05.81',
        Fak_NR: '20',
        Fak_Name: 'Informatik',
        Dekan: 'Stahl',
        Note: '2.7',
        Datum_Pruefung: '12.07.2008'
      },
      {
        P_NR: '5',
        P_Name: 'Victor',
        Fach: 'Algorithmen',
        Mat_NR: '230799',
        S_Name: 'Maier',
        S_Geb_Tag: '04.04.79',
        Fak_NR: '20',
        Fak_Name: 'Informatik',
        Dekan: 'Stahl',
        Note: '3',
        Datum_Pruefung: '12.10.2008'
      },
      {
        P_NR: '3',
        P_Name: 'Victor',
        Fach: 'Java',
        Mat_NR: '203491',
        S_Name: 'Hein',
        S_Geb_Tag: '04.05.81',
        Fak_NR: '20',
        Fak_Name: 'Informatik',
        Dekan: 'Stahl',
        Note: '2.3',
        Datum_Pruefung: '12.07.2008'
      },
      {
        P_NR: '3',
        P_Name: 'Victor',
        Fach: 'Java',
        Mat_NR: '230799',
        S_Name: 'Maier',
        S_Geb_Tag: '04.04.79',
        Fak_NR: '20',
        Fak_Name: 'Informatik',
        Dekan: 'Stahl',
        Note: '2.3',
        Datum_Pruefung: '12.07.2008'
      },
      {
        P_NR: '4',
        P_Name: 'Victor',
        Fach: 'Algorithmen',
        Mat_NR: '230799',
        S_Name: 'Maier',
        S_Geb_Tag: '04.04.79',
        Fak_NR: '20',
        Fak_Name: 'Informatik',
        Dekan: 'Stahl',
        Note: '5',
        Datum_Pruefung: '12.07.2008'
      },
      {
        P_NR: '4',
        P_Name: 'Victor',
        Fach: 'Algorithmen',
        Mat_NR: '203491',
        S_Name: 'Hein',
        S_Geb_Tag: '04.05.81',
        Fak_NR: '20',
        Fak_Name: 'Informatik',
        Dekan: 'Stahl',
        Note: '5',
        Datum_Pruefung: '12.07.2008'
      }
    ],
    hasViolatingColumns: false,
    violatingColumns: [],
    functionalDependencies: [
      {
        primaryKeys: [
          'P_NR'
        ],
        columns: [
          'P_Name',
          'Fach',
          'Fak_NR',
          'Fak_Name',
          'Dekan',
          'Datum_Pruefung'
        ],
        type: 'partiell'
      },
      {
        primaryKeys: [
          'Mat_NR'
        ],
        columns: [
          'S_Name',
          'S_Geb_Tag'
        ],
        type: 'partiell'
      },
      {
        primaryKeys: [
          'P_NR',
          'Mat_NR'
        ],
        columns: [
          'Note'
        ],
        type: 'voll'
      },
      {
        primaryKeys: [
          'Fak_NR'
        ],
        columns: [
          'Dekan',
          'Fak_Name'
        ],
        type: 'transitiv'
      }
    ],
    primaryKeys: [
      'P_NR',
      'Mat_NR'
    ],
    secondNormalForm: [
      {
        primaryKeys: [
          'P_NR'
        ],
        columns: [
          'P_Name',
          'Fach',
          'Fak_NR',
          'Fak_Name',
          'Dekan',
          'Datum_Pruefung'
        ]
      },
      {
        primaryKeys: [
          'Mat_NR'
        ],
        columns: [
          'S_Name',
          'S_Geb_Tag'
        ]
      },
      {
        primaryKeys: [
          'P_NR',
          'Mat_NR'
        ],
        columns: [
          'Note'
        ]
      }
    ],
    secondFormTableData: [
      [
        {
          P_NR: '4',
          P_Name: 'Victor',
          Fach: 'Algorithmen',
          Fak_NR: '20',
          Fak_Name: 'Informatik',
          Dekan: 'Stahl',
          Datum_Pruefung: '12.07.2008'
        },
        {
          P_NR: '2',
          P_Name: 'Buse',
          Fach: 'Mathematik',
          Fak_NR: '18',
          Fak_Name: 'Elektrotechnik',
          Dekan: 'Bongrads',
          Datum_Pruefung: '15.07.2008'
        },
        {
          P_NR: '1',
          P_Name: 'Bertelsmeier',
          Fach: 'Datenbanken',
          Fak_NR: '20',
          Fak_Name: 'Informatik',
          Dekan: 'Stahl',
          Datum_Pruefung: '11.07.2008'
        },
        {
          P_NR: '5',
          P_Name: 'Victor',
          Fach: 'Algorithmen',
          Fak_NR: '20',
          Fak_Name: 'Informatik',
          Dekan: 'Stahl',
          Datum_Pruefung: '12.10.2008'
        },
        {
          P_NR: '3',
          P_Name: 'Victor',
          Fach: 'Java',
          Fak_NR: '20',
          Fak_Name: 'Informatik',
          Dekan: 'Stahl',
          Datum_Pruefung: '12.07.2008'
        }
      ],
      [
        {
          Mat_NR: '230799',
          S_Name: 'Maier',
          S_Geb_Tag: '04.04.79'
        },
        {
          Mat_NR: '237682',
          S_Name: 'Josch',
          S_Geb_Tag: '08.09.70'
        },
        {
          Mat_NR: '237681',
          S_Name: 'Wein',
          S_Geb_Tag: '01.04.80'
        },
        {
          Mat_NR: '203491',
          S_Name: 'Hein',
          S_Geb_Tag: '04.05.81'
        },
        {
          Mat_NR: '230800',
          S_Name: 'Schmidt',
          S_Geb_Tag: '04.05.79'
        }
      ],
      [
        {
          P_NR: '4',
          Mat_NR: '203491',
          Note: '5'
        },
        {
          P_NR: '3',
          Mat_NR: '203491',
          Note: '2.3'
        },
        {
          P_NR: '2',
          Mat_NR: '237681',
          Note: '3'
        },
        {
          P_NR: '3',
          Mat_NR: '203491',
          Note: '2.7'
        },
        {
          P_NR: '4',
          Mat_NR: '230799',
          Note: '5'
        },
        {
          P_NR: '1',
          Mat_NR: '230800',
          Note: '2.7'
        },
        {
          P_NR: '5',
          Mat_NR: '230799',
          Note: '3'
        },
        {
          P_NR: '2',
          Mat_NR: '237682',
          Note: '4'
        },
        {
          P_NR: '3',
          Mat_NR: '230799',
          Note: '2.3'
        },
        {
          P_NR: '1',
          Mat_NR: '230799',
          Note: '3'
        }
      ]
    ],
    alreadyThirdNormalForm: false,
    thirdNormalFormSolutions: [
      {
        primaryKeys: [
          'P_NR'
        ],
        columns: [
          'P_Name',
          'Fach',
          'Fak_NR',
          'Datum_Pruefung'
        ]
      },
      {
        primaryKeys: [
          'P_NR',
          'Mat_NR'
        ],
        columns: [
          'Note'
        ]
      },
      {
        primaryKeys: [
          'Mat_NR'
        ],
        columns: [
          'S_Name',
          'S_Geb_Tag'
        ]
      },
      {
        primaryKeys: [
          'Fak_NR'
        ],
        columns: [
          'Dekan',
          'Fak_Name'
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Lebensmittelprüfung',
    description: 'Der Lebensmittelprüfer Dr. Gesund hat für den Gehalt von Lebensmitteln an Vitaminen und Mineralstoffen folgende Relation entwickelt, wobei gilt: \n\nLebensmittel_ID: Eindeutige Nummer für das Lebensmittel. \nSTOFF: Name des Inhaltsstoffs \nMENGE: Gehalt an dem Inhaltsstoff in 100g des Lebensmittels. \nEINHEIT: Einheit für Mengenangaben des Inhaltsstoffs. \n\tDies hängt vom jeweiligen Stoff ab, im Beispiel wird z.B. Vitamin A in mcg angegeben, die anderen Stoffe in mg. \n\tDie Einheit hängt nicht vom Lebensmittel ab. \nEMPFOHLEN: Täglich empfohlene Menge eines Stoffes für einen Menschen \n\nDie Tabelle erscheint zu groß. Können Sie Dr. Gesund helfen, seine redundaten Daten zu verringern?',
    tableData: [
      {
        Lebensmittel_ID: '1',
        Lebensmittel_Name: 'Ananas',
        Stoff: 'Calcium',
        Menge: '16',
        Einheit: 'mg',
        Empfohlen: '1000'
      },
      {
        Lebensmittel_ID: '1',
        Lebensmittel_Name: 'Ananas',
        Stoff: 'Kalium',
        Menge: '173',
        Einheit: 'mg',
        Empfohlen: '2000'
      },
      {
        Lebensmittel_ID: '1',
        Lebensmittel_Name: 'Ananas',
        Stoff: 'Magnesium',
        Menge: '17',
        Einheit: 'mg',
        Empfohlen: '350'
      },
      {
        Lebensmittel_ID: '1',
        Lebensmittel_Name: 'Ananas',
        Stoff: 'Vitamin C',
        Menge: '19',
        Einheit: 'mg',
        Empfohlen: '100'
      },
      {
        Lebensmittel_ID: '2',
        Lebensmittel_Name: 'Apfel',
        Stoff: 'Calcium',
        Menge: '7',
        Einheit: 'mg',
        Empfohlen: '1000'
      },
      {
        Lebensmittel_ID: '2',
        Lebensmittel_Name: 'Apfel',
        Stoff: 'Kalium',
        Menge: '144',
        Einheit: 'mg',
        Empfohlen: '2000'
      },
      {
        Lebensmittel_ID: '2',
        Lebensmittel_Name: 'Apfel',
        Stoff: 'Magnesium',
        Menge: '6',
        Einheit: 'mg',
        Empfohlen: '350'
      },
      {
        Lebensmittel_ID: '2',
        Lebensmittel_Name: 'Apfel',
        Stoff: 'Vitamin A',
        Menge: '10',
        Einheit: 'mcg',
        Empfohlen: '800'
      },
      {
        Lebensmittel_ID: '2',
        Lebensmittel_Name: 'Apfel',
        Stoff: 'Vitamin C',
        Menge: '12',
        Einheit: 'mg',
        Empfohlen: '100'
      },
      {
        Lebensmittel_ID: '3',
        Lebensmittel_Name: 'Banane',
        Stoff: 'Calcium',
        Menge: '9',
        Einheit: 'mg',
        Empfohlen: '1000'
      },
      {
        Lebensmittel_ID: '3',
        Lebensmittel_Name: 'Banane',
        Stoff: 'Kalium',
        Menge: '393',
        Einheit: 'mg',
        Empfohlen: '2000'
      },
      {
        Lebensmittel_ID: '3',
        Lebensmittel_Name: 'Banane',
        Stoff: 'Magnesium',
        Menge: '36',
        Einheit: 'mg',
        Empfohlen: '350'
      },
      {
        Lebensmittel_ID: '3',
        Lebensmittel_Name: 'Banane',
        Stoff: 'Vitamin C',
        Menge: '12',
        Einheit: 'mg',
        Empfohlen: '100'
      },
      {
        Lebensmittel_ID: '4',
        Lebensmittel_Name: 'Birne',
        Stoff: 'Calcium',
        Menge: '10',
        Einheit: 'mg',
        Empfohlen: '1000'
      },
      {
        Lebensmittel_ID: '4',
        Lebensmittel_Name: 'Birne',
        Stoff: 'Kalium',
        Menge: '126',
        Einheit: 'mg',
        Empfohlen: '2000'
      },
      {
        Lebensmittel_ID: '4',
        Lebensmittel_Name: 'Birne',
        Stoff: 'Magnesium',
        Menge: '8',
        Einheit: 'mg',
        Empfohlen: '350'
      },
      {
        Lebensmittel_ID: '4',
        Lebensmittel_Name: 'Birne',
        Stoff: 'Vitamin C',
        Menge: '5',
        Einheit: 'mg',
        Empfohlen: '100'
      },
      {
        Lebensmittel_ID: '5',
        Lebensmittel_Name: 'Erdbeeren',
        Stoff: 'Calcium',
        Menge: '26',
        Einheit: 'mg',
        Empfohlen: '1000'
      },
      {
        Lebensmittel_ID: '5',
        Lebensmittel_Name: 'Erdbeeren',
        Stoff: 'Kalium',
        Menge: '147',
        Einheit: 'mg',
        Empfohlen: '2000'
      },
      {
        Lebensmittel_ID: '5',
        Lebensmittel_Name: 'Erdbeeren',
        Stoff: 'Magnesium',
        Menge: '15',
        Einheit: 'mg',
        Empfohlen: '350'
      },
      {
        Lebensmittel_ID: '5',
        Lebensmittel_Name: 'Erdbeeren',
        Stoff: 'Vitamin C',
        Menge: '64',
        Einheit: 'mg',
        Empfohlen: '100'
      }
    ],
    hasViolatingColumns: false,
    violatingColumns: [],
    functionalDependencies: [
      {
        primaryKeys: [
          'Lebensmittel_ID'
        ],
        columns: [
          'Lebensmittel_Name'
        ],
        type: 'partiell'
      },
      {
        primaryKeys: [
          'Stoff'
        ],
        columns: [
          'Empfohlen',
          'Einheit'
        ],
        type: 'partiell'
      },
      {
        primaryKeys: [
          'Lebensmittel_ID',
          'Stoff'
        ],
        columns: [
          'Menge'
        ],
        type: 'voll'
      }
    ],
    primaryKeys: [
      'Lebensmittel_ID',
      'Stoff'
    ],
    secondNormalForm: [
      {
        primaryKeys: [
          'Lebensmittel_ID'
        ],
        columns: [
          'Lebensmittel_Name'
        ]
      },
      {
        primaryKeys: [
          'Stoff'
        ],
        columns: [
          'Empfohlen',
          'Einheit'
        ]
      },
      {
        primaryKeys: [
          'Lebensmittel_ID',
          'Stoff'
        ],
        columns: [
          'Menge'
        ]
      }
    ],
    secondFormTableData: [
      [
        {
          Lebensmittel_ID: '1',
          Lebensmittel_Name: 'Ananas'
        },
        {
          Lebensmittel_ID: '2',
          Lebensmittel_Name: 'Apfel'
        },
        {
          Lebensmittel_ID: '3',
          Lebensmittel_Name: 'Banane'
        },
        {
          Lebensmittel_ID: '4',
          Lebensmittel_Name: 'Birne'
        },
        {
          Lebensmittel_ID: '5',
          Lebensmittel_Name: 'Erdbeeren'
        }
      ],
      [
        {
          Stoff: 'Kalium',
          Empfohlen: '2000',
          Einheit: 'mg'
        },
        {
          Stoff: 'Vitamin C',
          Empfohlen: '100',
          Einheit: 'mg'
        },
        {
          Stoff: 'Vitamin A',
          Empfohlen: '800',
          Einheit: 'mcg'
        },
        {
          Stoff: 'Calcium',
          Empfohlen: '1000',
          Einheit: 'mg'
        },
        {
          Stoff: 'Magnesium',
          Empfohlen: '350',
          Einheit: 'mg'
        }
      ],
      [
        {
          Lebensmittel_ID: '4',
          Stoff: 'Calcium',
          Menge: '10'
        },
        {
          Lebensmittel_ID: '1',
          Stoff: 'Vitamin C',
          Menge: '19'
        },
        {
          Lebensmittel_ID: '3',
          Stoff: 'Calcium',
          Menge: '9'
        },
        {
          Lebensmittel_ID: '2',
          Stoff: 'Vitamin A',
          Menge: '10'
        },
        {
          Lebensmittel_ID: '5',
          Stoff: 'Magnesium',
          Menge: '15'
        },
        {
          Lebensmittel_ID: '5',
          Stoff: 'Kalium',
          Menge: '147'
        },
        {
          Lebensmittel_ID: '3',
          Stoff: 'Vitamin C',
          Menge: '12'
        },
        {
          Lebensmittel_ID: '5',
          Stoff: 'Vitamin C',
          Menge: '64'
        },
        {
          Lebensmittel_ID: '5',
          Stoff: 'Calcium',
          Menge: '26'
        },
        {
          Lebensmittel_ID: '4',
          Stoff: 'Kalium',
          Menge: '126'
        },
        {
          Lebensmittel_ID: '4',
          Stoff: 'Magnesium',
          Menge: '8'
        },
        {
          Lebensmittel_ID: '2',
          Stoff: 'Magnesium',
          Menge: '6'
        },
        {
          Lebensmittel_ID: '3',
          Stoff: 'Magnesium',
          Menge: '36'
        },
        {
          Lebensmittel_ID: '1',
          Stoff: 'Kalium',
          Menge: '173'
        },
        {
          Lebensmittel_ID: '2',
          Stoff: 'Kalium',
          Menge: '144'
        },
        {
          Lebensmittel_ID: '1',
          Stoff: 'Magnesium',
          Menge: '17'
        },
        {
          Lebensmittel_ID: '2',
          Stoff: 'Vitamin C',
          Menge: '12'
        },
        {
          Lebensmittel_ID: '2',
          Stoff: 'Calcium',
          Menge: '7'
        },
        {
          Lebensmittel_ID: '3',
          Stoff: 'Kalium',
          Menge: '393'
        },
        {
          Lebensmittel_ID: '1',
          Stoff: 'Calcium',
          Menge: '16'
        },
        {
          Lebensmittel_ID: '4',
          Stoff: 'Vitamin C',
          Menge: '5'
        }
      ]
    ],
    alreadyThirdNormalForm: true,
    thirdNormalFormSolutions: [
      {
        primaryKeys: [
          'Lebensmittel_ID'
        ],
        columns: [
          'Lebensmittel_Name'
        ]
      },
      {
        primaryKeys: [
          'Stoff'
        ],
        columns: [
          'Empfohlen',
          'Einheit'
        ]
      },
      {
        primaryKeys: [
          'Lebensmittel_ID',
          'Stoff'
        ],
        columns: [
          'Menge'
        ]
      }
    ]
  },
  {
    id: 7,
    title: 'Zimmer im Krankenhaus',
    description: 'Betrachten Sie die folgende, in einem Krankenhaus geführte Tabelle, wobei der Arzt und der Pfleger dem Patienten(P_Nr) und einer Krankheit zugeordnet werden. \n\nEin Patient kann mehrere Krankheiten haben. \nDabei stehen die Präfixe S_ für Station, Z_ für Zimmer, P_ für Patient, A_ für Arzt und Pf_ für Pfleger. \n\nDie Anzahl der Betten soll von der SNR und der ZNR abhängen.',
    tableData: [
      {
        S_NR: '1',
        S_Name: 'Medizin',
        Z_NR: '1',
        Anz_Betten: '2',
        P_NR: '1',
        P_Name: 'Maier',
        P_Vorname: 'Hans',
        Krankheit: 'Blinddarm',
        A_Name: 'Mann',
        A_Vorname: 'Heinz',
        Pf_Name: 'Brahms',
        Pf_Vorname: 'Hilde'
      },
      {
        S_NR: '1',
        S_Name: 'Medizin',
        Z_NR: '1',
        Anz_Betten: '2',
        P_NR: '2',
        P_Name: 'Schmid',
        P_Vorname: 'Peter',
        Krankheit: 'Beinbruch',
        A_Name: 'Mann',
        A_Vorname: 'Heinz',
        Pf_Name: 'Brahms',
        Pf_Vorname: 'Hilde'
      },
      {
        S_NR: '1',
        S_Name: 'Medizin',
        Z_NR: '1',
        Anz_Betten: '2',
        P_NR: '2',
        P_Name: 'Schmid',
        P_Vorname: 'Peter',
        Krankheit: 'Armbruch',
        A_Name: 'Mann',
        A_Vorname: 'Heinz',
        Pf_Name: 'Brahms',
        Pf_Vorname: 'Hilde'
      },
      {
        S_NR: '1',
        S_Name: 'Medizin',
        Z_NR: '2',
        Anz_Betten: '1',
        P_NR: '3',
        P_Name: 'Josh',
        P_Vorname: 'Hugo',
        Krankheit: 'Herzinfarkt',
        A_Name: 'Hase',
        A_Vorname: 'Willi',
        Pf_Name: 'Brahms',
        Pf_Vorname: 'Hilde'
      },
      {
        S_NR: '2',
        S_Name: 'Augen',
        Z_NR: '1',
        Anz_Betten: '2',
        P_NR: '4',
        P_Name: 'Wein',
        P_Vorname: 'Berta',
        Krankheit: 'Grauer Star',
        A_Name: 'Wilms',
        A_Vorname: 'Otto',
        Pf_Name: 'Saga',
        Pf_Vorname: 'Udo'
      },
      {
        S_NR: '2',
        S_Name: 'Augen',
        Z_NR: '1',
        Anz_Betten: '2',
        P_NR: '5',
        P_Name: 'Hein',
        P_Vorname: 'Hanna',
        Krankheit: 'Netzhaut',
        A_Name: 'Wilms',
        A_Vorname: 'Otto',
        Pf_Name: 'Saga',
        Pf_Vorname: 'Udo'
      },
      {
        S_NR: '2',
        S_Name: 'Augen',
        Z_NR: '2',
        Anz_Betten: '1',
        P_NR: '6',
        P_Name: 'Fisch',
        P_Vorname: 'Olga',
        Krankheit: 'Grüner Star',
        A_Name: 'Wilms',
        A_Vorname: 'Otto',
        Pf_Name: 'Meier',
        Pf_Vorname: 'Anna'
      },
      {
        S_NR: '2',
        S_Name: 'Augen',
        Z_NR: '2',
        Anz_Betten: '1',
        P_NR: '6',
        P_Name: 'Fisch',
        P_Vorname: 'Olga',
        Krankheit: 'Puma',
        A_Name: 'Wilms',
        A_Vorname: 'Otto',
        Pf_Name: 'Meier',
        Pf_Vorname: 'Anna'
      }
    ],
    hasViolatingColumns: false,
    violatingColumns: [],
    functionalDependencies: [
      {
        primaryKeys: [
          'S_NR'
        ],
        columns: [
          'S_Name'
        ],
        type: 'transitiv'
      },
      {
        primaryKeys: [
          'S_NR',
          'Z_NR'
        ],
        columns: [
          'Anz_Betten'
        ],
        type: 'transitiv'
      },
      {
        primaryKeys: [
          'P_NR'
        ],
        columns: [
          'P_Name',
          'P_Vorname',
          'S_NR',
          'Z_NR',
          'Anz_Betten',
          'S_Name'
        ],
        type: 'partiell'
      },
      {
        primaryKeys: [
          'P_NR',
          'Krankheit'
        ],
        columns: [
          'A_Name',
          'A_Vorname',
          'Pf_Vorname',
          'Pf_Name'
        ],
        type: 'voll'
      }
    ],
    primaryKeys: [
      'P_NR',
      'Krankheit'
    ],
    secondNormalForm: [
      {
        primaryKeys: [
          'P_NR'
        ],
        columns: [
          'P_Name',
          'P_Vorname',
          'S_NR',
          'Z_NR',
          'Anz_Betten',
          'S_Name'
        ]
      },
      {
        primaryKeys: [
          'P_NR',
          'Krankheit'
        ],
        columns: [
          'A_Name',
          'A_Vorname',
          'Pf_Vorname',
          'Pf_Name'
        ]
      }
    ],
    secondFormTableData: [
      [
        {
          P_NR: '6',
          P_Name: 'Fisch',
          P_Vorname: 'Olga',
          S_NR: '2',
          Z_NR: '2',
          Anz_Betten: '1',
          S_Name: 'Augen'
        },
        {
          P_NR: '3',
          P_Name: 'Josh',
          P_Vorname: 'Hugo',
          S_NR: '1',
          Z_NR: '2',
          Anz_Betten: '1',
          S_Name: 'Medizin'
        },
        {
          P_NR: '4',
          P_Name: 'Wein',
          P_Vorname: 'Berta',
          S_NR: '2',
          Z_NR: '1',
          Anz_Betten: '2',
          S_Name: 'Augen'
        },
        {
          P_NR: '1',
          P_Name: 'Maier',
          P_Vorname: 'Hans',
          S_NR: '1',
          Z_NR: '1',
          Anz_Betten: '2',
          S_Name: 'Medizin'
        },
        {
          P_NR: '5',
          P_Name: 'Hein',
          P_Vorname: 'Hanna',
          S_NR: '2',
          Z_NR: '1',
          Anz_Betten: '2',
          S_Name: 'Augen'
        },
        {
          P_NR: '2',
          P_Name: 'Schmid',
          P_Vorname: 'Peter',
          S_NR: '1',
          Z_NR: '1',
          Anz_Betten: '2',
          S_Name: 'Medizin'
        }
      ],
      [
        {
          P_NR: '1',
          Krankheit: 'Blinddarm',
          A_Name: 'Mann',
          A_Vorname: 'Heinz',
          Pf_Vorname: 'Hilde',
          Pf_Name: 'Brahms'
        },
        {
          P_NR: '3',
          Krankheit: 'Herzinfarkt',
          A_Name: 'Hase',
          A_Vorname: 'Willi',
          Pf_Vorname: 'Hilde',
          Pf_Name: 'Brahms'
        },
        {
          P_NR: '5',
          Krankheit: 'Netzhaut',
          A_Name: 'Wilms',
          A_Vorname: 'Otto',
          Pf_Vorname: 'Udo',
          Pf_Name: 'Saga'
        },
        {
          P_NR: '4',
          Krankheit: 'Grauer Star',
          A_Name: 'Wilms',
          A_Vorname: 'Otto',
          Pf_Vorname: 'Udo',
          Pf_Name: 'Saga'
        },
        {
          P_NR: '2',
          Krankheit: 'Beinbruch',
          A_Name: 'Mann',
          A_Vorname: 'Heinz',
          Pf_Vorname: 'Hilde',
          Pf_Name: 'Brahms'
        },
        {
          P_NR: '6',
          Krankheit: 'Puma',
          A_Name: 'Wilms',
          A_Vorname: 'Otto',
          Pf_Vorname: 'Anna',
          Pf_Name: 'Meier'
        },
        {
          P_NR: '6',
          Krankheit: 'Grüner Star',
          A_Name: 'Wilms',
          A_Vorname: 'Otto',
          Pf_Vorname: 'Anna',
          Pf_Name: 'Meier'
        },
        {
          P_NR: '2',
          Krankheit: 'Armbruch',
          A_Name: 'Mann',
          A_Vorname: 'Heinz',
          Pf_Vorname: 'Hilde',
          Pf_Name: 'Brahms'
        }
      ]
    ],
    alreadyThirdNormalForm: false,
    thirdNormalFormSolutions: [
      {
        primaryKeys: [
          'P_NR'
        ],
        columns: [
          'P_Name',
          'P_Vorname',
          'S_NR',
          'Z_NR'
        ]
      },
      {
        primaryKeys: [
          'S_NR',
          'Z_NR'
        ],
        columns: [
          'Anz_Betten'
        ]
      },
      {
        primaryKeys: [
          'S_NR'
        ],
        columns: [
          'S_Name'
        ]
      },
      {
        primaryKeys: [
          'P_NR',
          'Krankheit'
        ],
        columns: [
          'A_Name',
          'A_Vorname',
          'Pf_Vorname',
          'Pf_Name'
        ]
      }
    ]
  },
  {
    id: 8,
    title: 'Autohändler 2',
    description: 'Die Autohändlerin Frau Weber möchte ihren Bestand gebrauchter Wagen in einem relationalen Datenbanksystem organisieren. \nDie Analyse ergibt eine ganze Liste zu speichernder Informationen für jedes Fahrzeug, die Frau Weber direkt in eine Tabelle umsetzt. \n\nJedes Fahrzeug ist durch die Fahrzeug_NR identifiziert. \nBei Fahrzeugen des gleichen Modells sind der Hersteller, der Neupreis, der Typ und die PS-Zahl übereinstimmend. \nSofort beginnt sie mit der Erfassung ihrer Daten und erhält die folgende Relation Autos. \n\nDer Präfix H_ steht hier für den Hersteller des Fahrzeugs. \n\nNach kurzer Zeit stellt Frau Weber fest, dass ihr die neue Datenbank nicht so recht Freude machen will - die Datenmodellierung scheint nicht gut durchdacht! \nKönnen Sie Frau Weber helfen?',
    tableData: [
      {
        Modell_NR: '1',
        H_NR: '1',
        H_Name: 'Opel',
        Typ: 'Kadett',
        Neupreis: '18000',
        Verkaufspreis: '13000',
        PS: '60',
        Fahrzeug_NR: 'K674',
        Baujahr: '1999',
        km: '10000',
        Einkaufspreis: '12000'
      },
      {
        Modell_NR: '1',
        H_NR: '1',
        H_Name: 'Opel',
        Typ: 'Kadett',
        Neupreis: '18000',
        Verkaufspreis: '12000',
        PS: '60',
        Fahrzeug_NR: 'K634',
        Baujahr: '1998',
        km: '34000',
        Einkaufspreis: '9000'
      },
      {
        Modell_NR: '2',
        H_NR: '1',
        H_Name: 'Opel',
        Typ: 'Vectra',
        Neupreis: '25000',
        Verkaufspreis: '18000',
        PS: '90',
        Fahrzeug_NR: 'V459',
        Baujahr: '1990',
        km: '15000',
        Einkaufspreis: '17000'
      },
      {
        Modell_NR: '3',
        H_NR: '1',
        H_Name: 'Opel',
        Typ: 'Omega',
        Neupreis: '30000',
        Verkaufspreis: '22000',
        PS: '110',
        Fahrzeug_NR: 'O634',
        Baujahr: '1997',
        km: '45000',
        Einkaufspreis: '15000'
      },
      {
        Modell_NR: '4',
        H_NR: '2',
        H_Name: 'VW',
        Typ: 'Golf',
        Neupreis: '25000',
        Verkaufspreis: '21000',
        PS: '90',
        Fahrzeug_NR: 'G789',
        Baujahr: '1991',
        km: '11000',
        Einkaufspreis: '16000'
      },
      {
        Modell_NR: '4',
        H_NR: '2',
        H_Name: 'VW',
        Typ: 'Golf',
        Neupreis: '25000',
        Verkaufspreis: '16000',
        PS: '90',
        Fahrzeug_NR: 'G713',
        Baujahr: '1991',
        km: '31000',
        Einkaufspreis: '13000'
      },
      {
        Modell_NR: '5',
        H_NR: '2',
        H_Name: 'VW',
        Typ: 'Golf',
        Neupreis: '28000',
        Verkaufspreis: '19000',
        PS: '105',
        Fahrzeug_NR: 'G762',
        Baujahr: '1992',
        km: '28000',
        Einkaufspreis: '17000'
      },
      {
        Modell_NR: '6',
        H_NR: '2',
        H_Name: 'VW',
        Typ: 'Polo',
        Neupreis: '19000',
        Verkaufspreis: '10000',
        PS: '60',
        Fahrzeug_NR: 'K635',
        Baujahr: '1996',
        km: '71000',
        Einkaufspreis: '8000'
      }
    ],
    hasViolatingColumns: false,
    violatingColumns: [],
    functionalDependencies: [
      {
        primaryKeys: [
          'Modell_NR'
        ],
        columns: [
          'H_NR',
          'H_Name',
          'Typ',
          'Neupreis',
          'PS'
        ],
        type: 'transitiv'
      },
      {
        primaryKeys: [
          'H_NR'
        ],
        columns: [
          'H_Name'
        ],
        type: 'transitiv'
      },
      {
        primaryKeys: [
          'Fahrzeug_NR'
        ],
        columns: [
          'Modell_NR',
          'H_NR',
          'H_Name',
          'Typ',
          'Neupreis',
          'Verkaufspreis',
          'PS',
          'Baujahr',
          'KM',
          'Einkaufspreis'
        ],
        type: 'voll'
      }
    ],
    primaryKeys: [
      'Fahrzeug_NR'
    ],
    secondNormalForm: [
      {
        primaryKeys: [
          'Fahrzeug_NR'
        ],
        columns: [
          'Modell_NR',
          'H_NR',
          'H_Name',
          'Typ',
          'Neupreis',
          'Verkaufspreis',
          'PS',
          'Baujahr',
          'KM',
          'Einkaufspreis'
        ]
      }
    ],
    secondFormTableData: [
      [
        {
          Fahrzeug_NR: 'G789',
          Modell_NR: '4',
          H_NR: '2',
          H_Name: 'VW',
          Typ: 'Golf',
          Neupreis: '25000',
          Verkaufspreis: '21000',
          PS: '90',
          Baujahr: '1991',
          km: '11000',
          Einkaufspreis: '16000'
        },
        {
          Fahrzeug_NR: 'V459',
          Modell_NR: '2',
          H_NR: '1',
          H_Name: 'Opel',
          Typ: 'Vectra',
          Neupreis: '25000',
          Verkaufspreis: '18000',
          PS: '90',
          Baujahr: '1990',
          km: '15000',
          Einkaufspreis: '17000'
        },
        {
          Fahrzeug_NR: 'G762',
          Modell_NR: '5',
          H_NR: '2',
          H_Name: 'VW',
          Typ: 'Golf',
          Neupreis: '28000',
          Verkaufspreis: '19000',
          PS: '105',
          Baujahr: '1992',
          km: '28000',
          Einkaufspreis: '17000'
        },
        {
          Fahrzeug_NR: 'G713',
          Modell_NR: '4',
          H_NR: '2',
          H_Name: 'VW',
          Typ: 'Golf',
          Neupreis: '25000',
          Verkaufspreis: '16000',
          PS: '90',
          Baujahr: '1991',
          km: '31000',
          Einkaufspreis: '13000'
        },
        {
          Fahrzeug_NR: 'K635',
          Modell_NR: '6',
          H_NR: '2',
          H_Name: 'VW',
          Typ: 'Polo',
          Neupreis: '19000',
          Verkaufspreis: '10000',
          PS: '60',
          Baujahr: '1996',
          km: '71000',
          Einkaufspreis: '8000'
        },
        {
          Fahrzeug_NR: 'K674',
          Modell_NR: '1',
          H_NR: '1',
          H_Name: 'Opel',
          Typ: 'Kadett',
          Neupreis: '18000',
          Verkaufspreis: '13000',
          PS: '60',
          Baujahr: '1999',
          km: '10000',
          Einkaufspreis: '12000'
        },
        {
          Fahrzeug_NR: 'K634',
          Modell_NR: '1',
          H_NR: '1',
          H_Name: 'Opel',
          Typ: 'Kadett',
          Neupreis: '18000',
          Verkaufspreis: '12000',
          PS: '60',
          Baujahr: '1998',
          km: '34000',
          Einkaufspreis: '9000'
        },
        {
          Fahrzeug_NR: 'O634',
          Modell_NR: '3',
          H_NR: '1',
          H_Name: 'Opel',
          Typ: 'Omega',
          Neupreis: '30000',
          Verkaufspreis: '22000',
          PS: '110',
          Baujahr: '1997',
          km: '45000',
          Einkaufspreis: '15000'
        }
      ]
    ],
    alreadyThirdNormalForm: false,
    thirdNormalFormSolutions: [
      {
        primaryKeys: [
          'Modell_NR'
        ],
        columns: [
          'H_NR',
          'Typ',
          'Neupreis',
          'PS'
        ]
      },
      {
        primaryKeys: [
          'H_NR'
        ],
        columns: [
          'H_Name'
        ]
      },
      {
        primaryKeys: [
          'Fahrzeug_NR'
        ],
        columns: [
          'Modell_NR',
          'Verkaufspreis',
          'Einkaufspreis',
          'Baujahr',
          'KM'
        ]
      }
    ]
  }
]

export default tasks
