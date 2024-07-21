import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Cadastro from '../pages/cad-login/cadastro';
import App from '../App';
import Cidades from '../pages/select-cidade/cidades';
import Imoveis from '../pages/imoveis/imoveis';
import NewLogin from '../pages/cad-login/newlogin';
import ImoveisDF from '../pages/imoveis/imoveisDF';

const rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />,
        <Route path="/cadastro" element={<Cadastro/>} />,
        <Route path="/login" element={<NewLogin/>} />,
        <Route path="/cidades" element={<Cidades/>} />,
        <Route path="/imoveis" element={<Imoveis/>} />,
        <Route path="/imoveis-DF" element={<ImoveisDF />} />

      </Routes>
    </Router>

  )
};

export default rotas;
