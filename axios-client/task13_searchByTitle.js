const axios = require('axios');

const searchByTitle = async (title) => {
  try {
    const encoded = encodeURIComponent(title);
    const res = await axios.get(`http://localhost:5000/books/title/${encoded}`);
    console.log(res.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};

searchByTitle('Clean Code');
