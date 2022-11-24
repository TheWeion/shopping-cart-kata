// ─────────────────────────────────────────────────────────────────────────────
// Name: checkout.js
// Description: Helper functions for the checkout process
// ─────────────────────────────────────────────────────────────────────────────

// ─── Imports ─────────────────────────────────────────────────────────────────
import { inventoryData } from "../db/inventory.js";
// ─────────────────────────────────────────────────────────────────────────────


export function findProductBySKU(sku, idx) {
	if (!sku) { throw new Error("SKU is required"); }
	if (typeof sku !== "string") { throw new Error(`Error at index ${idx}: SKU must be a string`); }

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

export function calculateSubTotal(cart) {
	try {
		const subTotal = cart.reduce((acc, curr) => acc + curr.price, 0);
		return subTotal;
	} catch (error) {
		if (error instanceof TypeError) {
			throw new TypeError("Cart must be an array");
		} else {
			throw new Error("Cart is not valid or empty, please add items to your cart.");
		}
	}
}

export function initCheckout(cart) {
	const currency = new Intl.NumberFormat('en-GB', {
		style: 'currency',
		currency: 'GBP',
	});
	try {
		let cartManifest = cart.map((item, idx) => {
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