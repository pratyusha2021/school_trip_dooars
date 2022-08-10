import './components.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function Add( {open, name , classes, roll_no, mobile_no, email_id, submitHandler, studentchangeHandler, handleClose}) {


  return (
    <div >
      
      <Dialog open={open} onClose={handleClose}>
      <div className='addpg'>
        <DialogTitle>Register Your Name !</DialogTitle>

        <DialogContent className="addfirstrow">
            
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            name='name'
            value={name}
            onChange={studentchangeHandler}
          />
          <TextField
            autoFocus
            margin="dense"
            id="classes"
            label="Class"
            type="text"
            fullWidth
            variant="outlined"
            name='classes' 
            value={classes}
            onChange={studentchangeHandler}
          />    
          <TextField
            autoFocus
            margin="dense"
            id="roll_no"
            label="Roll Number"
            type="text"
            fullWidth
            variant="outlined"
            name='roll_no' 
            value={roll_no}
            onChange={studentchangeHandler}
          />
          <TextField
            autoFocus
            margin="dense"
            id="mobile_no"
            label="Mobile Number"
            type="text"
            fullWidth
            variant="outlined"
            name='mobile_no' 
            value={mobile_no}
            onChange={studentchangeHandler}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email_id"
            label="Email Id"
            type="text"
            fullWidth
            variant="outlined"
            name='email_id' 
            value={email_id}
            onChange={studentchangeHandler}
          />

        </DialogContent>


        <DialogActions>
          
          <Button variant="outlined" onClick={() => submitHandler(true) }>ADD</Button>
          <Button variant="outlined" onClick={ handleClose }>CANCEL</Button>
        </DialogActions>

        </div>
      </Dialog>
    </div>
  );
}
