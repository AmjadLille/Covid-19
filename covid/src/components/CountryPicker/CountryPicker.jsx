import React, { useState, useEffect } from 'react'
import { FormControl, NativeSelect } from '@material-ui/core';
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api'


const CountryPicker = ({handleCountryChange}) => {
    const [fetchCountriesApi, setFetchCountriesApi] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setFetchCountriesApi(await fetchCountries())
        }
        fetchApi()
    }, [setFetchCountriesApi])
    

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchCountriesApi.map((country,i)=>
                <option key={i} value={country}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker