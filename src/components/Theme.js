import React from 'react'

function Theme({themeToggler,theme}) {

  return (
    <div id='darkToggler'>
        <button  onClick={()=>themeToggler()}>
                {theme === "dark" ? <i class="fa fa-sun-o" aria-hidden="true"></i> :  <i className="fa fa-moon-o" aria-hidden="true"></i> }
               
                {theme === "dark" ? "light mode" : "dark mode" }
            </button>
    </div>
  )
}

export default Theme