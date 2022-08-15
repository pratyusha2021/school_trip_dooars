import * as React from "react";
import { useState, useEffect } from "react";
import './components.css';
import Edit from './Edit.js';
import Delete from "./Delete";
import Button from '@mui/material/Button';
import { getData,updateData, deleteData} from './data';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import TablePagination from '@mui/material/TablePagination';
import { green } from "@mui/material/colors";


export default function DataTable() {
  
  const [studata, setStuData] = useState([]);
  const [registeredstudents, setRegisteredstudents] = useState({sl_no:'' , name : '', classes : '', roll_no :'', mobile_no :'',email_id :''});
  const {sl_no, name, classes, roll_no, mobile_no, email_id } = registeredstudents;
  const [openedit , setOpenedit ] = useState(false);
  const [opendelete, setOpendelete] = useState(false);

  const editHandler = () => {
    setOpenedit(true);
  }

  const deleteHandler = () => {
    setOpendelete(true);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setRegisteredstudents({ ...registeredstudents, [name]: value });
  }

  const checkHandler = (e ,sl_no) => {
    if(e.target.checked){
      let editData = studata.filter(registeredstudents => registeredstudents.sl_no === sl_no)[0];
      setRegisteredstudents(editData);
    }
  }

  const handleeditClose = async (update) => {
    if(update){
      await updateData(registeredstudents); 
      window.location.reload(false);
    }
    setOpenedit(false);
  };


  const handledeleteClose = async (deletion) => {
    if(deletion){
      await deleteData(registeredstudents.sl_no);
      window.location.reload(false);
    }
    setOpendelete(false);
  }


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(async () => {
    setStuData(await getData());
  }, []);

  

  return(
  <>
  <div id='datatable'>

  
      <div class="btneditdelete">
        
        <Edit
          openedit = { openedit }
          sl_no= { sl_no }
          mobile_no= { mobile_no } 
          email_id= { email_id }
          changeHandler={ changeHandler }
          handleeditClose= { handleeditClose }
        />
        <Button class='editbtn' variant="contained" onClick={editHandler}>EDIT</Button>
        <Delete
          opendelete = {opendelete}
          sl_no= { sl_no }
          changeHandler={ changeHandler }
          handledeleteClose = {handledeleteClose}
        />
        <Button class='delbtn' variant="contained" onClick={ deleteHandler }>DELETE</Button>
      </div>
    
      
  
    <TableContainer component={ Paper }>
      <Table sx= {{ minWidth: 350 }} aria-label="simple table" >
        <TableHead class="tablehead" >
          <TableRow>

            <TableCell> Select </TableCell>
            <TableCell>Registration Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Roll Number</TableCell>
            <TableCell>Mobile Number</TableCell>
            <TableCell>Email Id</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody class="tablebody">
          {studata
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((registeredstudents, index) => (
            <TableRow
              key={registeredstudents.sl_no}
              sx= {{ '&:last-child td &:last-child th': { border: 0 } }}
            >
              <TableCell components="th" scope="registeredstudents">
                <Checkbox onClick={(e) => checkHandler(e, registeredstudents.sl_no)} />
              </TableCell>

              <TableCell component="th" scope="registeredstudents">
                {registeredstudents.sl_no}
              </TableCell>

              <TableCell component="th" scope="registeredstudents">
                {registeredstudents.name}
              </TableCell>

              <TableCell component="th" scope="registeredstudents">
                {registeredstudents.classes}
              </TableCell>

              <TableCell component="th" scope="registeredstudents">
                {registeredstudents.roll_no}
              </TableCell>

              <TableCell component="th" scope="registeredstudents">
                {registeredstudents.mobile_no}
              </TableCell>

              <TableCell component="th" scope="registeredstudents">
                {registeredstudents.email_id}
              </TableCell>

            </TableRow>
          ))}
    
        </TableBody>
      </Table>
    </TableContainer>
    
    <TablePagination class="tablehead"
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={studata.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />  
    
    </div>
  </>

)

}
