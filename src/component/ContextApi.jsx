import { data } from 'autoprefixer';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const apiData= createContext();   //react hook to create cobntext API


const ContextApi = ({children}) => {   //children for any data passing
    
    let [info, setInfo] = useState([])  //react e data newar str
    
    useEffect(() => {                                    //structure of useEffect
      
        axios.get('https://dummyjson.com/products').then((response)=> setInfo(response.data.products))
              
        

    }, [])
  
  
  return (
   <>
   <apiData.Provider value={info}>{children}</apiData.Provider>
   </>
  )
}

export {apiData, ContextApi}  //sending more values. 
