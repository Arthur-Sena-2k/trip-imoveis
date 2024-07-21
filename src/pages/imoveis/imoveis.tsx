import { Box, AppBar, Toolbar, IconButton, Typography, Button, Card, CardActions, CardContent, CardMedia, CardActionArea, Grid } from '@mui/material';
import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import './imoveis.css'

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

const imoveis = () => {
  return (
    <div className="container-pai">
          <div>
              <Box sx={{ flexGrow: 1, width: '1400px', height: '500px' }}>
                <AppBar className='new-navbar'>
                  <Toolbar>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Link to= '/' >
                      <img src={imgCasas.imgemLogo} style={{ padding: '100px, 100px' }}/>
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      TRIP IMÓVEIS
                    </Typography>

                    <Link to="/cadastro">
                      <Button sx={{color: 'white'}}>CADASTRO</Button>
                    </Link>
                    <Link to="/login">
                      <Button sx={{color: 'white'}}>LOGIN</Button>
                    </Link>
                  </Toolbar>
                </AppBar>
              </Box>

          </div>
            <div className="container1">
              <Card sx={{ maxWidth: 550, display: 'flex',flexDirection: 'row', borderRadius: '30px', padding: '5px' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={imgCasas.imgemCasa1}
                  alt="Paella dish"
                />
                <CardContent style={{width: '90vw'}}>
                  <Typography style={{fontSize: '1rem', color:'black', textAlign: 'justify'}}>
                    Casa com vista para o mar, boa localização e ótimo conforto.
                  </Typography>
                  <Typography style={{fontSize: '1rem', color:'black', textAlign: 'left'}}>
                    Localização: Porto Seguro,BA
                  </Typography>
                  <Typography style={{fontSize: '1rem', color:'black', textAlign: 'right'}}>
                    Preço: R$: 1.000,00
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

              <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="/cadastro">
                  <Card sx={{ display: 'flex' }}>
                  <CardMedia
                      component="img"
                      sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                      image={imgCasas.imgemCasa2}
                      alt= 'casa2'
                    />
                    <CardContent sx={{ flex: 1 }}>
                      <Typography style={{fontSize: '1rem', color:'black', textAlign: 'justify'}}>
                        Otima propriedade para quem busca fugir do barulho, possui uma boa área de lazer.
                      </Typography>
                      <Typography style={{fontSize: '1rem', color:'black', textAlign: 'left'}}>
                        Localização: Porto Seguro, BA
                      </Typography>
                      <Typography style={{fontSize: '1rem', color:'black', textAlign: 'right'}}>
                        Preço: R$ 1000,00
                      </Typography>
                    </CardContent>

                  </Card>
                  <Link to='/imoveis-DF'>
                    <Button>
                      DF
                    </Button>
                  </Link>
                </CardActionArea>
              </Grid>
            </div>
      </div>
  )
}

export default imoveis;
