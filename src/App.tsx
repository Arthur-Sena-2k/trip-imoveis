import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography, Menu, MenuItem} from "@mui/material";
import "./App.css";
import MenuIcon from "@mui/icons-material/Menu";

import imgCasa1 from "./assets/img/casa 1.png";
import imgCasa2 from "./assets/img/casa 2.png";
import imgCasa3 from "./assets/img/casa 03.png";
import imgCasa4 from "./assets/img/casa 4.png";
import imgCasa5 from "./assets/img/casa 5.png";
import imgCasa6 from "./assets/img/casa 6.png";
import imgLogo from "./assets/img/TRIP IMÓVEIS LOGO.png";
import { useState } from "react";


const imgCasas = {
  imgemCasa1: imgCasa1,
  imgemCasa2: imgCasa2,
  imgemCasa3: imgCasa3,
  imgemCasa4: imgCasa4,
  imgemCasa5: imgCasa5,
  imgemCasa6: imgCasa6,
  imgemLogo: imgLogo,
}


const App:React.FC = () => {

  const [activeSideBar, setActiveSideBar] = useState<null | HTMLElement>(null);

  const openMenuBurguer = (event:MouseEvent<HTMLElement>) => {
    setActiveSideBar(event.currentTarget);
  };

  const closeMenuBurguer = () => {
    setActiveSideBar(null);
  };

  return (
      <>
      <AppBar>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: 'none', md: 'flex' } }}>
          <img src={imgCasas.imgemLogo}/>
        </IconButton>
        <Typography color="inherit" variant="h6" component="div" sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>Trip Imoveis</Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit">Imoveis</Button>
          <Button color="inherit">Cidades</Button>
          <Button color="inherit">Cadastro</Button>
          <Button color="inherit">Login</Button>

        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={openMenuBurguer}>
            <MenuIcon/>
          </IconButton>
          <Menu open={Boolean(activeSideBar)} onClose={closeMenuBurguer} sx={{display:{xs: 'flex', md: 'none'}}}>
            <MenuItem>Imoveis</MenuItem>
            <MenuItem>Cidade</MenuItem>
            <MenuItem>CAdastro</MenuItem>
            <MenuItem>Login</MenuItem>
          </Menu>
        </Box>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: 'flex', md: 'none' } }}>
          <img src={imgCasas.imgemLogo}/>
        </IconButton>
        <Typography color="inherit" variant="h6" component="div" sx={{flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>Trip Imoveis</Typography>

      </Toolbar>
    </AppBar><div>



















        <Link href="/cadastro">
          <Button>
            CADASTRO
          </Button>
        </Link>
        <Link href="/login">
          <Button>
            LOGIN
          </Button>
        </Link>
        <Link href="/cidades">
          <Button>
            CIDADES
          </Button>
        </Link>
        <Link href="/imoveis">
          <Button >
            IMOVEIS
          </Button>
        </Link>
      </div>

      </>

  );
}

export default App;
