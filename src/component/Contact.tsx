import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const Contact = () => {
  return (
    <Stack
      width={{ xs: "auto", md: "35rem" }}
      height='auto'
      marginTop={{ xs: "0.5rem", lg: "0" }}
      marginBottom='2rem'
      borderRadius='5px'
      alignItems='center'
      gap='1rem'
      padding='1.5rem'
      sx={{
        backgroundColor: "rgba(255,255,255,0.3)",
        position: "relative",
      }}
    >
      <Typography textAlign='center' width={{ xs: "90%", sm: "70%" }}>
        Pour plus d'informations ou pour réserver, veuillez me contacter par
        téléphone :
      </Typography>
      <Typography textAlign='center' fontWeight='500' fontSize='1.1rem'>
        <FontAwesomeIcon
          icon={faPhone}
          color='#1B323D'
          style={{ marginRight: "0.3rem" }}
        />
        05 00 00 00 00
      </Typography>
      <Typography fontSize='0.9rem'>N°SIRET : 583 506 869 xxx xx</Typography>
    </Stack>
  );
};

export default Contact;
