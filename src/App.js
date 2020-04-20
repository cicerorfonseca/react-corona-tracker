import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chard from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

// Instead of importing each file in one line it is possible to import using the index.js inside components folder as follows:

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api/index';

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
    console.log(country);
    //fetch the data

    //set the state
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    )
  }
}

export default App;