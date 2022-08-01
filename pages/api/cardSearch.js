// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
  headers: {
    'X-RapidAPI-Key': '67b783470fmsh090def8544d94d3p19b4dajsn7d8decdda89c',
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