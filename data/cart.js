export const cart = [];

export function addToCart (productId, quantitySelector) {
        const quantity = Number(quantitySelector.value);

        let matchingItem = cart.find(item => item.productId === productId);
        if (matchingItem) {
        matchingItem.quantity += quantity;
        } else {
        cart.push({ productId, quantity });
        }
    }