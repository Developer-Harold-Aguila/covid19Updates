import React from 'react';

const CovidInfos = (props) => {
  console.log(props.key);
  return(
      <tr>
        <th scope="row" className="text-primary"><img alt="flags" src={`https://www.countryflags.io/${props.code}/flat/64.png`}/>{props.name}</th>
        <td>{props.totalCases}</td>
        <td>{props.totalRecovered}</td>
        <td>{props.totalDeaths}</td>
        <td>{props.newCases}</td>
        <td>{props.newDeath}</td>
      </tr>
  )
}

export default CovidInfos;
