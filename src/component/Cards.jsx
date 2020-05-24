import React from 'react';
import { Table } from 'reactstrap';
import CovidInfos from './CovidInfos.js'

const Cards = (props) => {
  if(!props){
    return 'Loading'
  }

  return (
      <div>
            <Table responsive>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Total Cases</th>
                  <th>Total Recovered</th>
                  <th>Total Deaths</th>
                  <th>New Cases</th>
                  <th>New Deaths</th>
                </tr>
              </thead>
              <tbody>
                  {
                    Object.entries(props.data).map(([key, value]) => {
                        return <CovidInfos key={key}
                                           code={value.countryInfo.iso2}
                                           name={value.country}
                                           cases={value.cases}
                                           deaths={value.deaths}
                                           recovered={value.recovered}
                                           todayCases={value.todayCases}
                                           todayDeaths={value.todayDeaths}/>})
                  }
              </tbody>
            </Table>
      </div>
    )
}

export default Cards;
