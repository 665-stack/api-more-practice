const loadSportCountries = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_countries.php')
        .then(res => res.json())
        .then(data => displayCountries(data.countries))
}
loadSportCountries()
const displayCountries = countries => {
    // console.log('countries -- ', countries)
    const countriesDiv = document.getElementById('countries');
    for (const country of countries) {
        console.log('dlf', country)
    }
}