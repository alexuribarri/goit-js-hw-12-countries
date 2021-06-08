import Debounce from 'lodash';
import cArray from './fetchCountries'
const inputEl = document.querySelector('input')
const listEl = document.querySelector('ul')
const countryCard=document.querySelector('.country')
let name;



const onInput=()=>{
    name = `${inputEl.value}`;
   cArray(name);
   }

//clear the field

const clearDisplay = () => {
    listEl.innerHTML='';
    countryCard.innerHTML='';
}



//print list of countries
const printCountries = (countryList) => {
    const listHTML = [];
    countryList.map(country=> {
        listHTML.push(`<li>${country.name}</li>`)
    })
     listEl.innerHTML=listHTML.join('');


} 


//print country card

const printCountryCard = (countryName) => {
    console.log(countryName)

    const langList = [];
    countryName[0].languages.map(language=> {
        langList.push(`<li>${language.name}</li>`)
    })
    countryCard.innerHTML=`
    <h1>${countryName[0].name}</h1>    
            <div class='country_card'>
                <div class="left">
                    <ul>
                        <li class="details"><p style="font-weight: 700;">Capital:&nbsp</p><p>${countryName[0].capital}</p></li>
                        <li class="details"><p style="font-weight: 700;">Population:&nbsp</p><p>${countryName[0].population}</p></li>
                        <li class='details_last'><p style="font-weight: 700;">Languages:</p>
                        <ul class="languages">
                       ${langList.join('')}
                        </ul>
                    
                    </li>
                    </ul>
                    
                    </div>
                    <div class="right">
                    <img src="${countryName[0].flag}" alt="${countryName[0].name}" width="300px">
                </div>
            </div>
    `
}

inputEl.addEventListener('input', _.debounce(onInput, 500))




export {printCountries, clearDisplay, printCountryCard};