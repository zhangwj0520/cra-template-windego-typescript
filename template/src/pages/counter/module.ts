import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '@store/index'

const name = 'counter'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 11,
}

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = slice.actions

export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const selectCount = (state: RootState) => state[name].value

export default slice
