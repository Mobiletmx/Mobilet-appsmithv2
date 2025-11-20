export default {
	randomSalesID: () => {
    return Math.ceil(Math.random() * (9999 -  + 1)) + 1;
},
	randomCustomerID: () => {
    return Math.ceil(Math.random() * (99999 -  + 1)) + 1;
} 
	}