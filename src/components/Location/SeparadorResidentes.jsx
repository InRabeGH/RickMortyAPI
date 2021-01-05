import { useState, useEffect } from 'react';
//import axios from 'axios';

// Bootstrap
import { Row } from 'react-bootstrap';

const SeparadorResidentes = (props) => {
  //console.log(props);
  const [Residents, setResidents] = useState([]);
  
  useEffect(() => {
    const residente = props.residentes;
    const identificador = props.id;

    setResidents(residente, identificador);
  }, [props])

  return (
    <Row >
      {Residents.map(function (informacion) {

          return (
            <div>
              {informacion} 
            </div>
          );
        })
      }
    </Row> 
  );
}

export default SeparadorResidentes;

