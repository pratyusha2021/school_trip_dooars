import './components.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function Edit( { openedit, sl_no, mobile_no , email_id , handleeditClose, changeHandler} ) {

  return (
    <div>
      <Dialog open={openedit} onClose={handleeditClose}>
      <div  className='editpg'>

        <DialogTitle>EDIT</DialogTitle>
        <DialogContent className="editrow">

        <TextField
            autoFocus
            margin="dense"
            id="sl_no"
            label="sl_no "
            type="text"
            fullWidth
            variant="outlined"
            name='sl_no' 
            value={sl_no}
            onChange={changeHandler}

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
            onChange={changeHandler}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email_id"
            label="Email Id "
            type="text"
            fullWidth
            variant="outlined"
            name='email_id'
            value={email_id}
            onChange={changeHandler}
          />
        </DialogContent>

        <DialogActions >
          <Button variant="outlined" onClick={() => handleeditClose(true) }>EDIT</Button>
          <Button variant="outlined" onClick={() => handleeditClose(false) }>CANCEL</Button>
          
        </DialogActions>

        </div>
      </Dialog>
    </div>
  );
}




