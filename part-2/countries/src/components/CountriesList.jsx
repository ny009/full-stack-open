import { useState } from "react"
import CountrySummary from "./CountrySummary"

const HandleListDisplay = ({country}) => {
  const [showSummary, setShowSumamry] = useState(false)
  return (
    <>
      {showSummary 
        ? (
          <> 
            <CountrySummary country={country}/>
            <button onClick={() => setShowSumamry(false)}> hide </button>
          </>
          )
        : (
          <div>
            {country.name}
            <button onClick={() => setShowSumamry(true)}> show </button>
          </div>
          )
      }
    </>
  )
}

const CountriesList = ({countries}) => (
    <>
      {countries.map(country => 
        <HandleListDisplay key={country.name} country={country}/>
      )}
    </>
  )

export default CountriesList