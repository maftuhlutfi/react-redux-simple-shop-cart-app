import React from 'react';
import List from '@material-ui/core/List';
import Item from './Item';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 200,
    overflow: "auto"
  }
});

const items = [
	{
		id: "001",
		name: "Baju",
		price: 200
	},
	{
		id: "002",
		name: "Celana",
		price: 100
	},
	{
		id: "003",
		name: "Sempak",
		price: 120
	},
	{
		id: "004",
		name: "Topi",
		price: 230
	},
	{
		id: "005",
		name: "Sandal",
		price: 110
	}
]

export default function Shop() {
	const classes = useStyles();

	return (
		<List className={classes.root} >
			{items.map(item => <Item key={item.id} id={item.id} name={item.name} price={item.price} />)}
		</List>
	)
}