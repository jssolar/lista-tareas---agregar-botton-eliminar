import { useState } from 'react';

import './App.css';

function App() {
  const [ingresarNuevaTarea, setIngresarNuevaTarea] = useState('');
  const [guardarTarea, setGuardarTarea] = useState([]);

  const handleChange = (event) => {
    setIngresarNuevaTarea(event.target.value);
  };

  const handleClick = () => {
    if (ingresarNuevaTarea !== '')
      setGuardarTarea(guardarTarea.concat(ingresarNuevaTarea));
    setIngresarNuevaTarea('');
  };

  return (
    <>
      <div className="d-flex">Lista de tareas</div>
      {guardarTarea.length}
      <div className="card d-flex" >
        <input type="text" onChange={handleChange} value={ingresarNuevaTarea} />
        <button className="btn btn-dark" onClick={handleClick} type={'submit'}>
          Ingresa Tarea
        </button>

        <ul className="list-group list-group-flush">
          {guardarTarea.map((item, index) => (
            <li className="list-group-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
