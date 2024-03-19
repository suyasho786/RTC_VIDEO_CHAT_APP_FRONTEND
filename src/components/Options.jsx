import React, { useState } from "react"; 
import { useContext } from "react";
import { Typography, Grid, Button, TextField, Container, Paper } from "@mui/material";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../Context';

const Options = ({children}) => {
  const [idToCall, setIdToCall] = useState('');
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);

  const [copied, setCopied] = useState(false);

  // const handleCopy = () => {
  //   setCopied(true); // Set copied state to true when text is copied
  //   window.navigator.clipboard.writeText(name);
  //   setTimeout(() => {
  //     setCopied(false); // Reset copied state after a short delay
  //   }, 1500); // Reset after 1.5 seconds
  // };
  return (
    <Container className="container">
      <Paper elevation={10} className="paper">
        <form className="root" noValidate autoComplete="off">
          <Grid container className="gridContainer">
            <Grid item xs={12} md={6} className="padding">
              <Typography gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              {console.log(me,"suyash") }
              
              <CopyToClipboard text={me} >
              <Button variant="contained" color="primary" fullWidth>COPY YOUR ID</Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className="padding">
              <Typography gutterBottom variant="h6">Make a Call</Typography>
              <TextField label="Id To Call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {
                callAccepted && !callEnded ?
                  (<Button variant="contained" color="secondary" fullWidth onClick={leaveCall}>Hang Up</Button>) :
                  (<Button variant="contained" color="primary" fullWidth onClick={() => callUser(idToCall)}>Call</Button>)
              }
            </Grid>
          </Grid>
        </form>
      {children}
      </Paper>
    </Container>
  );
};

export default Options;
