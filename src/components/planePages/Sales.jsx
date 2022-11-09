import { Button } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react' ;
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Addpointer from '../addPlanes/Addpointers';
import "./planes.css"

const Sales = ({data}) => {
    const [selesData, setSalesdata] = useState([]) ;
    const [flag, setFlag] = useState(false) ;
    const[pop, setPop] = useState(false)
    

    //fetch data //
      const getSalesData = async() => {
        await fetch("https://actionplane1.herokuapp.com/api/sales") 
        .then(res => res.json()) 
        .then(data => setSalesdata(data))
        .catch((e) => console.log(e))
      }
      /// setCondition //
      const handleSubClick = () => {
          setFlag(!flag) ;
      }

      //handlePop up//
      const handlePopUp = () => {
        setPop(true)
      }
     
    useEffect(() => {
        getSalesData()
    }, [])
  return (
    <div>
        <div className='subPlanes'>
            {
            selesData.map((ele, index) => {
                 return <div className='subCategoryPlanesDiv' key={index} onClick={handleSubClick}>
                            <b>{ele.plane}</b>
                      </div>
            })
                
            }
            {
                flag? data.map((ele, index) => {
                     return <>
                     <div key={index} className="eachParentDiv">
                          
                          <div key={index} className="childDiv">
                                 <p>{ele}</p>
                          </div>
                        
                     </div>
                     
                   
                     </>
                }) : ""
               
            }
            
            
        </div>
        
      
    </div>
  )
}

export default Sales
