import React, { useState } from "react";
import { useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { SocketContext } from "../Context";
const Options = ({ children }) => {
  const { me, callAccepted,  setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idtocall, setidtocall] = useState("");
  return (
    <>
      <div className="">
        <div className="main">
          <div className="Options">
            <h1>Acocunt info</h1>
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="name"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
              className="Input_style"
            />
          <CopyToClipboard text={me}>
              <button className="btn">Copy your id</button>
            </CopyToClipboard>
          </div>
          <div className="Options">
            <h1>Make a call</h1>
            <input
              type="text"
              value={idtocall}
              lable="Id to call"
              onChange={(e) => setidtocall(e.target.value)}
              className="Input_style"
              placeholder="ID to call"
            />
            {callAccepted && !callEnded ? (
              <button onClick={leaveCall} className="btn">Hang up</button>
            ) : (
              <button onClick={() => callUser(idtocall)} className="btn">Call</button>
            )}
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

// export default Options
// import React, { useState, useContext } from 'react';
// import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
// import { makeStyles } from '@material-ui/core/styles';

// import { SocketContext } from '../Context';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   gridContainer: {
//     width: '100%',
//     [theme.breakpoints.down('xs')]: {
//       flexDirection: 'column',
//     },
//   },
//   container: {
//     width: '600px',
//     margin: '35px 0',
//     padding: 0,
//     [theme.breakpoints.down('xs')]: {
//       width: '80%',
//     },
//   },
//   margin: {
//     marginTop: 20,
//   },
//   padding: {
//     padding: 20,
//   },
//   paper: {
//     padding: '10px 20px',
//     border: '2px solid black',
//   },
// }));

// const Options = ({ children }) => {
//   const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
//   const [idToCall, setIdToCall] = useState('');
//   const classes = useStyles();

//   return (
//     <Container className={classes.container}>
//       <Paper elevation={10} className={classes.paper}>
//         <form className={classes.root} noValidate autoComplete="off">
//           <Grid container className={classes.gridContainer}>
//             <Grid item xs={12} md={6} className={classes.padding}>
//               <Typography gutterBottom variant="h6">Account Info</Typography>
//               <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
//               <CopyToClipboard text={me} className={classes.margin}>
//                 <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
//                   Copy Your ID
//                 </Button>
//               </CopyToClipboard>
//             </Grid>
//             <Grid item xs={12} md={6} className={classes.padding}>
//               <Typography gutterBottom variant="h6">Make a call</Typography>
//               <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
//               {callAccepted && !callEnded ? (
//                 <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} className={classes.margin}>
//                   Hang Up
//                 </Button>
//               ) : (
//                 <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} className={classes.margin}>
//                   Call
//                 </Button>
//               )}
//             </Grid>
//           </Grid>
//         </form>
//         {children}
//       </Paper>
//     </Container>
//   );
// };

export default Options;
