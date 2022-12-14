// ─────────────────────────────────────────────────────────────────────────────
// Name: checkout.js
// Description: Helper functions for the checkout process
// ─────────────────────────────────────────────────────────────────────────────

// ─── Imports ─────────────────────────────────────────────────────────────────
import { inventoryData } from "../db/inventory.js";
// ─────────────────────────────────────────────────────────────────────────────

// ─── Helper Functions ────────────────────────────────────────────────────────
export function findProductBySKU(sku, idx) {
	if (!sku) { throw new Error(`Error at index ${idx}: Please define a Product SKU.`); }
	if (typeof sku !== "string") { throw new Error(`Error at index ${idx}: SKU must be a string.`); }

	try {
		const productManifest = inventoryData.find((product) => product.sku === sku);
		return productManifest;
	} catch (error) {
		if (error instanceof TypeError) {
			console.error(`Error: Invalid argument type at index ${idx}.`);
		} else {
			console.error(`Error: ${error.message}`);
		}
	}
}

export function calculateItem({ basePrice, discount }, quantity, idx) {
	if (typeof basePrice !== "number") { throw new Error(`Error at index ${idx}: Base Price must be a number.`); }
	try {
		// Check if discountPrice has a minQuantity
		if (discount.minQuantity && quantity >= discount.minQuantity) {
			// Calculate the price
			const remainder = quantity % discount.minQuantity;
			const totalDiscount = Math.floor(quantity / discount.minQuantity) * discount.price;
			const total = remainder * basePrice + totalDiscount;
			return total;
		} else {
			// Calculate the price
			const total = quantity * basePrice;
			return total;
		}
	} catch (error) {
		if (error instanceof TypeError) {
			if (basePrice === undefined) {
				return `Error: Invalid argument type at index ${idx}.`;
			} else {
				throw new TypeError("Product must be an object");
			}
		} else {
			throw new Error("Product is not valid");
		}
	}
}

export function aggrCart(cartData) {
	try {
		let cart = [];

		cartData.forEach((item, _idx) => {
			// Check if item is already in cart
			let itemInCart = cart.find((cartItem) => cartItem.code === item.code);
	
			if (itemInCart) {
				// If item is already in cart, increment quantity
				itemInCart.quantity += item.quantity;
			} else {
				// If item is not in cart, add it
				cart.push({
					code: item.code,
					quantity: item.quantity,
				});
			}
			_idx += 1;
		});
		return cart;
	} catch (error) {
		if (error instanceof TypeError) {
			throw new TypeError(`Error at index ${_idx}: Cart must be an array`);
		} else {
			throw new Error(`Error at index ${_idx}: Cart is not valid`);
		}
	}
}

export function calculateSubTotal(cart) {
	if (!cart) { throw new Error("Cart is not valid or empty, please add items to your cart."); }
	try {
		const subTotal = cart.reduce((acc, curr) => acc + curr.price, 0);
		return subTotal;
	} catch (error) {
		if (error instanceof TypeError) {
			throw new TypeError("Cart is required.");
		} else {
			throw new Error(`Error: ${error.message}`);
		}
	}
}
// ─────────────────────────────────────────────────────────────────────────────

export function initCheckout(cart) {
	const currency = new Intl.NumberFormat('en-GB', {
		style: 'currency',
		currency: 'GBP',
	});
	try {
		// Aggregate cart
		const filteredCart = aggrCart(cart);
		let cartManifest = filteredCart.map((item, idx) => {
			const productDetails = findProductBySKU(item.code, idx);
			const price = calculateItem(productDetails, item.quantity, idx);
			return { ...item, ...productDetails, price };
		});
		const subTotal = calculateSubTotal(cartManifest);
		console.log('Receipt:');
		console.log(`Prod | Qty | Price`);
		console.log("──────────────────");
		cartManifest.forEach((item) => {
			const { code, quantity, price } = item;
			console.log(`${code} | ${quantity} | ${currency.format(price)}`);
		});
		console.log("──────────────────");
		console.log(`Subtotal: ${currency.format(subTotal)}`);
		return { cartManifest, subTotal };
	} catch (error) {
		if (error instanceof TypeError) {
			throw new TypeError("Cart must be an array");
		} else {
			throw new Error("Cart is not valid or empty, please add items to your cart.");
		}
	}
}