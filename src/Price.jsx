import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

export default function Price() {
	const items = useSelector(state => state.cartReducer);
	const {price} = items.length > 0 ? items.reduce((a, b) => ({price: +a.price + +b.price})) : 0;
	return (
		<Typography style={{marginTop: '10px'}} variant="body1" gutterBottom>
			Total price: ${price}
		</Typography>
	)
}
