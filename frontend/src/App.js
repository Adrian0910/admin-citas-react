//useEffect, useState son hooks que React te da para la consuta del API
import React, { useEffect, useState} from 'react';
// Route: Permite ir de una página a otra
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import clienteAxios from './config/axios';
// Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';



function App() {
  //====== lugar seguro para código js ======
  
  //State de la app, se inicia como array vacio
  const [citas, guardarCitas] = useState([]);
  const [consultar, guardarConsultar] = useState(true);

  useEffect( () =>{
    // Creamos la function para consultar la API
    if (consultar) {
      const consultarAPI = () => {
        clienteAxios.get('/pacientes') //Esta parte obtiene la url
          .then(respuesta => {
            //Colocar en el state el resultado
            guardarCitas(respuesta.data);

            // deshabilitar la consulta
            guardarConsultar(false);
          })
          .catch(error => {
            console.log(error)
          })
      }
      consultarAPI();
    }
  }, [consultar] ); //[] el array son las dependencias que por el momento estan vacias

  //====== lugar seguro para código js ======
  return (
    <Router>
      <Switch> {/* luego del switch definimos las rutas */}
      {/* El componente citas se escribe asi para poder pasar la api */}
        <Route exact path="/" component={() => <Pacientes citas={citas}/>}/> 
        <Route exact path="/nueva"  component={() => <NuevaCita guardarConsultar=
        {guardarConsultar} />}/>
        <Route exact path="/cita/:id" 
        render={(props) => {
          const cita = citas.filter( cita => cita._id === props.match.params.id)
          
          return(
            <Cita 
            cita={cita[0]}
            />
          )
        }}/>
      </Switch>
    </Router>
  );
}

export default App;
