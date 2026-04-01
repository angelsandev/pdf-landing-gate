import { $currencyStore, type ICurrency } from '../store/currencyStore';
import { formatPriceWithCurrency } from './cart';

export const initPriceObserver = (): void => {
  // subscribe=> detecta cambios en el localstorage y ejecuta la función
  $currencyStore.subscribe((localStore: ICurrency): void => {
    // Buscamos todos los precios que tengan esta clase
    const priceElements = document.querySelectorAll<HTMLElement>('.product-price-display');
    
    priceElements.forEach((el: HTMLElement): void => {
      const basePriceAttr: string | null = el.getAttribute('data-base-price');

      if (basePriceAttr) {
        const basePrice: number = parseFloat(basePriceAttr);

        // Verificamos que el parseo sea un número válido
        if (!isNaN(basePrice)) {
          el.textContent = formatPriceWithCurrency(basePrice, localStore);// Actualiza el texto del elemento
        }
      }
    });
  });
};
