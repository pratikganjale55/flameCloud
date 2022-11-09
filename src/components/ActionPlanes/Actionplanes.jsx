import React from 'react' ;
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/system';
import "./actionPlane.css" ;
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import { useState } from 'react';
import Button from '@mui/material/Button';
import Marketing from '../planePages/Marketing';
import Design from '../planePages/Design';
import Sales from '../planePages/Sales';
import { Box, Modal, TextField } from '@mui/material';



const Actionplanes = () => {
    const [marketing, setMarketing] = useState(false) ;
    const[design, setDesign] = useState(false) ;
    const [sales, setSales] = useState(false)
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const[plan, setPlanName] = useState("")
    const [category, setCategoryHandler] = useState("");
    const [marketngewData, setMarketData] = useState([])
    const[designnewData, setDesignData] =useState([])
    const[salesnewData, setSalesData] =useState([])

    const handleMarketing = () => {
          setMarketing(!marketing) ;
          setDesign(false)
          setSales(false)
    }
    const handleDesign = () => {
        setDesign(!design) 
        setMarketing(false) ;
        setSales(false)
    }
    const handleSales = () => {
        setSales(!sales) ;
        setMarketing(false) ;
        setDesign(false) ;
    }
   
    const handlePlanOpen = () => {
      setOpen(true);
    };
    const handlePlanClose = () => {
      setOpen(false);
    };
    const handlePlanClose1 = () => {
      setOpen(false);
    };

    // data add
    const marketData =(plan)=>{
      setMarketData([...marketngewData, plan])
    };
    const designData = (plan) => {
      setDesignData([...designnewData, plan])
    }
    const salesData = (plan) => {
      setSalesData([...salesnewData, plan])

    }
    const handleModalSecond =() => {
      if (category == "Marketing") {
        marketData(plan);
        
      } else if (category == "Design") {
        designData(plan);
        
      } else if (category == "Sales") {
        salesData(plan);
        
      } else {
        alert("Please Choose Department");
      }
      console.log(designnewData)
    }
  return (
    <div>
        
      <Paper  elevation={3} className="paperConatiner">
                <div className='topFlex'>
                    <div>
                     <h3>Action Planes</h3>
                    </div>
                    <div className='buttonAction'>
                    <Button  variant="outlined">
                      <GroupRoundedIcon /> Manage Access
                    </Button>
          {/* // manage access */}
          
          
                       <div>
                       <Button onClick={handlePlanOpen} variant="contained">
                        <AddBoxRoundedIcon variant="contained" /> New Plan
                      </Button>
                       </div>
             {/* new plan        */}
             
             <Modal
              open={open}
              onClose={handlePlanClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{  width: 400 }} className="planeBoxStyle">
                <h2 id="parent-modal-title">Plan Name</h2>
                <p id="parent-modal-description">
                  Lohic molestiae consectetur nulla deserunt ducimus cum dignissimos fuga nobis quisquam quaerat dolorem tempore laboriosam, recusandae ipsa aut?
                </p>
                <TextField
                  onChange={(e) => setPlanName(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name "
                  name="Name"
                  autoComplete="Name"
                  autoFocus
                  placeholder="Name Your Plan"
                />
                <br />
                <br />
                <select
                  onChange={(e) => setCategoryHandler(e.target.value)}
                  style={{
                    border: "1px solid #e6f1f9",
                    width: "60%",
                    height: "45px",
                    fontStyle: "normal",
                    fontSize: "18px",
                  }}
                >
                  <option value="">Department</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Design">Design</option>
                  <option value="Sales">Sales</option>
                </select>
                <br />
                <br />
                <Button onClick={() => handlePlanClose1()} color="error">
                  Cancel
                </Button>{" "}
                <Button
                  variant="contained"
                  disableElevation
                  onClick={() => handleModalSecond()}
                >
                  Create
                </Button>
              </Box>
            </Modal>
     

                    </div>
                    
                </div>
              
              <div className='subCategory' onClick={handleMarketing}><b>Marketing</b></div>
                   <div>
                   {
                       marketing? <Marketing data={marketngewData}/>: ""
                  }
                   </div>
              <div className='subCategory' onClick={handleDesign}><b>Design</b></div>
                <div>
                {
                    design? <Design data={designnewData}/> : ""
                }
                </div>
              <div className='subCategory' onClick={handleSales}><b>Sales</b></div>
              
                <div>
                    {
                        sales? <Sales data={salesnewData}/> : ""
                    }
                 </div>
                
              
       
        
            
            
      </Paper>
    </div>
  )
}

export default Actionplanes
