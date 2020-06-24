import React, {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux';
import {addItem} from '../actions';

const useStyles = makeStyles({
  root: {
    padding: "5px 30px"
  },
  number: {
  	width: 70,
  	marginRight: "10px"
  }
});

export default function Item(props) {
	const classes = useStyles();
	const [amount, setAmount] = useState(1);
	const dispatch = useDispatch();

	const handleChange = e => {
		const {value} = e.target;

		value <= 1 ? setAmount(1) : setAmount(value);
	}

	const handleClick = e => {
		dispatch(addItem({...props, amount: amount}));
		setAmount(1);
	}

	return (
        <ListItem className={classes.root} >

			<ListItemText primary={props.name} secondary={"$" + props.price} />

			<form noValidate autoComplete="off">
				<TextField 
				  className={classes.number} 
				  name="total" 
				  type="number" 
				  variant="outlined" 
				  value={amount}
				  onChange={handleChange}
				/>
			</form>

			<IconButton onClick={handleClick} edge="end" aria-label="delete">
				<AddCircleIcon />
			</IconButton>

        </ListItem>
	)
}