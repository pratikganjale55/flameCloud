import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react' ;
import "./planes.css" ;
import Popup from 'reactjs-popup';
import Addplanes from '../addPlanes/Addpointers';
import { Button } from '@mui/material';

const Marketing = ({data}) => {
    const [marketingData, setMarketingData] = useState([]) ;
    const [flag, setFlag] = useState(false) ;

    const getMarketingData = async() => {
        
        await fetch("https://actionplane1.herokuapp.com/api/marketing") 
        .then(res => res.json()) 
        .then(data => setMarketingData(data))
        .catch((e) => console.log(e))
    }
    const handleSubClick = () => {
        setFlag(!flag)
    }

   useEffect(() => {
    getMarketingData()
   }, [])
             
  return (
    <div>
        <div className='subPlanes'>
            {
            marketingData.map((ele, index) => {
                 return <div className='subCategoryPlanesDiv'  key={index} onClick={handleSubClick}>
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

export default Marketing
