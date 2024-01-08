/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

const productData = [
  { id: 1, title: 'Ljusstake femarmad', price: 175 },
  { id: 2, title: 'Fotoram i silver', price: 140 },
  { id: 3, title: 'Taklampa smides och glas', price: 250 }
]

export const products = createSlice({
  name: 'products',
  initialState: productData
})