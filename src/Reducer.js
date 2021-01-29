export const initialState={
    basket:[],
    user:null
}


export const getbasketTotal =(basket) =>
    
        basket?.reduce((amount,item)=> item.price + amount,0)
    

const reducer =(state,action) =>{
    console.log(action)
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket:[...state.basket,action.item]
            }

           
       case "REMOVE FROM BASKET":

       let newBasket = [...state.basket]
       console.log(newBasket)
       const index = state.basket.findIndex(
           (basketitem) => basketitem.id === action.id
       )

       if(index >=0){
           newBasket.splice(index,1)
       }
       else{
           console.log(
               "cant remove item"
           )
       }
           return{...state,basket:newBasket
        }
       
         default:
             return state
    }

}

export default reducer
