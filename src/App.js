import React from "react"; 
import { Typography } from "@mui/material"; // Import Typography from @mui/material
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notification from "./components/Notification";
import styled from '@emotion/styled';

const StyledAppBar = styled.div`
  border-radius: 15px;
  background-color: white;
  margin: 30px 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 600px;
  border: 2px solid black;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Image = styled.img`
  margin-left: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const App = () => {
    // const classes = useStyles ();
    return (
        <Wrapper > 
            <StyledAppBar  position="static" color="inherit">
                <Typography variant="h3" align="center">Video Chat App</Typography>
            </StyledAppBar>
            <VideoPlayer />
            <Options >
            <Notification />
            </Options>
        </Wrapper>
    );
}

export default App;
