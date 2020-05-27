import React from 'react';
import CovidInfos from './CovidInfos.js'
import Spinner from './Spinner'

const Cards = (props) => {


  if(Object.keys(props.data).length === 0){
    return <Spinner />
  }

  /*return (
    <MaterialTable
      title="Covid-19 Status Updates"
      columns={[
        { title: '',
          field: 'countryInfo.flag',
          render: rowData => <img src={rowData.countryInfo.flag} style={{width: 40, borderRadius: '10%'}}/>
        },
        { title: 'Country', field: 'country' },
        { title: 'Total Cases', field: 'cases' },
        { title: 'Total Deaths', field: 'deaths' },
        { title: 'Total Recoverd', field: 'recovered' },
        { title: 'Today Cases', field: 'todayCases' },
        { title: 'Today Deaths', field: 'todayDeaths' },
      ]}
      data={props.data}
      options={{
        search: true
      }}
    />
  )*/

  return (
      <div className="statusContainer">
            <table className="statusTable" role="table">
              <thead role="rowgroup">
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
