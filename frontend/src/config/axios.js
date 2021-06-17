// importar axios para no tener que andar cambiando las rutas de una en una
import axios from 'axios';



const clienteAxios = axios.create({
    baseURL:process.env.REACT_APP_BACKEND_URL //mandamos a llamar a la variable
});


export default clienteAxios;
