const axios = require('axios');

const isbn = '9780132350884';

axios.get(`http://localhost:5000/books/${isbn}`)
  .then(res => console.log(res.data))
  .catch(err => console.error(err.response?.data || err.message));
