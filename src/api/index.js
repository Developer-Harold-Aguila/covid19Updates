import axios from 'axios'

//const url = 'https://corona-api.com/countries';
const url = 'https://disease.sh/v2/countries?yesterday=false&sort=cases'
//const url = 'https://covid19.mathdro.id/api/'
export const fetchData = async () => {
  try{
    const {data}  = await axios.get(url);

    //convert to array, map, and then fromEntries gives back the object



    /*const modifiedData = Object.entries(data).map(([key, value]) => {
                           active: value.active
                           cases: value.cases
                           continent: value.continent
                           country: value.country
                           flag: value.countryInfo.flag
                           critical: value.critical})*/

    return data;
  }catch (error){

  }


}
