import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(
        response => {setCountries(response.data)}
      )
  },[])

  const filteredCountryList = () => {
    return countries.filter( i => 
      i.name.substring(0, countryFilter.length).toLowerCase() === countryFilter.toLowerCase()
    )
  }

  return (
    <div>
      <CountryFilter 
        countryFilter={countryFilter}
        setCountryFilter={setCountryFilter}
      />
      <Results 
        countryList={filteredCountryList()}
        setCountryFilter={setCountryFilter}  
      />
    </div>
  )
}

const CountryFilter = ({countryFilter, setCountryFilter}) => {
  const countryFilterChange = (event) => {
    setCountryFilter(event.target.value)
  }
  return (
    <div>
      <h2>Find country</h2>
      <div><input value={countryFilter} onChange={countryFilterChange}/></div>
    </div>
  )
}

const Results = ({countryList, setCountryFilter}) => {

  const resultCases = () => {
    if (countryList.length > 10) {
      return <p>Too many matches! Specify the search filter.</p>  

    } else if (countryList.length > 1) {
      return <ManyCountries countryList={countryList} setCountryFilter={setCountryFilter}/>

    } else if (countryList.length === 1) {
      return <SingleCountry countryList={countryList}/>

    } else {
      return <p>No matches!</p>
    }
  }

  return (
    <div>
      {resultCases()}  
    </div>
  )
}

const ManyCountries = ({countryList, setCountryFilter}) => {
  const countryRows = () => {
    return countryList.map(
      i => <li key={i.numericCode}>
        {i.name} <SelectCountry country={i} setCountryFilter={setCountryFilter}/>
      </li>
    )  
  }

  return (
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}> 
        {countryRows()}
      </ul>
  )
}

const SelectCountry = ({country, setCountryFilter}) => {
  return (
    <button onClick={() => setCountryFilter(country.name)}>
      Show
    </button>
  )
}

const SingleCountry = ({countryList}) => {
  const [temp, setTemp] = useState('')
  const [windSpeed, setWindSpeed] = useState('')
  const [windDir, setWindDir] = useState('')
  const [weatherImg, setWeatherImg] = useState('')

  const params = {
    access_key: '4380e2aece353d899f17d5739514614a',
    query: countryList[0].capital
  }

  useEffect(() => {
    axios
      .get('http://api.weatherstack.com/current', {params})
      .then(
        response => {
          setTemp(response.data.current.temperature)
          setWindSpeed(response.data.current.wind_speed)
          setWindDir(response.data.current.wind_dir)
          setWeatherImg(response.data.current.weather_icons[0])
        }
      )
  },[])

  const listLanguages = () => {
    return countryList[0].languages.map(
      i => <li key={i.iso639_2}> {i.name} </li>
    )
  }

  return (
    <div>
      <h2>{countryList[0].name}</h2>
      <p>
        <b>Capital:</b> {countryList[0].capital}<br/>
        <b>Population:</b> {countryList[0].population}
      </p>

      <h4>Languages</h4>
      <ul>
        {listLanguages()}  
      </ul>

      <img src={countryList[0].flag} alt="Country flag" height="15%" width="15%"></img>

      <h2>Weather in {countryList[0].capital}</h2>
      <p>
        <b>Temperature:</b> {temp} °C<br/>
        <b>Wind speed:</b> {windSpeed} km/h <br/>
        <b>Wind direction:</b> {windDir}
      </p>

      <img src={weatherImg} alt="Visualizing weather graph" height="20%" width="20%"></img>
    </div>
  )
}

export default App;