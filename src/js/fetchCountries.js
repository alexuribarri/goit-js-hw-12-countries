import {printCountries} from './io';
import {alert, defaultModules}  from '../../node_modules/@pnotify/core/dist/PNotify';
const getCountries = (name) => {fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(r=>{return r.json()}).then(cObject=> {displaySelector(cObject)})}
const displaySelector=(array) => {
    if (array.length===1) {
        console.log('show card')
    }
    else if (array.length<=10) {
        printCountries(array)
    }
    else if (array.length>10) {
        alert({
            text: 'Notice me, senpai!'
          });
    }

}
export default getCountries;