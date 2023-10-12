import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../Page/Fichier Scss/navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from '@mui/icons-material/Facebook';
import { useState } from "react";
import { MenuOpen } from "@mui/icons-material";
const NavBar = () => {
  const [btnShow, setBtnShow] = useState(false);
  const [btnCliked, setBtnCliked] = useState(false);

  const btnMenu = () => {
    setBtnShow(!btnShow);
    setBtnCliked(!btnCliked);
  };
  return (
    <div className="allNavBar">
      <Link to="/" className="Logo">
        <img src={Logo} alt="" className="w-12" />
      </Link>
      <div className="allLink">
        <Typography className="Link">
          <Link to="/" className="lien">
            Accueil<span className="box"></span>
          </Link>
        </Typography>
        <Typography className="Link">
          <Link to="/apropos" className="lien">
            Apropos<span className="box"></span>
          </Link>
        </Typography>
        <Typography className="Link">
          <Link to="/ficheProduits" className="lien">
            Fiche Produits
            <span className="box"></span>
          </Link>
        </Typography>
        <Typography className="Link">
          <Link to="/contact" className="lien">
            Contact
            <span className="box"></span>
          </Link>
        </Typography>
      </div>
      <button className="btnShow" onClick={btnMenu}>
        {btnCliked ? <MenuOpen /> : <MenuIcon />}
      </button>
      <div className="Facebook">
        <Link to="/contact">
        <FacebookIcon/></Link>
      </div>
      {btnShow && (
        <div className="showMenu">
         <Link to="/" className="lien">
            Accueil<span className="box"></span>
          </Link>
          <Link to="/apropos" className="lien">
            Apropos<span className="box"></span>
          </Link>
          <Link to="/ficheProduits" className="lien">
            Fiche Produits
            <span className="box"></span>
          </Link>
          <Link to="contact" className="lien">
            Contact
            <span className="box"></span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
