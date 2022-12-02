// ─────────────────────────────────────────────────────────────────────────────
// Name: checkout.test.js
// Description: Test the checkout functions
// ─────────────────────────────────────────────────────────────────────────────

// ─── Imports ─────────────────────────────────────────────────────────────────
import {jest} from '@jest/globals';
import { initCheckout, findProductBySKU, calculateItem, calculateSubTotal } from '../helpers/checkout.js';
import { cartData } from '../db/cart.js';
import { inventoryData } from '../db/inventory.js';

describe('initCheckout', () => {
	// Mock cartData object for testing

	// using mock data check if product A's subTotal is £140.00
	it('should return £140.00 for product A', () => {
		// Mock cartData object for testing
		const mockCartData = [
			{
				"code": "A",
				"quantity": 2
			},
			{
				"code": "B",
				"quantity": 3
			},
			{
				"code": "C",
				"quantity": 1
			},
			{
				"code": "D",
				"quantity": 2
			},
			{
				"code": "A",
				"quantity": 1
			}
		];

		expect(initCheckout(mockCartData)).toEqual({
			"cartManifest": [
				{
					"basePrice": 50, 
					"code": "A", 
					"discount": {
						"minQuantity": 3, 
						"price": 140
					}, 
					"price": 140, 
					"quantity": 3, 
					"sku": "A"
				}, 
				{
					"basePrice": 35, 
					"code": "B", 
					"discount": {
						"minQuantity": 2, 
						"price": 60
					}, 
					"price": 95, 
					"quantity": 3, 
					"sku": "B"
				}, 
				{
					"basePrice": 25, 
					"code": "C", 
					"discount": {
						"minQuantity": null, 
						"price": null
					}, 
					"price": 25, 
					"quantity": 1, 
					"sku": "C"
				}, 
				{
					"basePrice": 12, 
					"code": "D", 
					"discount": {
						"minQuantity": null, 
						"price": null
					}, 
					"price": 24, 
					"quantity": 2, 
					"sku": "D"
				}
			], 
			"subTotal": 284
		});
	});

	it('should return an object with two properties', () => {
		const result = initCheckout(cartData);
		expect(typeof result).toBe('object');
		expect(result).toHaveProperty('cartManifest');
		expect(result).toHaveProperty('subTotal');
	});

	it('should return a cartManifest property with the same length as the cartData', () => {
		const result = initCheckout(cartData);
		expect(result.cartManifest.length).toBe(cartData.length);
	});
	
	it('should return a subTotal property that is a number', () => {
		const result = initCheckout(cartData);
		expect(typeof result.subTotal).toBe('number');
	});

	it('should return a subTotal property that is equal to the sum of the cartManifest prices', () => {
		const result = initCheckout(cartData);
		const sum = result.cartManifest.reduce((acc, curr) => acc + curr.price, 0);
		expect(result.subTotal).toBe(sum);
	});

	it('should return a cartManifest property with the correct price for each item', () => {
		const result = initCheckout(cartData);
		const test = result.cartManifest.every((item) => {
			const product = findProductBySKU(item.sku, item.idx);
			const price = calculateItem(product, item.quantity, item.idx);
			return item.price === price;
		});
		expect(test).toBe(true);
	});
});

describe('findProductBySKU', () => {
	it('should return the correct product', () => {
		const result = findProductBySKU('A');
		expect(result).toEqual({
			sku: 'A',
			basePrice: 50,
			discount: {
				minQuantity: 3,
				price: 140,
			},
		});	
	});

	it('should throw an error if the sku is an empty string', () => {
		expect(() => findProductBySKU('', 0)).toThrow('Error at index 0: Please define a Product SKU.');
	});

	it('should throw an error if the sku is not a string', () => {
		expect(() => findProductBySKU(1, 0)).toThrow('Error at index 0: SKU must be a string.');
	});

	it('should return an object with the same SKU as the argument', () => {
		const result = findProductBySKU('A');
		expect(result.sku).toBe('A');
	});
});

describe('calculateItem', () => {
	it('should return a number', () => {
		const result = calculateItem(inventoryData[0], 1, 0);
		expect(typeof result).toBe('number');
	});

	it('should return the correct price', () => {
		const result = calculateItem(inventoryData[0], 1, 0);
		expect(result).toBe(50);
	});

	it('should return the correct price with discount', () => {
		const result = calculateItem(inventoryData[1], 3, 1);
		expect(result).toBe(95);
	});
});

describe('calculateSubTotal', () => {
	it('should return a number', () => {
		const result = calculateSubTotal(cartData);
		expect(typeof result).toBe('number');
	});

	it('should throw an error if no argument is passed', () => {
		expect(() => calculateSubTotal()).toThrow('Cart is not valid or empty, please add items to your cart.');
	});
});