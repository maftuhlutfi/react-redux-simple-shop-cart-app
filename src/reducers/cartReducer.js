export default function cartReducer(state = [], action) {
	switch (action.type) {
		case "ADD_ITEM":
			const index = state.findIndex(item => item.id === action.payload.id);
			if (index > -1) {
				state[index].amount = +state[index].amount + +action.payload.amount;
				return state;
			} else {
				return [...state, action.payload];
			}
		case "REMOVE_ITEM": return state.filter(item => item.id !== action.payload.id);
		default: return state;
	}
}