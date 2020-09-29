import { Pipe, PipeTransform } from '@angular/core';
import { abort } from 'process';

// Pipe encargado de transformar la fecha
@Pipe ({
    name: 'fechaPipe'
})
export class FechaPipe implements PipeTransform {
    dia: number = 2
    mes: number = 1
    año: number = 0
    meses: Object = {
        '01': 'enero', 
        '02':'febrero', 
        '03':'marzo', 
        '04':'abril', 
        '05': 'mayo', 
        '06':'junio', 
        '07':'julio', 
        '08':'agosto', 
        '09':'septiembre', 
        '10':'octubre', 
        '11':'noviembre', 
        '12':'diciembre'
    };

    transform(fecha: string): string {
        let newFecha: string[] = fecha.split('-');
        return `${newFecha[this.dia]} de ${this.meses[`${newFecha[this.mes]}`]} de ${newFecha[this.año]}`
    }
} 