import React from 'react';
import List from '@material-ui/core/List';
import Item from './Item';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    height: 200,
    overflow: "auto"
  }
});

export default function Cart() {
	const classes = useStyles();
	const items = useSelector(state => state.cartReducer);

	return (
		<List className={classes.root} >
			{items !== null && items.map(item => <Item key={item.id} id={item.id} name={item.name} price={item.price} amount={item.amount} />)}
		</List>
	)
}