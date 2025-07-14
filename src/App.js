import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [todostatus, settodostatus] = useState([]);


  let SaveTodolist = (event)=>{

    
  let toname = event.target.toname.value;
  // alert(toname);


    event.preventDefault();

  }


  return (
    <div className="App">
     <h> ToDo List</h>

    <form onSubmit={SaveTodolist}>
      <input type='text' name = "toname"></input>
      <button >Save</button>
    </form>



    </div>
  );
}

export default App;
