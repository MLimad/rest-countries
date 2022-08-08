import React from 'react'
import Navbar from './Navbar'
import { useNavigate,useLocation} from 'react-router-dom'



function CountryDetails() {
  const location = useLocation()
  const { name,flags,population,region,capital,subregion,domain,currencies,languages,official,borders} = location.state

  
  const navigate = useNavigate();

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }
  
  return (
    <main>
       <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-5">
                <button onClick={()=>navigate(-1)}>
                  <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                  back
                </button>
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
              <div className="img-flags">
                  <img src= {flags} alt={name}  />
              </div>
          </div>
          <div className=" c-infos col-md-6 p-5">
            <h3>{name}</h3>
            <div className="data-info">
              <ul>
                <li><b>Official Name</b>: {official}</li>
                <li><b>Population</b>: {formatNumber(population)}</li>
                <li><b>Region</b>: {region}</li>
                <li><b>Sub Region</b>: {subregion}</li>
                <li><b>Capital</b>: {capital}</li>
              </ul>
              <ul>
                <li><b>Top Level Domain</b>: {domain[0]}</li>
                <li><b>Currency</b>: {Object.keys(currencies)[0]}</li>
                <li><b>Languages</b>: {Object.values(languages).join(",")}</li>
              </ul>
            </div>
            <div className="borders d-flex flex-start align-items-center mt-5">
                <h6 className='fw-bold mx-1 '>Borders Countries  </h6>
                <div>
                {
                 
                 borders ? 
                      borders.map(item=>(
                        <button className='m-1'>{item}</button>
                    ))
                 : <span>Sorry Unkown Borders</span>
                 
                }
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CountryDetails