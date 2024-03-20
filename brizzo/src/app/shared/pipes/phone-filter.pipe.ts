import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'phoneFilter'})
export class PhoneFilterPipe implements PipeTransform {
  transform(value: string): string {
    return `(${value.slice(0,4)}) ${value.slice(4,7)} ${value.slice(7)}`
  }
}