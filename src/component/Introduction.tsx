import {
  faBan,
  faFilePen,
  faMobileScreenButton,
  faPhone,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

import DogWaterImage from "../assets/images/dog-water.jpg";
import LogoItem from "./LogoItem";

const Introduction = () => {
  return (
    <Stack
      width={{ xs: "70%", xl: "85%" }}
      margin={{ xs: "1rem auto 0", sm: "1rem auto 0", xl: "1rem auto 0" }}
      height='auto'
      borderRadius='5px'
      padding='0.5rem 2rem'
      gap='2.5rem'
      sx={{ backgroundColor: "rgba(255,255,255,0.3)", position: "relative" }}
    >
      <Stack
        flexDirection={{ xs: "column", lg: "row" }}
        gap={{ xs: "0.1rem", lg: "2rem" }}
      >
        <Stack
          width={{ xs: "10rem", sm: "9rem", lg: "12rem", xl: "18rem" }}
          borderRadius='50%'
          overflow='hidden'
          margin='auto'
        >
          <img
            src={DogWaterImage}
            alt="Chien dans l'eau"
            width={"100%"}
            height={"100%"}
          />
        </Stack>
        <Stack>
          <Typography
            sx={{
              textAlign: "justify",
              textWrap: "pretty",
              paddingTop: "2rem",
              fontSize: { xs: "0.8rem", xl: "1.2rem" },
            }}
          >
            Vous allez visiter la région, vous partez en vacances ou en week-end
            ?
            <br />
            <br />
            Venez confier votre "bébé" à une fan des premiers jours de Mabrouk,
            Junior et de leur maitre JPH.
          </Typography>
          <Typography
            sx={{
              paddingTop: "2rem",
              fontSize: { xs: "0.8rem", xl: "1.2rem" },
            }}
          >
            Dans un environnement calme et reposant, l'<b>ABC</b> est au
            rendez-vous :
            <br />- De l'<strong>A</strong>ttention,
            <br />- de la <strong>B</strong>ienveillance,
            <br />- et des <strong>C</strong>âlins
          </Typography>
          <Typography
            sx={{
              textWrap: "pretty",
              paddingTop: "2rem",
              fontSize: { xs: "0.8rem", xl: "1.2rem" },
            }}
          >
            Chez moi votre toutou passe directement de son coussin dans le
            salon, au jardin sécurisé.
          </Typography>
          <Typography
            sx={{
              textWrap: "pretty",
              paddingTop: "2rem",
              fontSize: { xs: "0.8rem", xl: "1.2rem" },
              textAlign: "center",
            }}
          >
            N'hésitez pas à vous renseigner au :<br />
            <FontAwesomeIcon
              icon={faPhone}
              color='#1B323D'
              style={{ marginRight: "5px" }}
            />
            <b>05 32 89 92 83</b>
          </Typography>
        </Stack>
      </Stack>
      <Stack
        flexDirection={{ xs: "column", sm: "row" }}
        gap='2rem'
        justifyContent={"center"}
      >
        <LogoItem icon={faFilePen} title='Questionnaire de pré-admission' />
        <LogoItem
          icon={faMobileScreenButton}
          title='Envoi régulier de photos afin de vous rassurer'
        />
        <LogoItem
          icon={faTriangleExclamation}
          title='Pour un service de qualité, les places sont limitées'
        />
        <LogoItem
          icon={faBan}
          title='Interdit aux chiens de catégories 1 et 2'
        />
      </Stack>
    </Stack>
  );
};

export default Introduction;
