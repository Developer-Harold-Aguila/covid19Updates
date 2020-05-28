import React from 'react';

const CovidInfos = (props) => {
  var ts = new Date(props.updated);
  console.log(ts.toLocaleString());


  return(
      <tr role="row">
        <td role="cell"><img className="countryFlag" alt="flags" src={props.flag}/>{props.name}</td>
        <td role="cell">{props.cases.toLocaleString()}</td>
        <td role="cell">{props.recovered.toLocaleString()}</td>
        <td role="cell">{props.deaths.toLocaleString()}</td>
        <td role="cell">{props.todayCases.toLocaleString()}</td>
        <td role="cell">{props.todayDeaths.toLocaleString()}</td>
      </tr>
  )
}

export default CovidInfos;
