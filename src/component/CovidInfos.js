import React from 'react';

const CovidInfos = (props) => {
  return(
      <tr>
        <th scope="row" className="text-primary"><img alt="flags" src={`https://www.countryflags.io/${props.code}/flat/64.png`}/>{props.name}</th>
        <td>{props.cases}</td>
        <td>{props.recovered}</td>
        <td>{props.deaths}</td>
        <td>{props.todayCases}</td>
        <td>{props.todayDeaths}</td>
      </tr>
  )
}

export default CovidInfos;
