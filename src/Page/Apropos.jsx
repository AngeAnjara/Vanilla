import { Container, Typography } from "@mui/material"
import "./Fichier Scss/Apropos.scss"
const Apropos = () => {
  return (
    <Container>
      <Container sx={{marginTop:"15px"}}className="containerS">
        <Typography>
         <span className="espace"></span> {"Bienvenue chez Vanilla Horizon Export, l'authentique artisan de la vanille de Madagascar. Située au cœur de l'île, notre entreprise se distingue par le fait que nous ne sommes pas seulement des exportateurs, mais également les propriétaires de notre propre plantation."}
        </Typography>
      </Container>
    </Container>
  )
}

export default Apropos