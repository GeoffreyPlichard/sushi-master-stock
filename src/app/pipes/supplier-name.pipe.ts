import { Pipe, PipeTransform } from '@angular/core';
import { SupplierWithID } from '../services/data.service';

@Pipe({
    name: 'suppliername',
    pure: false
})
export class SupplierNamePipe implements PipeTransform {
    transform(id: string, suppliers: SupplierWithID[]): string {
        if (!id || !suppliers) {
            return id;
        }

        const supplier = suppliers.find(supplier => supplier.id === id);

        return supplier?.name || id;
    }
}