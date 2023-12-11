import { Injectable } from '@angular/core';

export interface Supplier {
  id: number;
  name: string;
  type: string;
  tel: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public suppliers: Supplier[] = [
    {
      id: 0,
      name: 'LX France',
      type: 'Epicerie',
      tel: '0',
      email: ''
    },
    {
      id: 1,
      name: 'Foodex Surgelés',
      type: 'Surgelés',
      tel: '0',
      email: ''
    },
    {
      id: 2,
      name: 'Foodex Epicerie',
      type: 'Epicerie',
      tel: '0',
      email: ''
    },
    {
      id: 3,
      name: 'AGIS',
      type: 'Sauces / Nems',
      tel: '0',
      email: 'commande.tarare@agis-sa.fr'
    },
    {
      id: 4,
      name: 'AGF',
      type: 'Surgelés / Viandes',
      tel: '01 56 20 19 04',
      email: 'commande@asiageneralfood.com'
    },
    {
      id: 5,
      name: 'UNIMEX',
      type: 'Barquettes / Etiquettes',
      tel: '0',
      email: ''
    },
    {
      id: 6,
      name: 'TTF',
      type: 'Epicerie',
      tel: '0',
      email: ''
    },
    {
      id: 7,
      name: 'Rochex',
      type: 'Hygiène',
      tel: '0',
      email: ''
    }
  ];

  constructor() { }

  public getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  public getSupplierById(id: number): Supplier {
    return this.suppliers[id];
  }
}
