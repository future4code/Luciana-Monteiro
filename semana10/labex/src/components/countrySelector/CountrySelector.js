import { useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CountrySelector({handleCountry}) {
  const options = useMemo(() => countryList().getData(), [])
  return <Select options={options} onChange={handleCountry} />
}

export default CountrySelector 