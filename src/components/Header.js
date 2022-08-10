import React from 'react';
import './components.css';
import Add from './Add.js';
import Button from '@mui/material/Button';
import { getData, addData } from './data';
import { useState, useEffect } from "react";
import Slider from "./Slider.js";
import DataTable from "./DataTable";
import Footer from "./Footer.js";
import { BrowserRouter} from "react-router-dom";
import {HashLink} from "react-router-hash-link"

export default function Header() {

  const [data, setData] = useState([]);
  const [students, setStudents] = useState({ sl_no: '', name: '', classes: '', roll_no: '', mobile_no: '', email_id: ''});
  const { sl_no, name, classes, roll_no, mobile_no, email_id } = students;

  const [open, setOpen] = useState(false);

  const studentchangeHandler = (e) => {
    const { name, value } = e.target;
    setStudents({ ...students, [name]: value });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const submitHandler = async (e) => {
      let response = await addData( students );
      if(response){
        setStudents({sl_no:'' , name: '', classes: '', roll_no: '',mobile_no:'' ,email_id: ''});
        window.location.reload(false);
    }
  }


  useEffect(async () => {
    setData(await getData())
  }, []);


  return (
    
  <div class="navbar" >
      <div class="logo"><h3>SCHOOL TRIP IN DOOARS!</h3></div>
      
      <BrowserRouter>
          
            <div class="links">
              <HashLink to='#slider' smooth>Home</HashLink>
              <HashLink to='#plan' smooth>Planning</HashLink>
              <HashLink to='#datatable' smooth>Students_List</HashLink>
              <HashLink to='#contact' smooth>Contact</HashLink>
            </div>
  
      </BrowserRouter>
    
        <Add
          open={open}
          name={name}
          classes={classes}
          roll_no={roll_no}
          mobile_no={mobile_no}
          email_id={email_id}
          studentchangeHandler={studentchangeHandler}
          submitHandler={submitHandler}
          handleClose={handleClose}
        />
        <Button class="registerbtn" variant="outlined" onClick={ handleClickOpen }>Register Now !!</Button>

      </div>
  )
}


/*
      <Routes>
        <Route exact path='/Slider' element={<Slider/>}/>
        <Route exact path='/' />
        <Route exact path='/list' element={<DataTable/>}/>
        <Route exact path='/Footer' element={<Footer/>}/>

      </Routes>
*/
