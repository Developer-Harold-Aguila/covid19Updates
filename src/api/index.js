import axios from 'axios'

const url = 'https://corona-api.com/countries';

export const fetchData = async () => {
  try{
    const data = await axios.get(url);
    return data.data.data;
  }catch (error){

  }


}
