import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

import AcacedLogo from "../assets/images/acaced-logo.png";

const About = () => {
  return (
    <Stack
      width={{ xs: "auto", sm: "25rem" }}
      height={{ xs: "auto", lg: "20rem" }}
      borderRadius='5px'
      gap='1rem'
      padding={{ xs: "0.5rem", sm: "2.5rem 1.5rem" }}
    >
      <Stack margin='auto' width={{ xs: "10rem", sm: "15rem" }}>
        <img
          src={AcacedLogo}
          alt='Logo Acaced'
          width={"100%"}
          height={"100%"}
          style={{ borderRadius: "50%" }}
        />
      </Stack>
      <Typography
        textAlign='center'
        marginBottom='0.5rem'
        sx={{ fontSize: { xs: "1rem", xl: "1.2rem" } }}
      >
        <b>ACACED</b> obligatoire validé.
      </Typography>
    </Stack>
  );
};

export default About;
