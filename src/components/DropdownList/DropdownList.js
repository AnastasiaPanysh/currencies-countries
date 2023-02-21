import { useState, useEffect } from 'react'
import style from './DropdownList.module.css'
import axios from 'axios';
import CountryItem from './CountryItem'


function DropdownList() {

  const [countries, setCountries] = useState([])
  const [activeCountry, setActiveCountry] = useState('')

  async function request() {
    const response = await axios.get('https://www.nbrb.by/API/ExRates/Currencies')
    setCountries(response.data)
    console.log(response.data);
  }

  function setActive(event) {
    setActiveCountry(event.target.textContent)
  }

  useEffect(() => {
    request()
  })

  return (
    <>
      <div className={style['listbox']}>
        <div className={style['country-name']}>{activeCountry}</div>
        <div className={style['select-occupation']}>
          <p>Select Occupation</p>
          <div></div>
        </div>
        <div onClick={setActive} className={style['wrapper']}>
          {countries.map((el) => <CountryItem key={el.Cur_ID} title={el.Cur_Name} />)}
        </div>
      </div>
    </>
  );
}


export default DropdownList;