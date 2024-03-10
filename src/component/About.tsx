import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

import AcacedLogo from "../assets/images/acaced-logo.png";

const About = () => {
  return (
    <Stack
      flexDirection={{ xs: "column", lg: "row" }}
      gap='2rem'
      padding={{ xs: "0.5rem 2rem", sm: "1rem 2rem" }}
      sx={{ boxSizing: "border-box" }}
    >
      <Stack
        width={{ xs: "auto", sm: "25rem" }}
        height='auto'
        borderRadius='5px'
        padding={{ xs: "0.5rem", sm: "1.5rem" }}
        sx={{
          backgroundColor: { xs: "initial", sm: "rgba(255,255,255,0.3)" },
          position: "relative",
        }}
      >
        <Stack margin='auto' width={{ xs: "10rem", sm: "15rem" }}>
          <img
            src={AcacedLogo}
            alt="Chien dans l'eau"
            width={"100%"}
            height={"100%"}
          />
        </Stack>
        <Typography textAlign='center'>
          En possession de l'ACACED obligatoire, je suis également expérimentée.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default About;
