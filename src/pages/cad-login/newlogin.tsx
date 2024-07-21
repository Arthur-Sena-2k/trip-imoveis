import { Copyright } from "@mui/icons-material"
import { Container, CssBaseline, Box, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid } from "@mui/material"
import { Link } from "react-router-dom"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



const newLogin = () => {
  return (
    <div className="container">
          <Container component="main" maxWidth="xs" className='container-pai'>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  className="back-inputs"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  className="back-inputs"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Link to="/cidades">
                  <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Entrar</Button>
                </Link>
                <Grid container>
                  <Grid item xs>
                    <Link to="#">
                      Esqueceu a Senha?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/cadastro">
                      {"Click aqui e crie sua conta? Cadastro!"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
    </div>
  )
};

export default newLogin;
