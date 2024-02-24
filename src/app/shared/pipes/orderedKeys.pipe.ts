import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderedKeys'
})
export class OrderedKeysPipe implements PipeTransform {
    transform(value: any, orderedKeys: string[]): any[] {
        if (!value || !orderedKeys || !Array.isArray(orderedKeys)) {
            return [];
        }
        return orderedKeys.map(key => ({ key, value: value[key] }));
    }
}
