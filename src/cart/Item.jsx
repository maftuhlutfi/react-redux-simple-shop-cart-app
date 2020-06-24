import React, {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux';
import {removeItem} from '../actions';

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
	const [amount, setAmount] = useState(props.amount);
	const dispatch = useDispatch();

	const handleChange = e => {
		const {value} = e.target;

		value <= 1 ? setAmount(1) : setAmount(value);
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

			<IconButton onClick={e => dispatch(removeItem(props))} edge="end" aria-label="delete">
				<DeleteIcon />
			</IconButton>

        </ListItem>
	)
}