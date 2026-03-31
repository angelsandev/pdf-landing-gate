import type { ICurrency } from '../store/currencyStore';

// Formatea un precio basándose en la configuración de la moneda del store

export const formatPriceWithCurrency = (price: number | string | undefined | null, storeCurrency: ICurrency): string => {
    // Aseguramos que price sea un número, si es undefined o null usamos 0
    const numericPrice = Number(price || 0);
    // Usa las propiedades del storeCurrency directamente
    const symbol: string = storeCurrency.sign || '';
    const position: 'prefix' | 'suffix' = storeCurrency.position || 'prefix';
    const decimal: string = storeCurrency.decimal || '.';
    const thousands: string = storeCurrency.thousands || ',';

    let formattedValue: string;

    // JPY sin decimales
    if (storeCurrency.iso === 'JPY') {
        formattedValue = Math.round(numericPrice).toString();
    } else {
        formattedValue = numericPrice.toFixed(2);
    }

    // Separadores de miles
    const [intPart, decPart] = formattedValue.toString().split('.');
    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
    const finalPrice = decPart !== undefined 
        ? `${formattedInt}${decimal}${decPart}`
        : formattedInt;

    // Retorna el precio con el símbolo en la posición correcta
    return position === 'suffix'
        ? `${finalPrice} ${symbol}`
        : `${symbol}${finalPrice}`;
};

// Trunca el nombre de un producto si excede el máximo de caracteres
export const truncateName = (name: string | undefined | null, maxLength: number): string => {
    if (!name) return '';
    if (name.length <= maxLength) return name;
    return name.slice(0, maxLength - 3) + '...';
};

