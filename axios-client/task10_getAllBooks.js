const axios = require('axios');

const getAllBooks = async () => {
  try {
    const res = await axios.get('http://localhost:5000/books');
    console.log(res.data);
  } catch (err) {
    console.error(err.message);
  }
};

getAllBooks();
