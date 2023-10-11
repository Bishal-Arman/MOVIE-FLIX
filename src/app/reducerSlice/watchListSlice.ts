import { Episode } from './../../graphql/__generated__/graphql';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface watchListType {
      watchList:Episode[]
      watching:Episode[]
      watched:Episode[]
  }
  
  const  initialState: watchListType = {
    watchList:[],
    watching:[],
    watched:[]
  }
  export const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {
   
     addToWatchList: (state, action: PayloadAction<Episode>) => {
        const existInWatchList=state.watchList.find((movie)=> movie.id===action.payload.id)
         if(existInWatchList){
          return;
       }
          state.watchList.push(action.payload)
      },

      RemoveFromWatchList: (state, action: PayloadAction<{id:string}>) => {
        const removeMovieFromWatchList=state.watchList.filter((movie)=>movie.id!==action.payload.id)
          state.watchList= removeMovieFromWatchList;
      },

      AddToWatchingList: (state, action: PayloadAction<Episode>) => {
        const existInWatchList = state.watchList.find((movie) => movie.id === action.payload.id)
        if (existInWatchList) {
          state.watchList = state.watchList.filter((movie) => movie.id !== action.payload.id);
        }
        const existInwatching = state.watching.find((movie) => movie.id === action.payload.id);
        if (existInwatching) {
          return;
        }
        state.watching.push(action.payload);
      },
      RemoveFromWatchingList:(state, action: PayloadAction<{id:string}>)=>{
        state.watching=state.watching.filter((movie)=>movie.id!==action.payload.id)
      
      },
      AddToWatchedList:(state,action: PayloadAction<Episode>)=>{
        const existInWatchList=state.watchList.find((movie)=>movie.id===action.payload.id)
        if(existInWatchList){
          state.watchList=state.watchList.filter((movie)=>movie.id!==action.payload.id)
        }
        const existInWatchingList=state.watching.find((movie)=>movie.id===action.payload.id);
        if(existInWatchingList){
          state.watching=state.watching.filter((movie)=>movie.id!==action.payload.id)
        }
        const existInWatchedList=state.watched.find((movie)=>movie.id===action.payload.id)
        if(existInWatchedList){
          return;
        }
        else{
          state.watched.push(action.payload)
        }
      },
      RemoveFromWatchedList:(state, action: PayloadAction<{id:string}>)=>{
        state.watched=state.watched.filter((movie)=>movie.id!==action.payload.id)
      }
     
       
    },
  })

  export const { addToWatchList,RemoveFromWatchList,AddToWatchingList, RemoveFromWatchingList, AddToWatchedList,RemoveFromWatchedList} = watchListSlice.actions
  
  export default watchListSlice.reducer