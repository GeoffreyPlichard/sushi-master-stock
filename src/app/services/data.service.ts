import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, DocumentReference, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Supplier {
  name: string;
  type: string;
  tel: string;
  email: string;
}

export interface SupplierWithID extends Supplier {
  id: string;
}

export interface Supply {
  reference: string;
  name: string;
  upet: number;
  min_price: number;
  stock: number;
  supplierId: string;
}

export interface SupplyWithID extends Supply {
  id: string;
}

export interface Order extends SupplyWithID {
  isShipping: boolean;
  supplyId: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  firestore: Firestore = inject(Firestore)

  public getSupplierCollection(): CollectionReference {
    return collection(this.firestore, 'Supplier');
  }

  public getSupplierDocument(id: string): DocumentReference {
    return doc(this.firestore, 'Supplier', id);
  }

  public getSuppliers(): Observable<SupplierWithID[]> {
    const suppliersCollection = this.getSupplierCollection();
    return collectionData(suppliersCollection, { idField: 'id'}) as Observable<SupplierWithID[]>;
  }

  public getSupplierById(id: string): Observable<Supplier> {
    const supplierDocument = this.getSupplierDocument(id);
    return docData(supplierDocument) as Observable<Supplier>;
  }

  public getSupplyCollection(): CollectionReference {
    return collection(this.firestore, 'Supply');
  }

  public getSupplyDocument(id: string): DocumentReference {
    return doc(this.firestore, 'Supply', id);
  }

  public getSupplies(): Observable<SupplyWithID[]> {
    const supplyCollection = this.getSupplyCollection();
    return collectionData(supplyCollection, { idField: 'id'}) as Observable<SupplyWithID[]>;
  }

  public getOrderCollection(): CollectionReference {
    return collection(this.firestore, 'Order');
  }

  public getOrderDocument(id: string): DocumentReference {
    return doc(this.firestore, 'Order', id);
  }

  public getOrders(): Observable<Order[]> {
    const ordersCollection = this.getOrderCollection();
    return collectionData(ordersCollection, { idField: 'id'}) as Observable<Order[]>;
  }
}
