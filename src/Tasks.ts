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
  },
  {
    id: 3,
    description: 'Ein Großhändler für Küchenartikel hat die Bestellungen seiner Kunden tabellarisch zusammengefasst, dabei bedeutet: <br><br>KNR = eindeutige Kundennummer,KNA = Kundenname,<br>KA = Kundenadresse, ANR = eindeutige Artikelnummer, <BR>ABZ = Artikelbezeichnung, HNR = Herstellernummer, <BR>HNA = Herstellername, APR = Artikelpreis und BM = Bestellmenge. <br> <BR>Die Kombination Kunde-Artikel kommt in der Tabelle jeweils nur einmal vor, da alte Bestellungen gelöscht werden. Ein Artikel wird immer nur von einem Hersteller geliefert.',
    tableData: [
      {
        knr: '1003',
        kna: 'Lüdtke',
        ka: 'Marienheide',
        anr: 'A13',
        abz: 'Alu-Topf1',
        hnr: 'H01',
        hna: 'PBTopf',
        apr: '10,70',
        bm: '100'
      },
      {
        knr: '1003',
        kna: 'Lüdtke',
        ka: 'Marienheide',
        anr: 'A36',
        abz: 'Besteck',
        hnr: 'H03',
        hna: 'Kochass',
        apr: '21,80',
        bm: '80'
      },
      {
        knr: '1004',
        kna: 'Maier',
        ka: 'Dortmund',
        anr: 'A11',
        abz: 'Stahl-Topf',
        hnr: 'H10',
        hna: 'IKEA',
        apr: '16,20',
        bm: '150'
      },
      {
        knr: '1001',
        kna: 'Schmidt',
        ka: 'Gummersbach',
        anr: 'A11',
        abz: 'Stahl-Topf',
        hnr: 'H10',
        hna: 'IKEA',
        apr: '16,20',
        bm: '90'
      },
      {
        knr: '1001',
        kna: 'Schmidt',
        ka: 'Gummersbach',
        anr: 'A17',
        abz: 'Bratpfanne',
        hnr: 'H04',
        hna: 'Gourmet',
        apr: '31,50',
        bm: '50'
      },
      {
        knr: '1002',
        kna: 'Müller',
        ka: 'Lindlar',
        anr: 'A09',
        abz: 'Schüssel',
        hnr: 'H03',
        hna: 'Kochass',
        apr: '23,30',
        bm: '80'
      },
      {
        knr: '1003',
        kna: 'Lüdtke',
        ka: 'Marienheide',
        anr: 'A14',
        abz: 'Alu-Topf2',
        hnr: 'H01',
        hna: 'PBTopf',
        apr: '14,50',
        bm: '50'
      },
      {
        knr: '1004',
        kna: 'Maier',
        ka: 'Dortmund',
        anr: 'A09',
        abz: 'Schüssel',
        hnr: 'H03',
        hna: 'Kochass',
        apr: '23,30',
        bm: '100'
      }
    ],
    hasViolatingColumns: false,
    violatingColumns: [],
    functionalDependencies: [
      {
        primaryKeys: [
          'KNR'
        ],
        columns: [
          'KNA',
          'KA'
        ],
        type: 'partiell'
      },
      {
        primaryKeys: [
          'ANR'
        ],
        columns: [
          'ABZ',
          'HNR',
          'HNA',
          'APR'
        ],
        type: 'partiell'
      },
      {
        primaryKeys: [
          'HNR'
        ],
        columns: [
          'HNA'
        ],
        type: 'transitiv'
      },
      {
        primaryKeys: [
          'KNR',
          'ANR'
        ],
        columns: [
          'BM'
        ],
        type: 'voll'
      }
    ],
    primaryKeys: [
      'KNR',
      'ANR'
    ],
    secondNormalForm: [
      {
        primaryKeys: [
          'KNR'
        ],
        columns: [
          'KNA',
          'KA'
        ]
      },
      {
        primaryKeys: [
          'ANR'
        ],
        columns: [
          'ABZ',
          'HNR',
          'HNA',
          'APR'
        ]
      },
      {
        primaryKeys: [
          'KNR',
          'ANR'
        ],
        columns: [
          'BM'
        ]
      }
    ],
    secondFormTableData: [
      [
        {
          knr: '1002',
          kna: 'Müller',
          ka: 'Lindlar'
        },
        {
          knr: '1001',
          kna: 'Schmidt',
          ka: 'Gummersbach'
        },
        {
          knr: '1003',
          kna: 'Lüdtke',
          ka: 'Marienheide'
        },
        {
          knr: '1004',
          kna: 'Maier',
          ka: 'Dortmund'
        }
      ],
      [
        {
          anr: 'A13',
          abz: 'Alu-Topf1',
          hnr: 'H01',
          hna: 'PBTopf',
          apr: '10,70'
        },
        {
          anr: 'A09',
          abz: 'Schüssel',
          hnr: 'H03',
          hna: 'Kochass',
          apr: '23,30'
        },
        {
          anr: 'A14',
          abz: 'Alu-Topf2',
          hnr: 'H01',
          hna: 'PBTopf',
          apr: '14,50'
        },
        {
          anr: 'A36',
          abz: 'Besteck',
          hnr: 'H03',
          hna: 'Kochass',
          apr: '21,80'
        },
        {
          anr: 'A11',
          abz: 'Stahl-Topf',
          hnr: 'H10',
          hna: 'IKEA',
          apr: '16,20'
        },
        {
          anr: 'A17',
          abz: 'Bratpfanne',
          hnr: 'H04',
          hna: 'Gourmet',
          apr: '31,50'
        }
      ],
      [
        {
          knr: '1003',
          anr: 'A36',
          bm: '80'
        },
        {
          knr: '1001',
          anr: 'A11',
          bm: '90'
        },
        {
          knr: '1003',
          anr: 'A13',
          bm: '100'
        },
        {
          knr: '1003',
          anr: 'A14',
          bm: '50'
        },
        {
          knr: '1001',
          anr: 'A17',
          bm: '50'
        },
        {
          knr: '1004',
          anr: 'A11',
          bm: '150'
        },
        {
          knr: '1004',
          anr: 'A09',
          bm: '100'
        },
        {
          knr: '1002',
          anr: 'A09',
          bm: '80'
        }
      ]
    ],
    thirdNormalFormSolutions: [
      {
        primaryKeys: [
          'KNR'
        ],
        columns: [
          'KNA',
          'KA'
        ]
      },
      {
        primaryKeys: [
          'KNR',
          'ANR'
        ],
        columns: [
          'BM'
        ]
      },
      {
        primaryKeys: [
          'HNR'
        ],
        columns: [
          'HNA'
        ]
      },
      {
        primaryKeys: [
          'ANR'
        ],
        columns: [
          'ABZ',
          'HNR',
          'APR'
        ]
      }
    ]
  },
  {
    id: 4,
    description: 'Ein Autohändler speichert die von ihm angebotenen Fahrzeuge in einer redundanten Tabelle: <br>Dabei beziehen sich die Adresse und das Land auf den Hersteller. Die Adresse wird nur als zusammenhängendes Textfeld gespeichert.Die ID bezieht sich auf ein konkretes Fahrzeug bzw. Motorrad. Der Typ und die Anzahl der Räder hängen vom Modell und vom Hersteller ab.',
    tableData: [
      {
        id: '4718',
        hersteller: 'Vespa',
        modell: 'II',
        typ: 'Motorrad',
        raeder: '2',
        ps: '6',
        adresse: 'La Strada 2, 1223 Rom',
        land: 'Italien',
        klimaanlage: 'Nein'
      },
      {
        id: '4714',
        hersteller: 'Suzuki',
        modell: 'GX',
        typ: 'Motorrad',
        raeder: '2',
        ps: '80',
        adresse: 'Koniciva 3, Yokahama',
        land: 'Japan',
        klimaanlage: 'Nein'
      },
      {
        id: '4717',
        hersteller: 'VW',
        modell: 'Golf',
        typ: 'PKW',
        raeder: '4',
        ps: '92',
        adresse: 'Volkswagenstr, 10; 34444 Wolfsburg',
        land: 'Deutschland',
        klimaanlage: 'Ja'
      },
      {
        id: '4711',
        hersteller: 'VW',
        modell: 'Käfer',
        typ: 'PKW',
        raeder: '4',
        ps: '45',
        adresse: 'Volkswagenstr, 10; 34444 Wolfsburg',
        land: 'Deutschland',
        klimaanlage: 'Ja'
      },
      {
        id: '4712',
        hersteller: 'Hanomag',
        modell: 'II',
        typ: 'LKW',
        raeder: '4',
        ps: '220',
        adresse: 'Musterstr,27, 2222 Hamburg',
        land: 'Deutschland',
        klimaanlage: 'Nein'
      },
      {
        id: '4715',
        hersteller: 'Ford',
        modell: 'Focus',
        typ: 'PKW',
        raeder: '4',
        ps: '65',
        adresse: 'Fritzweg 26, 54478 Köln',
        land: 'Deutschland',
        klimaanlage: 'Ja'
      },
      {
        id: '4716',
        hersteller: 'VW',
        modell: 'Golf',
        typ: 'PKW',
        raeder: '4',
        ps: '72',
        adresse: 'Volkswagenstr, 10; 34444 Wolfsburg',
        land: 'Deutschland',
        klimaanlage: 'Nein'
      }
    ],
    hasViolatingColumns: false,
    violatingColumns: [],
    functionalDependencies: [
      {
        primaryKeys: [
          'HERSTELLER'
        ],
        columns: [
          'ADRESSE',
          'LAND'
        ],
        type: 'transitiv'
      },
      {
        primaryKeys: [
          'HERSTELLER',
          'MODELL'
        ],
        columns: [
          'TYP',
          'RAEDER'
        ],
        type: 'transitiv'
      },
      {
        primaryKeys: [
          'ID'
        ],
        columns: [
          'HERSTELLER',
          'MODELL',
          'TYP',
          'RAEDER',
          'PS',
          'ADRESSE',
          'LAND',
          'KLIMAANLAGE'
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
          'HERSTELLER',
          'MODELL',
          'TYP',
          'RAEDER',
          'PS',
          'ADRESSE',
          'LAND',
          'KLIMAANLAGE'
        ]
      }
    ],
    secondFormTableData: [
      [
        {
          id: '4717',
          hersteller: 'VW',
          modell: 'Golf',
          typ: 'PKW',
          raeder: '4',
          ps: '92',
          adresse: 'Volkswagenstr, 10; 34444 Wolfsburg',
          land: 'Deutschland',
          klimaanlage: 'Ja'
        },
        {
          id: '4718',
          hersteller: 'Vespa',
          modell: 'II',
          typ: 'Motorrad',
          raeder: '2',
          ps: '6',
          adresse: 'La Strada 2, 1223 Rom',
          land: 'Italien',
          klimaanlage: 'Nein'
        },
        {
          id: '4715',
          hersteller: 'Ford',
          modell: 'Focus',
          typ: 'PKW',
          raeder: '4',
          ps: '65',
          adresse: 'Fritzweg 26, 54478 Köln',
          land: 'Deutschland',
          klimaanlage: 'Ja'
        },
        {
          id: '4711',
          hersteller: 'VW',
          modell: 'Käfer',
          typ: 'PKW',
          raeder: '4',
          ps: '45',
          adresse: 'Volkswagenstr, 10; 34444 Wolfsburg',
          land: 'Deutschland',
          klimaanlage: 'Ja'
        },
        {
          id: '4716',
          hersteller: 'VW',
          modell: 'Golf',
          typ: 'PKW',
          raeder: '4',
          ps: '72',
          adresse: 'Volkswagenstr, 10; 34444 Wolfsburg',
          land: 'Deutschland',
          klimaanlage: 'Nein'
        },
        {
          id: '4712',
          hersteller: 'Hanomag',
          modell: 'II',
          typ: 'LKW',
          raeder: '4',
          ps: '220',
          adresse: 'Musterstr,27, 2222 Hamburg',
          land: 'Deutschland',
          klimaanlage: 'Nein'
        },
        {
          id: '4714',
          hersteller: 'Suzuki',
          modell: 'GX',
          typ: 'Motorrad',
          raeder: '2',
          ps: '80',
          adresse: 'Koniciva 3, Yokahama',
          land: 'Japan',
          klimaanlage: 'Nein'
        }
      ]
    ],
    thirdNormalFormSolutions: [
      {
        primaryKeys: [
          'ID'
        ],
        columns: [
          'HERSTELLER',
          'MODELL',
          'PS',
          'KLIMAANLAGE'
        ]
      },
      {
        primaryKeys: [
          'HERSTELLER'
        ],
        columns: [
          'ADRESSE',
          'LAND'
        ]
      },
      {
        primaryKeys: [
          'HERSTELLER',
          'MODELL'
        ],
        columns: [
          'TYP',
          'RAEDER'
        ]
      }
    ]
  },
  {
    id: 5,
    description: '<p>Betrachten Sie die folgende, im Pr&uuml;fungsamt gef&uuml;hrte Tabelle, wobei die FAK_NR (Fakult&auml;tsnummer)&nbsp; einer Pr&uuml;fung zugeordnet ist, nicht den Studenten:</p>',
    tableData: [
      {
        pruef_nr: '1',
        pruefer: 'Bertelsmeier',
        fach: 'Datenbanken',
        mat_nr: '230800',
        stud_name: 'Schmidt',
        geburtstag: '04.05.79',
        fak_nr: '20',
        fak_name: 'Informatik',
        dekan: 'Stahl',
        note: '2.7',
        datum_pruefung: '11.07.2008'
      },
      {
        pruef_nr: '1',
        pruefer: 'Bertelsmeier',
        fach: 'Datenbanken',
        mat_nr: '230799',
        stud_name: 'Maier',
        geburtstag: '04.04.79',
        fak_nr: '20',
        fak_name: 'Informatik',
        dekan: 'Stahl',
        note: '3',
        datum_pruefung: '11.07.2008'
      },
      {
        pruef_nr: '2',
        pruefer: 'Buse',
        fach: 'Mathematik',
        mat_nr: '237681',
        stud_name: 'Wein',
        geburtstag: '01.04.80',
        fak_nr: '18',
        fak_name: 'Elektrotechnik',
        dekan: 'Bongrads',
        note: '3',
        datum_pruefung: '15.07.2008'
      },
      {
        pruef_nr: '2',
        pruefer: 'Buse',
        fach: 'Mathematik',
        mat_nr: '237682',
        stud_name: 'Josch',
        geburtstag: '08.09.70',
        fak_nr: '18',
        fak_name: 'Elektrotechnik',
        dekan: 'Bongrads',
        note: '4',
        datum_pruefung: '15.07.2008'
      },
      {
        pruef_nr: '3',
        pruefer: 'Victor',
        fach: 'Java',
        mat_nr: '203491',
        stud_name: 'Hein',
        geburtstag: '04.05.81',
        fak_nr: '20',
        fak_name: 'Informatik',
        dekan: 'Stahl',
        note: '2.7',
        datum_pruefung: '12.07.2008'
      },
      {
        pruef_nr: '5',
        pruefer: 'Victor',
        fach: 'Algorithmen',
        mat_nr: '230799',
        stud_name: 'Maier',
        geburtstag: '04.04.79',
        fak_nr: '20',
        fak_name: 'Informatik',
        dekan: 'Stahl',
        note: '3',
        datum_pruefung: '12.10.2008'
      },
      {
        pruef_nr: '3',
        pruefer: 'Victor',
        fach: 'Java',
        mat_nr: '203491',
        stud_name: 'Hein',
        geburtstag: '04.05.81',
        fak_nr: '20',
        fak_name: 'Informatik',
        dekan: 'Stahl',
        note: '2.3',
        datum_pruefung: '12.07.2008'
      },
      {
        pruef_nr: '3',
        pruefer: 'Victor',
        fach: 'Java',
        mat_nr: '230799',
        stud_name: 'Maier',
        geburtstag: '04.04.79',
        fak_nr: '20',
        fak_name: 'Informatik',
        dekan: 'Stahl',
        note: '2.3',
        datum_pruefung: '12.07.2008'
      },
      {
        pruef_nr: '4',
        pruefer: 'Victor',
        fach: 'Algorithmen',
        mat_nr: '230799',
        stud_name: 'Maier',
        geburtstag: '04.04.79',
        fak_nr: '20',
        fak_name: 'Informatik',
        dekan: 'Stahl',
        note: '5',
        datum_pruefung: '12.07.2008'
      },
      {
        pruef_nr: '4',
        pruefer: 'Victor',
        fach: 'Algorithmen',
        mat_nr: '203491',
        stud_name: 'Hein',
        geburtstag: '04.05.81',
        fak_nr: '20',
        fak_name: 'Informatik',
        dekan: 'Stahl',
        note: '5',
        datum_pruefung: '12.07.2008'
      }
    ],
    hasViolatingColumns: false,
    violatingColumns: [],
    functionalDependencies: [
      {
        primaryKeys: [
          'PRUEF_NR'
        ],
        columns: [
          'PRUEFER',
          'FACH',
          'FAK_NR',
          'FAK_NAME',
          'DEKAN',
          'DATUM_PRUEFUNG'
        ],
        type: 'partiell'
      },
      {
        primaryKeys: [
          'MAT_NR'
        ],
        columns: [
          'STUD_NAME',
          'GEBURTSTAG'
        ],
        type: 'partiell'
      },
      {
        primaryKeys: [
          'PRUEF_NR',
          'MAT_NR'
        ],
        columns: [
          'NOTE'
        ],
        type: 'voll'
      },
      {
        primaryKeys: [
          'FAK_NR'
        ],
        columns: [
          'DEKAN',
          'FAK_NAME'
        ],
        type: 'transitiv'
      }
    ],
    primaryKeys: [
      'PRUEF_NR',
      'MAT_NR'
    ],
    secondNormalForm: [
      {
        primaryKeys: [
          'PRUEF_NR'
        ],
        columns: [
          'PRUEFER',
          'FACH',
          'FAK_NR',
          'FAK_NAME',
          'DEKAN',
          'DATUM_PRUEFUNG'
        ]
      },
      {
        primaryKeys: [
          'MAT_NR'
        ],
        columns: [
          'STUD_NAME',
          'GEBURTSTAG'
        ]
      },
      {
        primaryKeys: [
          'PRUEF_NR',
          'MAT_NR'
        ],
        columns: [
          'NOTE'
        ]
      }
    ],
    secondFormTableData: [
      [
        {
          pruef_nr: '4',
          pruefer: 'Victor',
          fach: 'Algorithmen',
          fak_nr: '20',
          fak_name: 'Informatik',
          dekan: 'Stahl',
          datum_pruefung: '12.07.2008'
        },
        {
          pruef_nr: '2',
          pruefer: 'Buse',
          fach: 'Mathematik',
          fak_nr: '18',
          fak_name: 'Elektrotechnik',
          dekan: 'Bongrads',
          datum_pruefung: '15.07.2008'
        },
        {
          pruef_nr: '1',
          pruefer: 'Bertelsmeier',
          fach: 'Datenbanken',
          fak_nr: '20',
          fak_name: 'Informatik',
          dekan: 'Stahl',
          datum_pruefung: '11.07.2008'
        },
        {
          pruef_nr: '5',
          pruefer: 'Victor',
          fach: 'Algorithmen',
          fak_nr: '20',
          fak_name: 'Informatik',
          dekan: 'Stahl',
          datum_pruefung: '12.10.2008'
        },
        {
          pruef_nr: '3',
          pruefer: 'Victor',
          fach: 'Java',
          fak_nr: '20',
          fak_name: 'Informatik',
          dekan: 'Stahl',
          datum_pruefung: '12.07.2008'
        }
      ],
      [
        {
          mat_nr: '230799',
          stud_name: 'Maier',
          geburtstag: '04.04.79'
        },
        {
          mat_nr: '237682',
          stud_name: 'Josch',
          geburtstag: '08.09.70'
        },
        {
          mat_nr: '237681',
          stud_name: 'Wein',
          geburtstag: '01.04.80'
        },
        {
          mat_nr: '203491',
          stud_name: 'Hein',
          geburtstag: '04.05.81'
        },
        {
          mat_nr: '230800',
          stud_name: 'Schmidt',
          geburtstag: '04.05.79'
        }
      ],
      [
        {
          pruef_nr: '4',
          mat_nr: '203491',
          note: '5'
        },
        {
          pruef_nr: '3',
          mat_nr: '203491',
          note: '2.3'
        },
        {
          pruef_nr: '2',
          mat_nr: '237681',
          note: '3'
        },
        {
          pruef_nr: '3',
          mat_nr: '203491',
          note: '2.7'
        },
        {
          pruef_nr: '4',
          mat_nr: '230799',
          note: '5'
        },
        {
          pruef_nr: '1',
          mat_nr: '230800',
          note: '2.7'
        },
        {
          pruef_nr: '5',
          mat_nr: '230799',
          note: '3'
        },
        {
          pruef_nr: '2',
          mat_nr: '237682',
          note: '4'
        },
        {
          pruef_nr: '3',
          mat_nr: '230799',
          note: '2.3'
        },
        {
          pruef_nr: '1',
          mat_nr: '230799',
          note: '3'
        }
      ]
    ],
    thirdNormalFormSolutions: [
      {
        primaryKeys: [
          'PRUEF_NR'
        ],
        columns: [
          'PRUEFER',
          'FACH',
          'FAK_NR',
          'DATUM_PRUEFUNG'
        ]
      },
      {
        primaryKeys: [
          'PRUEF_NR',
          'MAT_NR'
        ],
        columns: [
          'NOTE'
        ]
      },
      {
        primaryKeys: [
          'MAT_NR'
        ],
        columns: [
          'STUD_NAME',
          'GEBURTSTAG'
        ]
      },
      {
        primaryKeys: [
          'FAK_NR'
        ],
        columns: [
          'DEKAN',
          'FAK_NAME'
        ]
      }
    ]
  },
  {
    id: 6,
    description: 'Der Lebensmittelprüfer Dr. Gesund hat für den Gehalt von Lebensmitteln an Vitaminen und Mineralstoffen folgende Relation entwickelt, wobei gilt:<br />LID: Eindeutige Nummer für das Lebensmittel.<br />STOFF: Name des Inhaltsstoffs<br />MENGE: Gehalt an dem Inhaltsstoff in 100g des Lebensmittels.<br />EINHEIT: Einheit für Mengenangaben des Inhaltsstoffs. Dies hängt vom jeweiligen Stoff ab, im Beispiel wird z.B. Vitamin A in mcg angegeben, die anderen Stoffe in mg. Die Einheit hängt nicht vom Lebensmittel ab.<br />EMPFOHLEN: Täglich empfohlene Menge eines Stoffes für einen Menschen<br /><br />Die Tabelle erscheint zu groß. Können Sie Dr. Gesund helfen, seine redundaten Daten zu verringern?',
    tableData: [
      {
        lid: '1',
        lebensmittel: 'Ananas',
        stoff: 'Calcium',
        menge: '16',
        einheit: 'mg',
        empfohlen: '1000'
      },
      {
        lid: '1',
        lebensmittel: 'Ananas',
        stoff: 'Kalium',
        menge: '173',
        einheit: 'mg',
        empfohlen: '2000'
      },
      {
        lid: '1',
        lebensmittel: 'Ananas',
        stoff: 'Magnesium',
        menge: '17',
        einheit: 'mg',
        empfohlen: '350'
      },
      {
        lid: '1',
        lebensmittel: 'Ananas',
        stoff: 'Vitamin C',
        menge: '19',
        einheit: 'mg',
        empfohlen: '100'
      },
      {
        lid: '2',
        lebensmittel: 'Apfel',
        stoff: 'Calcium',
        menge: '7',
        einheit: 'mg',
        empfohlen: '1000'
      },
      {
        lid: '2',
        lebensmittel: 'Apfel',
        stoff: 'Kalium',
        menge: '144',
        einheit: 'mg',
        empfohlen: '2000'
      },
      {
        lid: '2',
        lebensmittel: 'Apfel',
        stoff: 'Magnesium',
        menge: '6',
        einheit: 'mg',
        empfohlen: '350'
      },
      {
        lid: '2',
        lebensmittel: 'Apfel',
        stoff: 'Vitamin A',
        menge: '10',
        einheit: 'mcg',
        empfohlen: '800'
      },
      {
        lid: '2',
        lebensmittel: 'Apfel',
        stoff: 'Vitamin C',
        menge: '12',
        einheit: 'mg',
        empfohlen: '100'
      },
      {
        lid: '3',
        lebensmittel: 'Banane',
        stoff: 'Calcium',
        menge: '9',
        einheit: 'mg',
        empfohlen: '1000'
      },
      {
        lid: '3',
        lebensmittel: 'Banane',
        stoff: 'Kalium',
        menge: '393',
        einheit: 'mg',
        empfohlen: '2000'
      },
      {
        lid: '3',
        lebensmittel: 'Banane',
        stoff: 'Magnesium',
        menge: '36',
        einheit: 'mg',
        empfohlen: '350'
      },
      {
        lid: '3',
        lebensmittel: 'Banane',
        stoff: 'Vitamin C',
        menge: '12',
        einheit: 'mg',
        empfohlen: '100'
      },
      {
        lid: '4',
        lebensmittel: 'Birne',
        stoff: 'Calcium',
        menge: '10',
        einheit: 'mg',
        empfohlen: '1000'
      },
      {
        lid: '4',
        lebensmittel: 'Birne',
        stoff: 'Kalium',
        menge: '126',
        einheit: 'mg',
        empfohlen: '2000'
      },
      {
        lid: '4',
        lebensmittel: 'Birne',
        stoff: 'Magnesium',
        menge: '8',
        einheit: 'mg',
        empfohlen: '350'
      },
      {
        lid: '4',
        lebensmittel: 'Birne',
        stoff: 'Vitamin C',
        menge: '5',
        einheit: 'mg',
        empfohlen: '100'
      },
      {
        lid: '5',
        lebensmittel: 'Erdbeeren',
        stoff: 'Calcium',
        menge: '26',
        einheit: 'mg',
        empfohlen: '1000'
      },
      {
        lid: '5',
        lebensmittel: 'Erdbeeren',
        stoff: 'Kalium',
        menge: '147',
        einheit: 'mg',
        empfohlen: '2000'
      },
      {
        lid: '5',
        lebensmittel: 'Erdbeeren',
        stoff: 'Magnesium',
        menge: '15',
        einheit: 'mg',
        empfohlen: '350'
      },
      {
        lid: '5',
        lebensmittel: 'Erdbeeren',
        stoff: 'Vitamin C',
        menge: '64',
        einheit: 'mg',
        empfohlen: '100'
      }
    ],
    hasViolatingColumns: false,
    violatingColumns: [],
    functionalDependencies: [
      {
        primaryKeys: [
          'LID'
        ],
        columns: [
          'LEBENSMITTEL'
        ],
        type: 'partiell'
      },
      {
        primaryKeys: [
          'STOFF'
        ],
        columns: [
          'EMPFOHLEN',
          'EINHEIT'
        ],
        type: 'partiell'
      },
      {
        primaryKeys: [
          'LID',
          'STOFF'
        ],
        columns: [
          'MENGE'
        ],
        type: 'voll'
      }
    ],
    primaryKeys: [
      'LID',
      'STOFF'
    ],
    secondNormalForm: [
      {
        primaryKeys: [
          'LID'
        ],
        columns: [
          'LEBENSMITTEL'
        ]
      },
      {
        primaryKeys: [
          'STOFF'
        ],
        columns: [
          'EMPFOHLEN',
          'EINHEIT'
        ]
      },
      {
        primaryKeys: [
          'LID',
          'STOFF'
        ],
        columns: [
          'MENGE'
        ]
      }
    ],
    secondFormTableData: [
      [
        {
          lid: '1',
          lebensmittel: 'Ananas'
        },
        {
          lid: '2',
          lebensmittel: 'Apfel'
        },
        {
          lid: '3',
          lebensmittel: 'Banane'
        },
        {
          lid: '4',
          lebensmittel: 'Birne'
        },
        {
          lid: '5',
          lebensmittel: 'Erdbeeren'
        }
      ],
      [
        {
          stoff: 'Kalium',
          empfohlen: '2000',
          einheit: 'mg'
        },
        {
          stoff: 'Vitamin C',
          empfohlen: '100',
          einheit: 'mg'
        },
        {
          stoff: 'Vitamin A',
          empfohlen: '800',
          einheit: 'mcg'
        },
        {
          stoff: 'Calcium',
          empfohlen: '1000',
          einheit: 'mg'
        },
        {
          stoff: 'Magnesium',
          empfohlen: '350',
          einheit: 'mg'
        }
      ],
      [
        {
          lid: '4',
          stoff: 'Calcium',
          menge: '10'
        },
        {
          lid: '1',
          stoff: 'Vitamin C',
          menge: '19'
        },
        {
          lid: '3',
          stoff: 'Calcium',
          menge: '9'
        },
        {
          lid: '2',
          stoff: 'Vitamin A',
          menge: '10'
        },
        {
          lid: '5',
          stoff: 'Magnesium',
          menge: '15'
        },
        {
          lid: '5',
          stoff: 'Kalium',
          menge: '147'
        },
        {
          lid: '3',
          stoff: 'Vitamin C',
          menge: '12'
        },
        {
          lid: '5',
          stoff: 'Vitamin C',
          menge: '64'
        },
        {
          lid: '5',
          stoff: 'Calcium',
          menge: '26'
        },
        {
          lid: '4',
          stoff: 'Kalium',
          menge: '126'
        },
        {
          lid: '4',
          stoff: 'Magnesium',
          menge: '8'
        },
        {
          lid: '2',
          stoff: 'Magnesium',
          menge: '6'
        },
        {
          lid: '3',
          stoff: 'Magnesium',
          menge: '36'
        },
        {
          lid: '1',
          stoff: 'Kalium',
          menge: '173'
        },
        {
          lid: '2',
          stoff: 'Kalium',
          menge: '144'
        },
        {
          lid: '1',
          stoff: 'Magnesium',
          menge: '17'
        },
        {
          lid: '2',
          stoff: 'Vitamin C',
          menge: '12'
        },
        {
          lid: '2',
          stoff: 'Calcium',
          menge: '7'
        },
        {
          lid: '3',
          stoff: 'Kalium',
          menge: '393'
        },
        {
          lid: '1',
          stoff: 'Calcium',
          menge: '16'
        },
        {
          lid: '4',
          stoff: 'Vitamin C',
          menge: '5'
        }
      ]
    ],
    thirdNormalFormSolutions: [
      {
        primaryKeys: [
          'LID'
        ],
        columns: [
          'LEBENSMITTEL'
        ]
      },
      {
        primaryKeys: [
          'STOFF'
        ],
        columns: [
          'EMPFOHLEN',
          'EINHEIT'
        ]
      },
      {
        primaryKeys: [
          'LID',
          'STOFF'
        ],
        columns: [
          'MENGE'
        ]
      }
    ]
  },
  {
    id: 7,
    description: '<p>Betrachten Sie die folgende, in einem Krankenhaus gef&uuml;hrte Tabelle, wobei der Arzt und der Pfleger dem Patienten(P_Nr) und einer Krankheit zugeordnet werden. En Patient kann mehrere Krankheiten haben.<br /><br />PNR = Patientennummer<br />SNR = Stationsnummer<br />ZNR = Zimmernummer</p><p>Die Anzahl der Betten soll von der SNR und der ZNR abh&auml;ngen.</p>',
    tableData: [
      {
        snr: '1',
        station: 'Medizin',
        znr: '1',
        anzahl_betten: '2',
        pnr: '1',
        name_patient: 'Maier',
        v_name_patient: 'Hans',
        krankheit: 'Blinddarm',
        name_arzt: 'Mann',
        v_name_arzt: 'Heinz',
        name_pfleger: 'Brahms',
        v_name_pfleger: 'Hilde'
      },
      {
        snr: '1',
        station: 'Medizin',
        znr: '1',
        anzahl_betten: '2',
        pnr: '2',
        name_patient: 'Schmid',
        v_name_patient: 'Peter',
        krankheit: 'Beinbruch',
        name_arzt: 'Mann',
        v_name_arzt: 'Heinz',
        name_pfleger: 'Brahms',
        v_name_pfleger: 'Hilde'
      },
      {
        snr: '1',
        station: 'Medizin',
        znr: '1',
        anzahl_betten: '2',
        pnr: '2',
        name_patient: 'Schmid',
        v_name_patient: 'Peter',
        krankheit: 'Armbruch',
        name_arzt: 'Mann',
        v_name_arzt: 'Heinz',
        name_pfleger: 'Brahms',
        v_name_pfleger: 'Hilde'
      },
      {
        snr: '1',
        station: 'Medizin',
        znr: '2',
        anzahl_betten: '1',
        pnr: '3',
        name_patient: 'Josh',
        v_name_patient: 'Hugo',
        krankheit: 'Herzinfarkt',
        name_arzt: 'Hase',
        v_name_arzt: 'Willi',
        name_pfleger: 'Brahms',
        v_name_pfleger: 'Hilde'
      },
      {
        snr: '2',
        station: 'Augen',
        znr: '1',
        anzahl_betten: '2',
        pnr: '4',
        name_patient: 'Wein',
        v_name_patient: 'Berta',
        krankheit: 'Grauer Star',
        name_arzt: 'Wilms',
        v_name_arzt: 'Otto',
        name_pfleger: 'Saga',
        v_name_pfleger: 'Udo'
      },
      {
        snr: '2',
        station: 'Augen',
        znr: '1',
        anzahl_betten: '2',
        pnr: '5',
        name_patient: 'Hein',
        v_name_patient: 'Hanna',
        krankheit: 'Netzhaut',
        name_arzt: 'Wilms',
        v_name_arzt: 'Otto',
        name_pfleger: 'Saga',
        v_name_pfleger: 'Udo'
      },
      {
        snr: '2',
        station: 'Augen',
        znr: '2',
        anzahl_betten: '1',
        pnr: '6',
        name_patient: 'Fisch',
        v_name_patient: 'Olga',
        krankheit: 'Grüner Star',
        name_arzt: 'Wilms',
        v_name_arzt: 'Otto',
        name_pfleger: 'Meier',
        v_name_pfleger: 'Anna'
      },
      {
        snr: '2',
        station: 'Augen',
        znr: '2',
        anzahl_betten: '1',
        pnr: '6',
        name_patient: 'Fisch',
        v_name_patient: 'Olga',
        krankheit: 'Puma',
        name_arzt: 'Wilms',
        v_name_arzt: 'Otto',
        name_pfleger: 'Meier',
        v_name_pfleger: 'Anna'
      }
    ],
    hasViolatingColumns: false,
    violatingColumns: [],
    functionalDependencies: [
      {
        primaryKeys: [
          'SNR'
        ],
        columns: [
          'STATION'
        ],
        type: 'transitiv'
      },
      {
        primaryKeys: [
          'SNR',
          'ZNR'
        ],
        columns: [
          'ANZAHL_BETTEN'
        ],
        type: 'transitiv'
      },
      {
        primaryKeys: [
          'PNR'
        ],
        columns: [
          'NAME_PATIENT',
          'V_NAME_PATIENT',
          'SNR',
          'ZNR',
          'ANZAHL_BETTEN',
          'STATION'
        ],
        type: 'partiell'
      },
      {
        primaryKeys: [
          'PNR',
          'KRANKHEIT'
        ],
        columns: [
          'NAME_ARZT',
          'V_NAME_ARZT',
          'V_NAME_PFLEGER',
          'NAME_PFLEGER'
        ],
        type: 'voll'
      }
    ],
    primaryKeys: [
      'PNR',
      'KRANKHEIT'
    ],
    secondNormalForm: [
      {
        primaryKeys: [
          'PNR'
        ],
        columns: [
          'NAME_PATIENT',
          'V_NAME_PATIENT',
          'SNR',
          'ZNR',
          'ANZAHL_BETTEN',
          'STATION'
        ]
      },
      {
        primaryKeys: [
          'PNR',
          'KRANKHEIT'
        ],
        columns: [
          'NAME_ARZT',
          'V_NAME_ARZT',
          'V_NAME_PFLEGER',
          'NAME_PFLEGER'
        ]
      }
    ],
    secondFormTableData: [
      [
        {
          pnr: '6',
          name_patient: 'Fisch',
          v_name_patient: 'Olga',
          snr: '2',
          znr: '2',
          anzahl_betten: '1',
          station: 'Augen'
        },
        {
          pnr: '3',
          name_patient: 'Josh',
          v_name_patient: 'Hugo',
          snr: '1',
          znr: '2',
          anzahl_betten: '1',
          station: 'Medizin'
        },
        {
          pnr: '4',
          name_patient: 'Wein',
          v_name_patient: 'Berta',
          snr: '2',
          znr: '1',
          anzahl_betten: '2',
          station: 'Augen'
        },
        {
          pnr: '1',
          name_patient: 'Maier',
          v_name_patient: 'Hans',
          snr: '1',
          znr: '1',
          anzahl_betten: '2',
          station: 'Medizin'
        },
        {
          pnr: '5',
          name_patient: 'Hein',
          v_name_patient: 'Hanna',
          snr: '2',
          znr: '1',
          anzahl_betten: '2',
          station: 'Augen'
        },
        {
          pnr: '2',
          name_patient: 'Schmid',
          v_name_patient: 'Peter',
          snr: '1',
          znr: '1',
          anzahl_betten: '2',
          station: 'Medizin'
        }
      ],
      [
        {
          pnr: '1',
          krankheit: 'Blinddarm',
          name_arzt: 'Mann',
          v_name_arzt: 'Heinz',
          v_name_pfleger: 'Hilde',
          name_pfleger: 'Brahms'
        },
        {
          pnr: '3',
          krankheit: 'Herzinfarkt',
          name_arzt: 'Hase',
          v_name_arzt: 'Willi',
          v_name_pfleger: 'Hilde',
          name_pfleger: 'Brahms'
        },
        {
          pnr: '5',
          krankheit: 'Netzhaut',
          name_arzt: 'Wilms',
          v_name_arzt: 'Otto',
          v_name_pfleger: 'Udo',
          name_pfleger: 'Saga'
        },
        {
          pnr: '4',
          krankheit: 'Grauer Star',
          name_arzt: 'Wilms',
          v_name_arzt: 'Otto',
          v_name_pfleger: 'Udo',
          name_pfleger: 'Saga'
        },
        {
          pnr: '2',
          krankheit: 'Beinbruch',
          name_arzt: 'Mann',
          v_name_arzt: 'Heinz',
          v_name_pfleger: 'Hilde',
          name_pfleger: 'Brahms'
        },
        {
          pnr: '6',
          krankheit: 'Puma',
          name_arzt: 'Wilms',
          v_name_arzt: 'Otto',
          v_name_pfleger: 'Anna',
          name_pfleger: 'Meier'
        },
        {
          pnr: '6',
          krankheit: 'Grüner Star',
          name_arzt: 'Wilms',
          v_name_arzt: 'Otto',
          v_name_pfleger: 'Anna',
          name_pfleger: 'Meier'
        },
        {
          pnr: '2',
          krankheit: 'Armbruch',
          name_arzt: 'Mann',
          v_name_arzt: 'Heinz',
          v_name_pfleger: 'Hilde',
          name_pfleger: 'Brahms'
        }
      ]
    ],
    thirdNormalFormSolutions: [
      {
        primaryKeys: [
          'PNR'
        ],
        columns: [
          'NAME_PATIENT',
          'V_NAME_PATIENT',
          'SNR',
          'ZNR'
        ]
      },
      {
        primaryKeys: [
          'SNR',
          'ZNR'
        ],
        columns: [
          'ANZAHL_BETTEN'
        ]
      },
      {
        primaryKeys: [
          'SNR'
        ],
        columns: [
          'STATION'
        ]
      },
      {
        primaryKeys: [
          'PNR',
          'KRANKHEIT'
        ],
        columns: [
          'NAME_ARZT',
          'V_NAME_ARZT',
          'V_NAME_PFLEGER',
          'NAME_PFLEGER'
        ]
      }
    ]
  },
  {
    id: 8,
    description: 'Die Autohändlerin Frau Weber möchte ihren Bestand gebrauchter Wagen in einem relationalen Datenbanksystem organisieren. Die Analyse ergibt eine ganze Liste zu speichernder Informationen für jedes Fahrzeug, die Frau Weber direkt in eine Tabelle umsetzt. <br/><br/>Jedes Fahrzeug ist durch die FZNR identifiziert. Bei Fahrzeugen des gleichen Modells sind der Hersteller, der Neupreis, der Typ und die PS-Zahl übereinstimmend. Sofort beginnt sie mit der Erfassung ihrer Daten und erhält die folgende Relation Autos.<br />MNR = Modell-Nr, HNr = Hersteller-Nr, FZNR = FahrzeugNr<br /><br />Nach kurzer Zeit stellt Frau Weber fest, dass ihr die neue Datenbank nicht so recht Freude machen will, die Datenmodellierung scheint nicht gut durchdacht. Können Sie Frau Weber helfen?',
    tableData: [
      {
        mnr: '1',
        hnr: '1',
        hersteller: 'Opel',
        typ: 'Kadett',
        neupreis: '18000',
        verkaufspreis: '13000',
        ps: '60',
        fznr: 'K674',
        baujahr: '1999',
        km: '10000',
        einkaufspreis: '12000'
      },
      {
        mnr: '1',
        hnr: '1',
        hersteller: 'Opel',
        typ: 'Kadett',
        neupreis: '18000',
        verkaufspreis: '12000',
        ps: '60',
        fznr: 'K634',
        baujahr: '1998',
        km: '34000',
        einkaufspreis: '9000'
      },
      {
        mnr: '2',
        hnr: '1',
        hersteller: 'Opel',
        typ: 'Vectra',
        neupreis: '25000',
        verkaufspreis: '18000',
        ps: '90',
        fznr: 'V459',
        baujahr: '1990',
        km: '15000',
        einkaufspreis: '17000'
      },
      {
        mnr: '3',
        hnr: '1',
        hersteller: 'Opel',
        typ: 'Omega',
        neupreis: '30000',
        verkaufspreis: '22000',
        ps: '110',
        fznr: 'O634',
        baujahr: '1997',
        km: '45000',
        einkaufspreis: '15000'
      },
      {
        mnr: '4',
        hnr: '2',
        hersteller: 'VW',
        typ: 'Golf',
        neupreis: '25000',
        verkaufspreis: '21000',
        ps: '90',
        fznr: 'G789',
        baujahr: '1991',
        km: '11000',
        einkaufspreis: '16000'
      },
      {
        mnr: '4',
        hnr: '2',
        hersteller: 'VW',
        typ: 'Golf',
        neupreis: '25000',
        verkaufspreis: '16000',
        ps: '90',
        fznr: 'G713',
        baujahr: '1991',
        km: '31000',
        einkaufspreis: '13000'
      },
      {
        mnr: '5',
        hnr: '2',
        hersteller: 'VW',
        typ: 'Golf',
        neupreis: '28000',
        verkaufspreis: '19000',
        ps: '105',
        fznr: 'G762',
        baujahr: '1992',
        km: '28000',
        einkaufspreis: '17000'
      },
      {
        mnr: '6',
        hnr: '2',
        hersteller: 'VW',
        typ: 'Polo',
        neupreis: '19000',
        verkaufspreis: '10000',
        ps: '60',
        fznr: 'K635',
        baujahr: '1996',
        km: '71000',
        einkaufspreis: '8000'
      }
    ],
    hasViolatingColumns: false,
    violatingColumns: [],
    functionalDependencies: [
      {
        primaryKeys: [
          'MNR'
        ],
        columns: [
          'HNR',
          'HERSTELLER',
          'TYP',
          'NEUPREIS',
          'PS'
        ],
        type: 'transitiv'
      },
      {
        primaryKeys: [
          'HNR'
        ],
        columns: [
          'HERSTELLER'
        ],
        type: 'transitiv'
      },
      {
        primaryKeys: [
          'FZNR'
        ],
        columns: [
          'MNR',
          'HNR',
          'HERSTELLER',
          'TYP',
          'NEUPREIS',
          'VERKAUFSPREIS',
          'PS',
          'BAUJAHR',
          'KM',
          'EINKAUFSPREIS'
        ],
        type: 'voll'
      }
    ],
    primaryKeys: [
      'FZNR'
    ],
    secondNormalForm: [
      {
        primaryKeys: [
          'FZNR'
        ],
        columns: [
          'MNR',
          'HNR',
          'HERSTELLER',
          'TYP',
          'NEUPREIS',
          'VERKAUFSPREIS',
          'PS',
          'BAUJAHR',
          'KM',
          'EINKAUFSPREIS'
        ]
      }
    ],
    secondFormTableData: [
      [
        {
          fznr: 'G789',
          mnr: '4',
          hnr: '2',
          hersteller: 'VW',
          typ: 'Golf',
          neupreis: '25000',
          verkaufspreis: '21000',
          ps: '90',
          baujahr: '1991',
          km: '11000',
          einkaufspreis: '16000'
        },
        {
          fznr: 'V459',
          mnr: '2',
          hnr: '1',
          hersteller: 'Opel',
          typ: 'Vectra',
          neupreis: '25000',
          verkaufspreis: '18000',
          ps: '90',
          baujahr: '1990',
          km: '15000',
          einkaufspreis: '17000'
        },
        {
          fznr: 'G762',
          mnr: '5',
          hnr: '2',
          hersteller: 'VW',
          typ: 'Golf',
          neupreis: '28000',
          verkaufspreis: '19000',
          ps: '105',
          baujahr: '1992',
          km: '28000',
          einkaufspreis: '17000'
        },
        {
          fznr: 'G713',
          mnr: '4',
          hnr: '2',
          hersteller: 'VW',
          typ: 'Golf',
          neupreis: '25000',
          verkaufspreis: '16000',
          ps: '90',
          baujahr: '1991',
          km: '31000',
          einkaufspreis: '13000'
        },
        {
          fznr: 'K635',
          mnr: '6',
          hnr: '2',
          hersteller: 'VW',
          typ: 'Polo',
          neupreis: '19000',
          verkaufspreis: '10000',
          ps: '60',
          baujahr: '1996',
          km: '71000',
          einkaufspreis: '8000'
        },
        {
          fznr: 'K674',
          mnr: '1',
          hnr: '1',
          hersteller: 'Opel',
          typ: 'Kadett',
          neupreis: '18000',
          verkaufspreis: '13000',
          ps: '60',
          baujahr: '1999',
          km: '10000',
          einkaufspreis: '12000'
        },
        {
          fznr: 'K634',
          mnr: '1',
          hnr: '1',
          hersteller: 'Opel',
          typ: 'Kadett',
          neupreis: '18000',
          verkaufspreis: '12000',
          ps: '60',
          baujahr: '1998',
          km: '34000',
          einkaufspreis: '9000'
        },
        {
          fznr: 'O634',
          mnr: '3',
          hnr: '1',
          hersteller: 'Opel',
          typ: 'Omega',
          neupreis: '30000',
          verkaufspreis: '22000',
          ps: '110',
          baujahr: '1997',
          km: '45000',
          einkaufspreis: '15000'
        }
      ]
    ],
    thirdNormalFormSolutions: [
      {
        primaryKeys: [
          'MNR'
        ],
        columns: [
          'HNR',
          'TYP',
          'NEUPREIS',
          'PS'
        ]
      },
      {
        primaryKeys: [
          'HNR'
        ],
        columns: [
          'HERSTELLER'
        ]
      },
      {
        primaryKeys: [
          'FZNR'
        ],
        columns: [
          'MNR',
          'VERKAUFSPREIS',
          'EINKAUFSPREIS',
          'BAUJAHR',
          'KM'
        ]
      }
    ]
  }
]

export default tasks
