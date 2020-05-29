import React from 'react';
import CovidInfos from './CovidInfos.js'
import Spinner from './Spinner'

const Cards = (props) => {



  if(Object.keys(props.data).length === 0){
    return <Spinner />
  }

  return (
      <div className="statusContainer">
            <table className="statusTable" role="table">
              <thead role="rowgroup" className="sticky">
                <tr role="row">
                    <th role = "columnheader">Country</th>
                    <th role = "columnheader">Total Cases</th>
                    <th role = "columnheader">Total Deaths</th>
                    <th role = "columnheader">Total Recovered</th>
                    <th role = "columnheader">Today Cases</th>
                    <th role = "columnheader">Today Deaths</th>
                </tr>
              </thead>

              <tbody role="rowgroup">
                  {
                    Object.entries(props.data).map(([key, value]) => {
                        return <CovidInfos key={key}
                                           flag={value.countryInfo.flag}
                                           code={value.countryInfo.iso2}
                                           name={value.country}
                                           cases={value.cases}
                                           deaths={value.deaths}
                                           recovered={value.recovered}
                                           todayCases={value.todayCases}
                                           todayDeaths={value.todayDeaths}/>})
                  }
              </tbody>
            </table>
      </div>
    )
}

export default Cards;
