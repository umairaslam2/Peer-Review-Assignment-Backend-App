const axios = require('axios');

const searchByAuthor = async (author) => {
  try {
    const encoded = encodeURIComponent(author);
    const res = await axios.get(`http://localhost:5000/books/author/${encoded}`);
    console.log(res.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};

searchByAuthor('Robert C. Martin');
