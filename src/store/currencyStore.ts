// src/store/currencyStore.ts
import { persistentAtom } from '@nanostores/persistent';

export interface ICurrency {
    id: number;
    name: string;
    iso: string;
    sign: string;
    position: 'prefix' | 'suffix';
    decimal?: string;    
    thousands?: string;
}

// Crear el store persistente (se guarda en 'cartCurrency')
export const $currencyStore = persistentAtom<ICurrency>('cartCurrency',     // Nombre del store: cartCurrency
    { id: 1, name: 'EURO', iso: 'EUR', sign: '€', position: 'suffix' },     // Valor por defecto
    {
        encode: JSON.stringify,                                             // Como convierte Objeto a texto
        decode: JSON.parse,                                                 // Como convierte texto a Objeto                                  
    }
);

// Función para actualizar el localstorage
export function updateCurrency(newCurrency: ICurrency) {
    $currencyStore.set(newCurrency);
}
