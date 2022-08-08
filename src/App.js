
import {Routes,Route} from "react-router-dom"
import CountryDetails from "./components/CountryDetails";
import Theme from "./components/Theme";
import Home from "./components/Home";
import {useEffect, useState} from "react";



function App() {
  
  const [theme,setTheme] = useState("light")


  useEffect(()=>{
    
    
      const keyTheme = localStorage.getItem("theme")
      if (keyTheme) {
        setTheme(keyTheme)
      }
   
    
  },[])

  const themeToggler = () =>{
     
      if (theme === "light" ) {
        setTheme("dark")
        localStorage.setItem("theme","dark")
      }else{
        setTheme("light")
        localStorage.setItem("theme","light")
      }
  }


  return (
    <div className={theme} >
    <Theme themeToggler={themeToggler} theme={theme}/>
    <Routes>

            <Route path="/" element={<Home />} />
            <Route path="country-details">
              <Route path=':name' element={<CountryDetails />} />
            </Route>
      </Routes>
     
    </div>
  );
}

export default App;
