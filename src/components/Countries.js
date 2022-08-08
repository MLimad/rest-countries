import React from 'react'
import Country from './Country'

function Countries({data,formatNumber}) {
  return (
    <main>
        <div className="container">
            <div className="row">
               {
                data.map((item,index)=>(
                   
                    <Country 
                        key={index}
                        name={item.name.common}
                        official={item.name.official}
                        population={item.population}
                        region={item.region}
                        flags={item.flags.svg}
                        capital={item.capital}
                        formatNumber={formatNumber}
                        subregion={item.subregion}
                        domain={item.tld}
                        currencies={item.currencies}
                        languages={item.languages}
                        borders={item.borders}
                        

                     />
                  
                ))
               }
                
            </div>
        </div>
    </main>
  )
}

export default Countries