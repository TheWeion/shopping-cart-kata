// ─────────────────────────────────────────────────────────────────────────────
// Name: inventory.js
// Description: Inventory dataset to simulate a database output from a CMS/CRM
// ─────────────────────────────────────────────────────────────────────────────

export let inventoryData = [
	{
		sku: 'A',
		basePrice: 50,
		discount: {
			minQuantity: 3,
			price: 140,
		},
	},
	{
		sku: 'B',
		basePrice: 35,
		discount: {
			minQuantity: 2,
			price: 60,
		},
	},
	{
		sku: 'C',
		basePrice: 25,
		discount: {
			minQuantity: null,
			price: null,
		},
	},
	{
		sku: 'D',
		basePrice: 12,
		discount: {
			minQuantity: null,
			price: null,
		},
	},
];