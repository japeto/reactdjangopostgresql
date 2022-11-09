//deps
import React, {
  useState,useEffect
} from 'react'

import {todos, create} from './api'

import './App.css';

const App = () =>{
  const default_data = { task: "", complete: "", }
  const [formData, setFormData] = useState(default_data);
  const [tasks, setTasks] = useState([]);

  const load=()=>{
    todos()
      .then((response)=>{
        let data = response.data
        setTasks(data)
      })
      .catch(function (error) {
        console.log("Error")
        setTasks([])
      })
  };

  const handleOnchange = (event) => {
    const {
        name,
        value
    } = event.target;
    setFormData({
        ...formData,
        [name]: value
    });
  };

  const handleOnBlur = (event) => {
      // const { id } = event.target;
      //validateInputField(id);
  };

  // trigger on component mount
  useEffect(() => {
    load();
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    create(formData)
      .then((response)=>{
        setFormData(default_data)
        load()
      })
      .catch(function (error) {
        console.log("Error")
        setFormData(default_data)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className="form-style-2">
        <form onSubmit={handleSubmit}>
          <h1>
            Formulario básico
          </h1>
          <p>
            <label>
              Nombre de la tarea:
            </label>
            <input
              className="input-field"
              name="task"
              type="text"
              value={formData.task}
              onChange={handleOnchange}
              onBlur={handleOnBlur}
              />
          </p>
          <p>
            <label>
              Ha sido completada:
            </label>
            <input
              className="input-field"
              name="complete"
              type="checkbox"
              value={formData.complete}
              onChange={handleOnchange}
              onBlur={handleOnBlur}
              />
          </p>
          <p>
            <input type="submit"/>
          </p>
        </form>
        </div>
        <div>
        <ul>
          {tasks.map((item)=>{
            return(<li key={item.pk} >
              {item.task} | Create at: {item.timestamp} | Update at: {item.updated} | Completed {item.completed}
            </li>)
          })}
        </ul>
      </div>
      </header>
    </div>
  );
}

export default App;
