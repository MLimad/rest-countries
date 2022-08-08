import React from 'react'
import Options from './Options'

function UserAction({isFilter,filterList,selectValue,bindSearch}) {
  return (
        
        <div id="user-actions">
                <div className='container'>

            <div className="row">

                <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                        <span className="icon-search"><i className="fa fa-search"></i></span>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Search for a country ..." 
                            onChange={(e)=>bindSearch(e)}
                        />
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className="select-box" onClick={()=>isFilter()}>
                        <div className="input">
                            <p>Filter by region</p>
                            <i className={filterList ? "fa fa-chevron-up" : "fa fa-chevron-down" }></i>
                        </div>
                        {filterList &&  <Options selectValue={selectValue} /> }
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserAction