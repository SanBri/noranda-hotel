import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

import Logo from "../assets/images/logo.png";

const Title = () => {
  return (
    <>
      <Stack
        width='100%'
        flexDirection={{ xs: "column", sm: "row" }}
        margin='auto'
        justifyContent='center'
        alignItems='center'
      >
        <Stack width={{ xs: "8rem", xl: "12rem" }}>
          <img
            className='heart-animation'
            src={Logo}
            alt='Logo Noranda Hôtel'
          />
        </Stack>
        <Stack sx={{ paddingTop: { xs: 0, lg: "1rem" }, textAlign: "center" }}>
          <Typography
            fontFamily={"Roboto Black"}
            sx={{
              lineHeight: "1.7rem",
              fontSize: { xs: "2rem", xl: "2.5rem" },
            }}
          >
            LE NORANDA
          </Typography>
          <Typography
            fontFamily={"Roboto Black"}
            sx={{
              lineHeight: "0.9em",
              fontSize: { xs: "1rem", xl: "1.2rem" },
            }}
          >
            {"HOTEL & GARDERIE POUR TOUTOUS"}
          </Typography>
          <Typography
            fontFamily={"Roboto Black"}
            sx={{
              lineHeight: "1em",
              fontSize: { xs: "0.9rem", xl: "1rem" },
            }}
          >
            {"Tél. 05 32 89 92 83"}
            <br />
            {"N°SIRET : 983 506 809 000 18"}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Title;
