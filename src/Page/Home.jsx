import { Link } from "react-router-dom";
import vanilla from "../assets/vanilla.jpg";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Fichier Scss/Home.scss";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Container, Grid, Box, Card, Button } from "@mui/material";
import Poivre from "../assets/poivre.jpg";
import Ylang from "../assets/Ylang-ylang.jpeg";
import Calophylum from "../assets/calophylum.jpg";
import Coco from "../assets/coco.jpg";
import Footer from "../Components/Footer";

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
        <Container >
          <Container className="containerN">
            <Typography variant="h5">
              <span className="echap"></span>
              {
                " Chez Vanilla Horizon Export, l'authentique artisan de la vanille de Madagascar. Située au cœur de l'île, notre entreprise se distingue par le fait que nous ne sommes pas seulement des exportateurs, mais également les propriétaires de notre propre plantation."
              }
              <br />
            </Typography>
          </Container>
          <Container item xs={6} md={4}>
            <Box>
              <img src={vanilla} className="img" />
            </Box>
          </Container>
        </Container>

        <br />
        <Typography variant="h4">Nos Produits</Typography>
        <span className="ligne"></span>
        <br />
        <Typography variant="h5">
          <span className="echap"></span>
          {
            " Au-delà de la vanille, notre plantation offre une gamme d'ingrédients exceptionnels, révélant les trésors authentiques de Madagascar. Explorez avec nous le monde riche et diversifié du poivre grena, des huiles essentielles d'ylang-ylang, de coco et de calophylum."
          }
          <br />
        </Typography>
        <Container>
          <Grid container spacing={2}>
            <Grid>
              <Card
                sx={{ maxWidth: 345, marginLeft: "20px", marginTop: "20px" }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={Poivre}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {"Poivre Grena : Un Piquant d'Excellence"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {" Un Piquant d'Excellence"}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to="/ficheProduits">
                    <Button size="small">Learn More</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid>
              <Card
                sx={{ maxWidth: 345, marginLeft: "20px", marginTop: "20px" }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={Ylang}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {"Huile Essentielle d'Ylang-Ylang "}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {" L'Élégance Florale"}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to="/ficheProduits">
                    <Button size="small">Learn More</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid>
              <Card
                sx={{ maxWidth: 345, marginLeft: "20px", marginTop: "20px" }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={Calophylum}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {"Huile Essentielle de Calophylum "}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {"La Puissance Régénérant"}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to="/ficheProduits">
                    <Button size="small">Learn More</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid>
              <Card
                sx={{ maxWidth: 345, marginLeft: "20px", marginTop: "20px" }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={Coco}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {"Huile de Coco :La Douceur Tropicale"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {"La Douceur Tropicale"}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to="/ficheProduits">
                    <Button size="small">Learn More</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Footer />
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
