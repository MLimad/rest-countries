import React from 'react'
import { useEffect, useState } from "react";
import Countries from "./Countries";
import Navbar from "./Navbar";
import UserAction from "./UserAction";
import axios from "axios";




function Home() {



  const [filterList,setFilerList] = useState(false);
  const [filterValue,setFilterValue] = useState("asia");
  const [data,setData] =  useState([])
  const [search,setSearch] = useState("kuwait")


 

  const bindSearch = (e) =>{
    setSearch(e.target.value)
  }

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }


  const isFilter = () => {
    setFilerList(!filterList)
  }


  const selectValue = (index,list) =>{
    setFilterValue(list[index]);
  }

  useEffect(()=>{

    const url = 'https://restcountries.com/v3.1/all';
    axios.get(url).then(res=>{
        setData(res.data)
        if(data.length <= 0 ){
          console.log('data not loaded yet');
        }
      }).catch(error=>console.log(error))


  },[])

  useEffect(()=>{

    const url = `https://restcountries.com/v3.1/name/${search}`;
    axios.get(url).then(res=>{
        setData(res.data)
        if(data.length <= 0 ){
          console.log('data not loaded yet');
        }
      }).catch(error=>console.log(error))


  },[search])

  useEffect(()=>{

      const url = `https://restcountries.com/v3.1/region/${filterValue}`;

    axios.get(url).then(res=>{
        setData(res.data)
        if(data.length <= 0 ){
          console.log('data not loaded yet');
        }
      }).catch(error=>console.log(error))


  },[filterValue])


  

 
  return (
    <div>
      
     <Navbar />
     <UserAction 
        filterList={filterList} 
        isFilter={isFilter}
        selectValue={selectValue}
        bindSearch={bindSearch}
      />
     <Countries 
        data={data} 
        formatNumber={formatNumber} 
       />
    </div>
  )
}

export default Home