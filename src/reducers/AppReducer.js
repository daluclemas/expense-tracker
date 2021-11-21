const AppReducer = (state, action) =>{

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return{
                ...state, transaction: state.transaction.filter(item=>{
                    return item.id !== action.payload;
                })
            }
            break;

            case 'ADD_TRANSACTION':
                return {
                    ...state,
                    transaction: [action.payload,...state.transaction]
                }
    
        default:
            return state;
    }

}

export default AppReducer;