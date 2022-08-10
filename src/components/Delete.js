import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Delete( { opendelete ,sl_no,deleteHandler,handledeleteClose, handledeleteOpen}) {


  return (
    <div>
      <Dialog open={opendelete} onClose={handledeleteClose}>
      <DialogTitle>DELETE</DialogTitle>
        <DialogTitle>You want to delete this row?</DialogTitle>

        <DialogActions>
          <Button onClick={() => handledeleteClose(false) }>Cancel</Button>
          <Button onClick={() => handledeleteClose(true)}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
