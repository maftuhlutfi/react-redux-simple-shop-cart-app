import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { useSelector } from 'react-redux';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

export default function Nav(props) {
	const items = useSelector(state => state.cartReducer);
	const {amount} = items.length > 0 ? items.reduce((a, b) => ({amount: +a.amount + +b.amount})) : 0;

	const handleChange = (event, newValue) => {
		props.setValue(newValue);
	};

	return (
	  <Box boxShadow={1} >
		  <Tabs
		    value={props.value}
		    onChange={handleChange}
		    variant="fullWidth"
		    indicatorColor="primary"
		    textColor="primary"
		    aria-label="icon tabs example"
		  >
		    <Tab icon={<LocalMallIcon />} aria-label="shop" />
		    <Tab 
			    icon={<StyledBadge badgeContent={amount} color="secondary"> <ShoppingCartIcon /></StyledBadge>} 
			    aria-label="cart" 
		    />
		  </Tabs>
	  </Box>
	);
}