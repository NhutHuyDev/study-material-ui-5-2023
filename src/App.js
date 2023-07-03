import Stack from "@mui/material/Stack";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction={"row"} spacing={2} justifyContent={'space-between'}>
            <Sidebar mode={mode} setMode={setMode}/>
            <Feed />
            <RightBar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>

    </>
  );
}

export default App;
