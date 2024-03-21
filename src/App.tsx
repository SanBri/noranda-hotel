import { Stack, ThemeProvider, Typography } from "@mui/material";

import { customTheme } from "./utils/customTheme";

import Title from "./component/Title";
import Introduction from "./component/Introduction";
import About from "./component/About";
import Map from "./component/Map";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Stack
        sx={{
          boxSizing: "border-box",
          overflow: "hidden",
          minHeight: "100vh",
        }}
      >
        <Stack
          padding={{ xs: "0.5rem", md: "0.5rem 0.5rem 2rem", xl: "2rem" }}
          boxSizing={"border-box"}
          justifyContent='center'
          alignItems='center'
          sx={{
            background: "linear-gradient(#ea6927, #F9F918)",
          }}
        >
          <Title />
          <Introduction />
        </Stack>
        <Stack
          justifyContent='center'
          gap={{ xs: "0rem", lg: "2rem" }}
          alignItems='center'
          sx={{
            boxSizing: "border-box",
            backgroundColor: "#00FFFF",
          }}
          padding={{ xs: "0", sm: "2rem" }}
        >
          <Stack
            flexDirection={{ xs: "column", lg: "row" }}
            gap={{ xs: "0rem", lg: "2rem" }}
            alignItems='center'
          >
            <About />
            <Stack
              width='100%'
              height={{ xs: "30rem", xl: "30rem" }}
              borderRadius='5px'
              alignItems='center'
              gap='2rem'
              padding={{ xs: "0", sm: "1.5rem", xl: "1rem" }}
              sx={{
                position: "relative",
              }}
            >
              <Map />
              <Typography
                textAlign='center'
                padding='0 0.5rem'
                sx={{ fontSize: { xs: "1rem", xl: "1.2rem" } }}
              >
                À <b>Lescure d'Albigeois</b>, à moins de 15 minutes de la{" "}
                <b>Cathédrale Ste Cécile</b> et du <b>musée Toulouse Lautrec</b>
                .
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
