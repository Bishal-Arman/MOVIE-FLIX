import { Episode } from './../../graphql/__generated__/graphql';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface watchListType {
      watchList:Episode[]
  }
  
  const  initialState: watchListType = {
    watchList:[]
  }
  export const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {
   
     addToWatchList: (state, action: PayloadAction<Episode>) => {
        const exist=state.watchList.find((movie)=>
         movie.id===action.payload.id)
         if(exist){
          state.watchList;
       }
       else{
          state.watchList.push(action.payload)
       }
      },
      
    },
  })

  export const {   addToWatchList} = watchListSlice.actions
  
  export default watchListSlice.reducer