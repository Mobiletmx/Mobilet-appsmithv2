export default {
    expected_revenue: [5000000000],
		getCarSalesRevenue: () => {
			return(carsales_revenue.data[0].sum);
		},
	getCarsSold: () => {
		return ((select_showroom_db.data.length))
	},
	getCarsRepaired: () => {
		return ((	select_repair_db.data.length))
	},
	getCarRepairRevenue: () => {
		const arr = select_repair_db.data.map(y => parseInt(y.total_cost) || 0);
		return ((arr.reduce((a, b) => a + b, 0)))
	},
	numFormatter_1: () => {
		const num = (JSObject1.getCarRepairRevenue())
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(0) + 'K'; 
    }else if(num > 1000000){
        return (num/1000000).toFixed(0) + 'M'; 
    }else if(num < 900){
        return num; 
    }
},
		numFormatter_2: () => {
		const num = (JSObject1.getCarSalesRevenue())
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(0) + 'K'; 
    }else if(num > 1000000){
        return (num/1000000).toFixed(0) + 'M'; 
    }else if(num < 900){
        return num; 
    }
},
		numFormatter_3: () => {
		const num = (JSObject1.getCarSalesRevenue() + JSObject1.getCarRepairRevenue())
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(0) + 'K'; 
    }else if(num > 1000000){
        return (num/1000000).toFixed(0) + 'M'; 
    }else if(num < 900){
        return num; 
    }
},
	round_feedback: () => {
		const feedback = Math.round(avg_feed_repair.data[0].AverageValue)
		return feedback
	},
			numFormatter_4: () => {
		const num = (JSObject1.expected_revenue[0])
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(0) + 'K'; 
    }else if(num > 1000000){
        return (num/1000000).toFixed(0) + 'M'; 
    }else if(num < 900){
        return num; 
    }
			}
}