import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const response = await axios.get(url);

    //return the response instead of console.log so I can use it in App.js
    return response;
  } catch (error) {

  }
}