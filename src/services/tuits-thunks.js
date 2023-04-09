import {createAsyncThunk}
  from "@reduxjs/toolkit"
import * as service
  from "./tuits-service"

  const currentUser = {
    "username": "Spacex",
    "handle": "@spacex",
    "image": "spacex.jpeg", 
  };
  
  const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
  }

export const findTuitsThunk = createAsyncThunk(
  'tuits/findTuits', async () =>
    await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
      console.log(tuitId['_id'])
      await service.deleteTuit(tuitId['_id'])
      return tuitId
  })
  
  export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
      console.log(tuit)
      const newTuit = await service.createTuit(tuit)
      return newTuit
  })
  
  export const updateTuitThunk =
  createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) =>
      await service.updateTuit(tuit)
)
