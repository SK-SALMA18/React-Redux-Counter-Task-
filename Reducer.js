const initialState = {
    count : 0
};
function Reducer (state = initialState, action) {
    switch(action.type) {
        case "INCREMENT" :
            return {
                ...state,
                count: state.count + 1
            };
        case "DECREMENT" :
            return {
                ...state,
                count : state.count>0 ? state.count-1 : state.count=0
            };
        case "RESET":
            return{
                ...state,
                count:state.count = 0
            }
            default:
                return state;
    }
}
 export default Reducer;