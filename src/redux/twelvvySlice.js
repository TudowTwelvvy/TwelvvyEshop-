import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[],
  userInfo: null,
  
}

export const twelvvySlice = createSlice({
  name: "twelvvy",
  initialState,
  reducers:{
    addToCart: (state,action)=>{
      const item = state.products.find((item)=>item.id === action.payload.id)
      if(item){
        item.quantity +=  action.payload.quantity
      }else{
        state.products.push(action.payload) 
      }
      
    },
    deleteItem:(state,action)=>{
      state.products= state.products.filter((item)=>{
        return item.id !== action.payload
      })
    },
    resertCart: (state)=>{
      state.products=[]
    },
    setUserInfo:(state,action)=>{
      state.userInfo = action.payload
    },
    incrementQuan:(state,action)=>{
      const item = state.products.find((item)=> item.id === action.payload);
      item.quantity++
    },
    decrementQuan:(state,action)=>{
      const item = state.products.find((item)=> item.id === action.payload);
      if(item.quantity === 1){
        item.quantity =1
      }else{
        item.quantity --
      }
    },
    userSignOut: (state)=>{
      state.userInfo = null
    }
    
  }
})

export const {addToCart, deleteItem, resertCart,  incrementQuan, decrementQuan, setUserInfo,userSignOut } = twelvvySlice.actions;
export default twelvvySlice.reducer;