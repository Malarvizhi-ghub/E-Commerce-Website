import { createSlice } from '@reduxjs/toolkit';
import tshirt from '../assets/products/tshirt.jpg';
import handbag from '../assets/products/handbag.jpg';
import sneakers from '../assets/products/sneakers.jpg';
import watch from '../assets/products/watch.jpg';
import jacket from '../assets/products/jacket.jpg';

const initialState = {
  products: [
    {
      id: 1,
      title: "Men T-Shirt",
      price: 499,
      image:tshirt,
    },
    {
      id: 2,
      title: "Women Handbag",
      price: 999,
      image:handbag,
    },
    {
      id: 3,
      title: "Sneakers",
      price: 1499,
      image:sneakers,
    },
    {
      id: 4,
      title: "Watch",
      price: 1999,
      image: watch,
    },
    {
      id: 5,
      title: "Jacket",
      price: 2499,
      image: jacket,
    },
  ],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;