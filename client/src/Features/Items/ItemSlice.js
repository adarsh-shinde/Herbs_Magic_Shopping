import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import itemService from "./ItemService";
const initialState = {
   items: [],
   isError: false,
   isLoading: false,
   isSuccess: false,
   message: "",
};

// create new Item
export const createItem = createAsyncThunk(
   "items/create",
   async (itemData, thunkAPI) => {
      try {
         // const token  = await thunkAPI.getState().auth.user.token;

         return await itemService.createItem(itemData);
      } catch (error) {
         const message =
            (error.response &&
               error.response.data &&
               error.response.data.message) ||
            error.message ||
            error.toString();
         return thunkAPI.rejectWithValue(message);
      }
   }
);
// Get Items
export const getItems = createAsyncThunk(
   "items/getAll",
   async (_, thunkAPI) => {
      try {
         // const token  = await thunkAPI.getState().auth.user.token;

         return await itemService.getItems();
      } catch (error) {
         const message =
            (error.response &&
               error.response.data &&
               error.response.data.message) ||
            error.message ||
            error.toString();
         return thunkAPI.rejectWithValue(message);
      }
   }
);
// Delete Items
export const deleteItem = createAsyncThunk(
   "items/delete",
   async (id, thunkAPI) => {
      try {
         // const token  = await thunkAPI.getState().auth.user.token;

         return await itemService.deleteItem(id);
      } catch (error) {
         const message =
            (error.response &&
               error.response.data &&
               error.response.data.message) ||
            error.message ||
            error.toString();
         return thunkAPI.rejectWithValue(message);
      }
   }
);
// Update Items
export const updateItem = createAsyncThunk(
   "items/update",
   async (itemData, thunkAPI) => {
      try {
         // const token  = await thunkAPI.getState().auth.user.token;
         let itemId = itemData.productID;

         return await itemService.updateItem(itemId, itemData);
      } catch (error) {
         console.log(error);
         const message =
            (error.response &&
               error.response.data &&
               error.response.data.message) ||
            error.message ||
            error.toString();
         return thunkAPI.rejectWithValue(message);
      }
   }
);

export const itemSlice = createSlice({
   name: "item",
   initialState,
   reducers: {
      reset: (state) => initialState,
   },
   extraReducers: (builder) => {
      builder
         .addCase(createItem.pending, (state, action) => {
            state.isLoading = true;
         })
         .addCase(createItem.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.items.push(action.payload);
         })
         .addCase(createItem.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
         })
         .addCase(getItems.pending, (state, action) => {
            state.isLoading = true;
         })
         .addCase(getItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.items = action.payload;
         })
         .addCase(getItems.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
         })
         .addCase(deleteItem.pending, (state, action) => {
            state.isLoading = true;
         })
         .addCase(deleteItem.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.items = state.items.filter(
               (i) => i.productID !== action.payload.productID
            );
         })
         .addCase(deleteItem.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
         })
         .addCase(updateItem.pending, (state, action) => {
            state.isLoading = true;
         })
         .addCase(updateItem.fulfilled, (state, action) => {
            // console.log(current(state.items))
            // console.log(action.payload)
            state.isLoading = false;
            state.isSuccess = true;
            // state.items = state.items
            //   .filter(i => i._id !== action.payload._id)
            //   .push(action.payload);
            state.items = updateitem(current(state.items), action.payload);
            // console.log(current(state.items));
         })
         .addCase(updateItem.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
         });
   },
});

const updateitem = (items, item) => {
   let newitems = items.filter((i) => i._id !== item._id);

   newitems.push(item);
   return newitems;

   // return items.filter(i=> i.id !== item.id).push(item);
};

export const { reset } = itemSlice.actions;
export default itemSlice.reducer;
