const keyQuery = `?apikey=${process.env.REACT_APP_API_KEY}`; // Key for api
const autoCompleteUrl = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete${keyQuery}&q=`; // City info endpoint
const currentConditionsUrl = `http://dataservice.accuweather.com/currentconditions/v1/`; // City condition endpoint
const foreCastUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/`; // City forecast endpoint
export { keyQuery, autoCompleteUrl, currentConditionsUrl, foreCastUrl };
