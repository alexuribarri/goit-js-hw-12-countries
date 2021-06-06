let cName = 'united';
fetch(`https://restcountries.eu/rest/v2/name/${cName}`)
  .then(r => r.json)
  .then(r => console.dir(r));
