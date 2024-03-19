import React, { useContext } from "react";
import styled from '@emotion/styled';
import { Grid, Paper, Typography } from "@mui/material";
import { SocketContext } from '../Context';

// Define styled components
const StyledGridContainer = styled(Grid)`
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const StyledPaper = styled(Paper)`
  padding: 10px;
  border: 2px solid black;
  margin: 10px;
`;

const StyledVideo = styled.video`
    width: 550px;
    @media (max-width: 600px) {
    @media (max-width: 600px) {
    width: 300px;
  }
`;

const VideoPlayer = () => {
    const {name,callAccepted,myVideo,userVideo,callEnded,stream,call} = useContext(SocketContext);
    return (
        <StyledGridContainer container>
            {
              stream && (
              <StyledPaper>
                  <Grid item xs={12} md={6}>
                      <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
                      <StyledVideo playsInline muted ref={myVideo} autoPlay />
                  </Grid>
              </StyledPaper>
              )
            }
            {
            callAccepted && !callEnded && (
              <StyledPaper>
                  <Grid item xs={12} md={6}>
                      <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
                      <StyledVideo playsInline muted ref={userVideo} autoPlay />
                  </Grid>
              </StyledPaper>
              )
            }
        </StyledGridContainer>
    );
}

export default VideoPlayer;
