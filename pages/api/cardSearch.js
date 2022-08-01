// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios');
import { API_KEY } from '../../secrets';

const options = {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
};

const handleCardSearch = async (req, res) => {
  const searchResults = await axios.request(options);
  return searchResults;
};

const handler = async (req, res) => {
  const searchResults = await handleCardSearch(req, res);
  console.log(searchResults.data);
  res.status(200).json({ name: 'John Doe' })
}

export default handler;