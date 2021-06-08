import {printCountries, clearDisplay, printCountryCard} from './io';
import {error, notice}  from '../../node_modules/@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/BrightTheme.css';
const getCountries = (name) => {fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(r=>{return r.json()}).catch(r=>{console.log(r)}).then(cObject=> {displaySelector(cObject)})}

//const getCountries = (name) => {fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(r=>{return r.json()}).then(cObject=> {displaySelector(cObject)})}


const displaySelector=(array) => {
    if (array.length===1) {
        clearDisplay()
        printCountryCard(array)
    }
    else if (array.length<=10) {
        clearDisplay()
        printCountries(array)
    }
    else if (array.length>10) {
        clearDisplay()

        notice({
            title: 'Attention',
            text: 'Toom many results, please narrow your search!'
          })}

    else if (array.length<1) {
            clearDisplay()
    
            error({
                title: 'Attention',
                text: 'eewfew!'
              })};
  
    
}
export default getCountries;