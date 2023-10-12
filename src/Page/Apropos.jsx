import { Container, Typography } from "@mui/material";
import "./Fichier Scss/Apropos.scss";
import vanillaFonds from "../assets/vanillafonds.jpg";
import NavBar from "../Components/NavBar";

const Apropos = () => {
  return (
    <>
    <NavBar/>
      <Container>
      <Container sx={{ marginTop: "15px" }} className="containerG">
        <Container className="containerS">
        <img src={vanillaFonds} />
        <Typography>
        <span className="espace"></span>{" "}
          {
            "Bienvenue chez Vanilla Horizon Export, l'authentique artisan de la vanille de Madagascar. Située au cœur de l'île, notre entreprise se distingue par le fait que nous ne sommes pas seulement des exportateurs, mais également les propriétaires de notre propre plantation."
          }
        </Typography>
        </Container>
       
      </Container>
    </Container>
    </>
  
  );
};

export default Apropos;
