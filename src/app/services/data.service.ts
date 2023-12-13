import { Injectable } from '@angular/core';

export enum SupplierID {
  LX_FRANCE = 0,
  FOODEX_FROZEN = 1,
  FOODEX_GROCERY = 2,
  AGIS = 3,
  AGF = 4,
  UNIMEX = 5,
  TTF = 6,
  ROCHEX = 7
}

export interface Supplier {
  id: SupplierID;
  name: string;
  type: string;
  tel: string;
  email: string;
}

export interface Supplies {
  [key: number]: Supply[]
}

export interface Supply {
  id: number;
  reference: number | string;
  name: string;
  upet: number;
  min_price: number;
  min_pack: number;
  stock: number;
}

export interface IOrder extends Supply {
  supplierId: SupplierID;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public suppliers: Supplier[] = [
    {
      id: SupplierID.LX_FRANCE,
      name: 'LX France',
      type: 'Epicerie',
      tel: '0',
      email: ''
    },
    {
      id: SupplierID.FOODEX_FROZEN,
      name: 'Foodex Surgelés',
      type: 'Surgelés',
      tel: '0',
      email: ''
    },
    {
      id: SupplierID.FOODEX_GROCERY,
      name: 'Foodex Epicerie',
      type: 'Epicerie',
      tel: '0',
      email: ''
    },
    {
      id: SupplierID.AGIS,
      name: 'AGIS',
      type: 'Sauces / Nems',
      tel: '0',
      email: 'commande.tarare@agis-sa.fr'
    },
    {
      id: SupplierID.AGF,
      name: 'AGF',
      type: 'Surgelés / Viandes',
      tel: '01 56 20 19 04',
      email: 'commande@asiageneralfood.com'
    },
    {
      id: SupplierID.UNIMEX,
      name: 'UNIMEX',
      type: 'Barquettes / Etiquettes',
      tel: '0',
      email: ''
    },
    {
      id: SupplierID.TTF,
      name: 'TTF',
      type: 'Epicerie',
      tel: '0',
      email: ''
    },
    {
      id: SupplierID.ROCHEX,
      name: 'Rochex',
      type: 'Hygiène',
      tel: '0',
      email: ''
    }
  ];

  public supplies: Supplies = [
    [
      {
        id: 0,
        reference: 302001,
        name: "Ramune Limonade Japonaise nature CTC JP 200ml*(30)",
        upet: 1.29,
        min_pack: 30,
        min_price: 38.70,
        stock: 3
      },
      {
        id: 1,
        reference: 302002,
        name: "Ramune Limonade Japonaise nature CTC JP 200ml*(30)",
        upet: 1.29,
        min_pack: 30,
        min_price: 38.70,
        stock: 2
      },
      {
        id: 2,
        reference: 302003,
        name: "Ramune Limonade Japonaise nature CTC JP 200ml*(30)",
        upet: 1.29,
        min_pack: 30,
        min_price: 38.70,
        stock: 0
      }
    ],
    [
      {
        id: 0,
        reference: 200996,
        name: "CREVETTE SUSHI/SUSHI EBI (8-8.5cm) 30pcs x 20pqts",
        upet: 117.29,
        min_pack: 4,
        min_price: 469.17,
        stock: 1
      },
      {
        id: 1,
        reference: 200833,
        name: "SURIMI POUR HOSO MAKI 500 g  X 20 pqts",
        upet: 56.75,
        min_pack: 3,
        min_price: 170.25,
        stock: 5
      },
      {
        id: 2,
        reference: 200709,
        name: "GYOZA POULET 30 PCS (600G)",
        upet: 4.59,
        min_pack: 50,
        min_price: 229.50,
        stock: 3
      }
    ],
    [
      {
        id: 0,
        reference: 144200,
        name: "LIMONADE JAPONAISE / RAMUNE 200ML X 24",
        upet: 32.50,
        min_pack: 3,
        min_price: 97.50,
        stock: 2
      },
      {
        id: 1,
        reference: 201966,
        name: "SAUCE DE SOJA SANS GLUTEN 150ML x 6.",
        upet: 10.11,
        min_pack: 4,
        min_price: 40.44,
        stock: 0
      },
      {
        id: 2,
        reference: 201841,
        name: "GINGEMBRE MARINE EN POT 190G X6",
        upet: 7.15,
        min_pack: 3,
        min_price: 21.45,
        stock: 1
      }
    ],
    [
      {
        id: 0,
        reference: 43054.006,
        name: "BEIGNETS CREVETTES PANES FE 6X140G",
        upet: 0,
        min_pack: 0,
        min_price: 0,
        stock: 10
      },
      {
        id: 1,
        reference: 137838.001,
        name: "Sauce nems Stick (380pc x 30gr)",
        upet: 0,
        min_pack: 0,
        min_price: 0,
        stock: 7
      },
      {
        id: 2,
        reference: 137837.006,
        name: "Sauce soja Huître",
        upet: 0,
        min_pack: 0,
        min_price: 0,
        stock: 9
      }
    ],
    [
      {
        id: 0,
        reference: "2007-2",
        name: "Crevettes tempura 16/20 (30x10pcs)",
        upet: 123,
        min_pack: 4,
        min_price: 492,
        stock: 5
      },
      {
        id: 1,
        reference: "1024",
        name: "CREVETTE FILAMENT (30x10pcs)",
        upet: 93.90,
        min_pack: 3,
        min_price: 281.7,
        stock: 6
      },
      {
        id: 2,
        reference: "1012-2",
        name: "POULET PANE CORNFLAKES ( 5x1kg )",
        upet: 33,
        min_pack: 1,
        min_price: 33,
        stock: 6
      }
    ],
    [
      {
        id: 0,
        reference: "SCVBCMA0",
        name: "MARMIPACK 218*140*58 mm",
        upet: 41.04,
        min_pack: 7,
        min_price: 287.28,
        stock: 20
      },
      {
        id: 1,
        reference: "CVMA0500C",
        name: "MARMIPACK COUVERCLE",
        upet: 28.50,
        min_pack: 7,
        min_price: 199.50,
        stock: 16
      },
      {
        id: 2,
        reference: "",
        name: "Gants NITRILE Taille S",
        upet: 9.60,
        min_pack: 10,
        min_price: 96,
        stock: 0
      }
    ],
    [
      {
        id: 0,
        reference: "100052L",
        name: "Riz parfumé 20KG",
        upet: 20,
        min_pack: 1,
        min_price: 20,
        stock: 2
      },
      {
        id: 1,
        reference: "100032L",
        name: "Riz parfumé jasmin 20KG",
        upet: 26.80,
        min_pack: 1,
        min_price: 26.80,
        stock: 2
      },
      {
        id: 2,
        reference: "410052L",
        name: "Vermicelle de Riz Bun Tuoi, 30 X 375 G",
        upet: 1.10,
        min_pack: 30,
        min_price: 33,
        stock: 5
      }
    ],
    [
      {
        id: 0,
        reference: "190212",
        name: "Ecolabel Vitrenet pulvé 750 ml",
        upet: 29.52,
        min_pack: 1,
        min_price: 29.52,
        stock: 0
      },
      {
        id: 1,
        reference: "163000",
        name: "Degraissant Duomax pulvé 750 ml",
        upet: 44.16,
        min_pack: 1,
        min_price: 44.16,
        stock: 0
      },
      {
        id: 2,
        reference: "120165",
        name: "Produits vaiselle Agivit 1L non désinfectant",
        upet: 25.4,
        min_pack: 1,
        min_price: 25.4,
        stock: 6
      }
    ]
  ]

  public orders: IOrder[] = [];

  constructor() { }

  public getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  public getSupplierById(id: number): Supplier {
    return this.suppliers[id];
  }

  public getSupplies(): Supplies {
    return this.supplies;
  }

  public getSuppliesBySupplier(id: number): Supply[] {
    return this.supplies[id];
  }

  public getSupplyById(id: number): Supplies {
    return this.supplies;
  }

  public getOrders(): IOrder[] {
    return this.orders;
  }

  public addOrder(supplyOrder: IOrder) {
    this.orders.push(supplyOrder);
  }

}
