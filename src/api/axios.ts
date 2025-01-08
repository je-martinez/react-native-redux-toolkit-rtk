import axios from 'axios';

const recipesApi = axios.create({
  baseURL: 'https://dummyjson.com/recipes', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export { recipesApi };
