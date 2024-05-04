import CountriesList from "./CountriesList"
import CountrySummary from "./CountrySummary"

const filteredCountries = ({countries}) => (
    <>
      {countries && countries.length === 1 
        ? <CountrySummary country={countries[0]}/> 
        : <CountriesList countries={countries}/>
      }
    </>
  )

export default filteredCountries