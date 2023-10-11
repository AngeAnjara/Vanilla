import { Link } from "react-router-dom";
import vanilla from "../assets/vanilla.jpg";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Fichier Scss/Home.scss";
import { Container, Grid, Box } from "@mui/material";
import BoxContainer from "../Components/Box";
const Home = () => {
  return (
    <div className="allBox">
      <div className="box">
        <div className="boxVanilla">
          <div className="allText">
            <span className="horizon">Horizon export</span>
            <p className="vanilla">Vanilla</p>
            <span className="essence">
              {"L'essence authentique de la vanille de madagascar"}
            </span>
          </div>
          <Link to="/apropos">
            <button className="btnPlus">
              Plus <ArrowForwardIosIcon className="icon" />
            </button>
          </Link>
        </div>
      </div>
      <Container className="containerH">
        <Typography variant="h4">Notre Histoire</Typography>
        <span className="ligne"></span>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Typography variant="h6">
              <span className="echap"></span>
              {
                " Chez Vanilla Horizon Export, l'authentique artisan de la vanille de Madagascar. Située au cœur de l'île, notre entreprise se distingue par le fait que nous ne sommes pas seulement des exportateurs, mais également les propriétaires de notre propre plantation."
              }
              <br />
            </Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box>
              <img src={vanilla} className="img" />
            </Box>
          </Grid>
        </Grid>

        <br />
        <Typography variant="h4">Nos Produits</Typography>
        <span className="ligne"></span>
        <br />
        <Typography variant="h6">
          <span className="echap"></span>
          {
            " Au-delà de la vanille, notre plantation offre une gamme d'ingrédients exceptionnels, révélant les trésors authentiques de Madagascar. Explorez avec nous le monde riche et diversifié du poivre grena, des huiles essentielles d'ylang-ylang, de coco et de calophylum."
          }
          <br />
        </Typography>
          <Container className="containerM">
          <BoxContainer/>
          </Container>
        
          
         
         
      </Container>
    </div>
  );
};

export default Home;


/** <Grid container spacing={2}>
          {Produits.map((item) => {
            return (
              <Grid key={item.id}>
                <Card
                  sx={{ maxWidth: 345, marginLeft: "20px", marginTop: "20px" }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={item.photo}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.nomProduit}: {item.itemProduit}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.desc.slice(0, 150)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="/ficheProduits">
                      <Button size="small">Learn More</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid> */