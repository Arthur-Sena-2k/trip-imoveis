import { Box, AppBar, Toolbar, IconButton, Typography, Button, Card, CardMedia, CardContent, CardActions, Grid, CardActionArea } from '@mui/material'
import { Link } from 'react-router-dom'
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import imgCasa1 from "../../assets/img/casa 1.png";
import imgCasa2 from "../../assets/img/casa 2.png";
import imgCasa3 from "../../assets/img/casa 03.png";
import imgCasa4 from "../../assets/img/casa 4.png";
import imgCasa5 from "../../assets/img/casa 5.png";
import imgCasa6 from "../../assets/img/casa 6.png";
import imgLogo from "../../assets/img/TRIP IMÓVEIS LOGO.png";



const imgCasas = {
  imgemCasa1: imgCasa1,
  imgemCasa2: imgCasa2,
  imgemCasa3: imgCasa3,
  imgemCasa4: imgCasa4,
  imgemCasa5: imgCasa5,
  imgemCasa6: imgCasa6,
  imgemLogo: imgLogo,
}

const imoveisDF = () => {
  return (
    <div className="container-pai">
    <div >
        <AppBar className="new-navbar" position="static">
          <Toolbar>
            <Link to="/cadastro">
              <img
                src={imgCasas.imgemLogo}
                style={{  }}
              />
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Nome da Plataforma
            </Typography>
            <Link to="/cadastro">
              <Button className="button-header" sx={{ color: "white" }} variant="outlined">
                Jogar agora
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
    </div>
    <div className="container-imoveis">
      <Card
        sx={{
          maxWidth: 550,
          display: "flex",
          flexDirection: "row",
          borderRadius: "30px",
          padding: "5px",
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={imgCasas.imgemCasa1}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Casa com vista para o mar, boa localização e ótimo conforto.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>

      <Grid item xs={12} md={6} >
        <CardActionArea component="a" to="/cadastro" style={{flexDirection: "row"}}>
          <Card sx={{maxWidth: 550,display: "flex", flexDirection: "row", borderRadius: "30px", padding: "5px",}}>
            <CardContent sx={{ flex: 1,  }}>
              <Typography variant="subtitle1" paragraph>
                Otima propriedade para quem busca fugir do barulho, possui
                uma boa área de lazer.
              </Typography>
              <Typography component="h4" variant="h5">
                Localização: Porto Seguro, BA
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Preço: R$ 1000,00
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 100 }}
              image={imgCasas.imgemCasa2}
              alt="casa2"
              height="200"
            />
          </Card>
        </CardActionArea>

        <CardActionArea component="a" to="/cadastro" style={{flexDirection: "row"}}>
          <Card sx={{maxWidth: 550,display: "flex", flexDirection: "row", borderRadius: "30px", padding: "5px",}}>
            <CardContent sx={{ flex: 1,  }}>
              <Typography variant="subtitle1" paragraph>
                Otima propriedade para quem busca fugir do barulho, possui
                uma boa área de lazer.
              </Typography>
              <Typography component="h4" variant="h5">
                Localização: Porto Seguro, BA
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Preço: R$ 1000,00
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 100 }}
              image={imgCasas.imgemCasa2}
              alt="casa2"
              height="200"
            />
          </Card>
        </CardActionArea>
        <CardActionArea component="a" to="/cadastro" style={{flexDirection: "row"}}>
          <Card sx={{maxWidth: 550,display: "flex", flexDirection: "row", borderRadius: "30px", padding: "5px",}}>
            <CardContent sx={{ flex: 1,  }}>
              <Typography variant="subtitle1" paragraph>
                Otima propriedade para quem busca fugir do barulho, possui
                uma boa área de lazer.
              </Typography>
              <Typography component="h4" variant="h5">
                Localização: Porto Seguro, BA
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Preço: R$ 1000,00
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 100 }}
              image={imgCasas.imgemCasa2}
              alt="casa2"
              height="200"
            />
          </Card>
        </CardActionArea>
        <CardActionArea component="a" to="/cadastro" style={{flexDirection: "row"}}>

          <Card sx={{maxWidth: 550,display: "flex", flexDirection: "row", borderRadius: "30px", padding: "5px",}}>
            <CardContent sx={{ flex: 1,  }}>
              <Typography variant="subtitle1" paragraph>
                Otima propriedade para quem busca fugir do barulho, possui
                uma boa área de lazer.
              </Typography>
              <Typography component="h4" variant="h5">
                Localização: Porto Seguro, BA
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Preço: R$ 1000,00
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 100 }}
              image={imgCasas.imgemCasa2}
              alt="casa2"
              height="200"
            />
          </Card>
        </CardActionArea>
        <CardActionArea component="a" to="/cadastro" style={{flexDirection: "row"}}>
        <Card sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="subtitle1" style={{fontSize: '1rem', color:'black', textAlign: 'justify'}}>
                Otima propriedade para quem busca fugir do barulho, possui
                uma boa área de lazer.
              </Typography>
              <Typography component="h4" variant="h5">
                Localização: Porto Seguro, BA
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Preço: <span style={{color: 'black', fontWeight: 'bold'}}>R$ 1000,00</span>
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151, borderRadius:'10px'}}
            image={imgCasas.imgemCasa2}
            alt="Live from space album cover"

          />
        </Card>
        </CardActionArea>
      </Grid>
    </div>
  </div>
  )
}

export default imoveisDF
