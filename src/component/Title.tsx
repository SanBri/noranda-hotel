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
              lineHeight: { xs: "1.7rem", xl: "2.6rem" },
              fontSize: { xs: "2rem", xl: "2.7rem" },
            }}
          >
            LE NORANDA
          </Typography>
          <Typography
            fontFamily={"Roboto Black"}
            sx={{
              lineHeight: { xs: "0.9em", xl: "1.6rem" },
              fontSize: { xs: "1rem", xl: "1.5rem" },
            }}
          >
            {"HOTEL & GARDERIE POUR TOUTOUS"}
          </Typography>
          <Typography
            fontFamily={"Roboto Black"}
            sx={{
              lineHeight: { xs: "1em", xl: "1.3rem" },
              fontSize: { xs: "0.9rem", xl: "1.2rem" },
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
