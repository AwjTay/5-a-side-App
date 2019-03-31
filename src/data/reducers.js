import initial from "./initial";

const setInitial = () => initial;

const reducer = (state, action) => {
    switch (action.type) {
    	
case "reset":
            return setInitial();
        default:
            return state;
    }
};

export default reducer;