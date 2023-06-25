import axios from 'axios';

const API_URL = '/';

// Create item
const createItem = async itemData => {
  // const config = {
  //    headers: {
  //       Authorization: `Bearer ${token}`,
  //    },
  // };
  const response = await axios.post(API_URL + 'products', itemData);

  return response.data;
};

// Get items
const getItems = async () => {
  // const config = {
  //    headers: {
  //       Authorization: `Bearer ${token}`,
  //    },
  // };
  const response = await axios.get(API_URL + 'allProducts');

  return response.data;
};

// Update items
const updateItem = async (itemId, itemData) => {
  // const config = {
  //    headers: {
  //       Authorization: `Bearer ${token}`,
  //    },
  // };
  console.log(itemData);
  const response = await axios.put(API_URL + 'products/' + itemId, itemData);
console.log(response.data);
  return response.data;
};

// Delete items
const deleteItem = async itemId => {
  // const config = {
  //    headers: {
  //       Authorization: `Bearer ${token}`,
  //    },
  // };
  const response = await axios.delete(API_URL + 'products' + itemId);

  return response.data;
};

const itemService = {
  createItem,
  updateItem,
  deleteItem,
  getItems,
};

export default itemService;
