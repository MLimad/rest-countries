import React from 'react'

function Options({selectValue}) {

    const list = ["africa","america","asia","europe","oceania"]

  return (
    <ul className="options">
      {
        list.map((item,index)=>(
          <li data-value={item} onClick={()=>selectValue(index,list)}>{item}</li>

        ))
      }
    </ul>
  )
}

export default Options