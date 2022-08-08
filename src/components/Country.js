import React from 'react'
import { Link } from 'react-router-dom'



function Country({name,official,population,region,flags,capital,formatNumber,subregion,domain,currencies,languages,borders,}) {
  return (
    <div className="col-md-3">

            <Link style={{textDecoration: 'none'}} to={`/country-details/${name}`} state={{ name: name ,flags:flags, population:population, region:region, capital:capital, subregion:subregion,domain:domain,currencies:currencies,languages:languages,official:official,borders:borders}}  >
            
              <div className="country">
              <div className="flag-country">
                  <img src={flags} alt={name} />
              </div>
              <div className="info-country">
                  <h5 >{name}</h5>
                  <ul>
                      <li><b>population</b> {formatNumber(population)}</li>
                      <li><b>Region</b> {region}</li>
                      <li><b>capital</b> {capital}</li>
                  </ul>
              </div>
              </div>

         </Link>

    </div>
  )
}

export default Country

