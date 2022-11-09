import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react' ;
import "./planes.css" ;
import Popup from 'reactjs-popup';
import Addplanes from '../addPlanes/Addpointers';
import "./planes.css" ;
import { Button } from '@mui/material';

const Design = ({data}) => {
    const [designData, setDesignData] = useState([]) ;
    const [flag, setFlag] = useState(false) ;
    const  getDesignData = async() => {
        await fetch("https://actionplane1.herokuapp.com/api/design") 
        .then(res => res.json()) 
        .then(data => setDesignData(data))
        .catch((e) => console.log(e))
    }
    const handleSubClick = () => {
        setFlag(!flag)
    }

    useEffect(() => {
            getDesignData()
    },[])
  return (
    <div>
         <div className='subPlanes'>
            {
            designData.map((ele, index) => {
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

export default Design
