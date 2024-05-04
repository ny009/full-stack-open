import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import FilteredCountries from './components/FilteredCountries'

const countriesUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

function App() {
  const [inputVal, setInputVal] = useState('')
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {
    axios.get(countriesUrl)
    .then(res => 
      setAllCountries(
        // Map to create a new JSON array which will be stored in state with only 
        // the details we need to prevent storing additional attributes to optimize space
        res.data.map(country => (
          {
            name: country.name.common, 
            area: country.area,
            capital: country.capital,
            flag: 
              {
                img: country.flags.png, 
                alt: country.flags.alt 
                  ? country.flags.alt 
                  : `${country.name.common}'s flag`
              }, 
            languages: country.languages,
          }
        ))
      )
    )
  }, [])

  const handleSearchChange = ({target: {value}}) => {
    setInputVal(value)
    const filteredCountries = allCountries.filter(country => country.name.toUpperCase().includes(value.toUpperCase()))
    setCountries(
      filteredCountries.length > 0 && filteredCountries.length <= 10 
        ? filteredCountries 
        : []
      )
  }

  return (
    <>
      <div> 
        find countries 
        <input onChange={handleSearchChange} value={inputVal}/> 
      </div>
      <FilteredCountries countries={countries}/>
    </>
  )
}

export default App
