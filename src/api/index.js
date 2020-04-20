import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    //destructuring data from response to get only the data I need
    //destructuring each option from data so I don't have to repeat data.confirmed, data.recovered
    //when I declare the filteredData object
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    const filteredData = {
      //if the key has the same name as its value
      //react assumes that they are the same, so I don't have to declare:
      //confirmed: confirmed, 
      //recovered: recovered
      //Instead I can use just the key:
      confirmed,
      recovered,
      deaths,
      lastUpdate
    }

    //return the response instead of console.log so I can use it in App.js
    return filteredData;

    //instead of returning the const I could have returned only:
    // return { confirmed, recovered, deaths, lastupdate };
    //and there's no need to declare the const filteredData

  } catch (error) {
    console.log(error);
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const filteredData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }))

    return filteredData;

  } catch (error) {

  }
}

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
}