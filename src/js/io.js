import Debounce from 'lodash';
import cArray from './fetchCountries'
const inputEl = document.querySelector('input')
const listEl = document.querySelector('ul')
let name;



const onInput=()=>{
    name = `${inputEl.value}`;
   cArray(name);
   }

const printCountries = (countryList) => {
    const listHTML = [];
    countryList.map(country=> {
        listHTML.push(`<li>${country.name}</li>`)
    })
     listEl.innerHTML=listHTML.join('');


} 

inputEl.addEventListener('input', _.debounce(onInput, 500))




export {printCountries};