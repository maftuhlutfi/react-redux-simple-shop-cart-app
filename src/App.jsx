import React from 'react';
import Paper from '@material-ui/core/Paper';
import Nav from './Nav';
import Shop from './shop/Shop';
import Cart from './cart/Cart';
import { makeStyles } from '@material-ui/core/styles';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {allReducers} from './reducers/index.js';
import Price from './Price';

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "90vh",
    width: "100%"
  },
  paper: {
    width: "600px"
  }
});

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <Paper className={classes.paper} >
          <Nav value={value} setValue={setValue} />
          {value === 0 && <Shop />}
          {value === 1 && <Cart />}
        </Paper>
        <Price />
      </div>
    </Provider>
  );
}

export default App;
