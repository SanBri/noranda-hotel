import { Stack, ThemeProvider } from "@mui/material";

import { customTheme } from "./utils/customTheme";

import Title from "./component/Title";
import Introduction from "./component/Introduction";
import About from "./component/About";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Stack
        overflow='hidden'
        height={{ xs: "100vh", xl: "40rem" }}
        padding={{ xs: "0.5rem", xl: "2rem" }}
        boxSizing={"border-box"}
        alignItems='center'
        sx={{ background: "linear-gradient(#ea6927, #F9F918)" }}
      >
        <Title />
        <Introduction />
      </Stack>
      <Stack
        overflow='hidden'
        height={"auto"}
        padding={{ xs: "0.5rem", xl: "1rem" }}
        boxSizing={"border-box"}
        alignItems='center'
        sx={{
          background:
            "linear-gradient(#F9F918, #F9F918 20%, #00FFFF 80%, #00FFFF)",
        }}
      >
        <About />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
