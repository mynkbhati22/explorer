import React from 'react';

import TextField  from '@mui/material/TextField';
import Navbar from "./Navbar";
import Table from "./Table";
import Footer from './Footer';
import {Grid} from "@mui/material"
import Button from '@mui/material/Button';
import "./Admin.css";

function Admin() {
  return (
<> 
<Navbar />
<div className='container-explorer'>
<form>
<div className='admin-container'>
<Grid container>


<Grid item xs={12}>
<TextField  id="outlined-basic" label="Total transactions" variant="outlined" /><br/><br/>
</Grid>

<Grid item xs={6}>
Total blocks &nbsp; &nbsp; 
</Grid>

<Grid item xs={6}>
<TextField  id="outlined-basic" label="Total blocks" variant="outlined" /><br/><br/>
</Grid>

<Grid item xs={6}>
Serial no. &nbsp; &nbsp; 
</Grid>
<Grid item xs={6}>
<TextField  id="outlined-basic" label="Serial no." variant="outlined" /><br/><br/>
</Grid>
<Grid item xs={6}>
Total time &nbsp; &nbsp; 
</Grid>
<Grid item xs={6}>
<TextField  id="outlined-basic" label="Total time" variant="outlined" /><br/><br/>
</Grid>
<Grid item xs={6}>
miner wallet &nbsp; &nbsp; 
</Grid>
<Grid item xs={6}>
<TextField  id="outlined-basic" label="Miner wallet" variant="outlined" /><br/><br/>
</Grid>
<Grid item xs={6}>
miner wallet &nbsp; &nbsp; 
</Grid>
<Grid item xs={6}>
<TextField  id="outlined-basic" label="total transactions" variant="outlined" /><br/><br/>
</Grid>
<Grid item xs={6}>
wallet address1 &nbsp; &nbsp; 
</Grid>
<Grid item xs={6}>
<TextField  id="outlined-basic" label="total transactions" variant="outlined" /><br/><br/>
</Grid>
<Grid item xs={6}>
wallet address2 &nbsp; &nbsp; 
</Grid>
<Grid item xs={6}>
<TextField  id="outlined-basic" label="total transactions" variant="outlined" /><br/><br/>
</Grid>
</Grid>
</div>
<Button variant="contained">
Submit
</Button>

</form>
<Table />
</div>
<Footer />


</>
  )
}

export default Admin