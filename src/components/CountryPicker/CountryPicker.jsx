import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFecthedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFecthedCountries(await fetchCountries());
    }

    fetchAPI();
  }, [setFecthedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => (handleCountryChange(e.target.value))}>
        <option value="global">Global</option>
        {fetchedCountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;