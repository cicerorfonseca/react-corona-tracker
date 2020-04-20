import React from 'react';


// import Cards from './components/Cards/Cards';
// import Chard from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';
// Instead of importing each file in one line it is possible to import using the index.js inside components folder as follows:

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData, fetchCountries } from './api/index';

import coronaImg from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImg} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;