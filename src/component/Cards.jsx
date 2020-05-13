import React from 'react';
import { Table } from 'reactstrap';
import CovidInfos from './CovidInfos.js'

const Cards = (props) => {
  if(!props){
    return 'Loading'
  }

  return (
      <div>
            <Table hover responsive>
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
                                           code={value.code}
                                           name={value.name}
                                           totalCases={value.latest_data.confirmed}
                                           totalRecovered={value.latest_data.recovered}
                                           totalDeaths={value.latest_data.deaths}
                                           newCases={value.today.confirmed}
                                           newDeath={value.today.deaths}/>})
                  }
              </tbody>
            </Table>
      </div>
    )
}

export default Cards;
