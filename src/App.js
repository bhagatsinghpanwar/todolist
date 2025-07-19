import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [todostatus, settodostatus] = useState([]);


  let SaveTodolist = (event)=>{

    
  let toname = event.target.toname.value;
  // alert(toname);

  if(!todostatus.includes(toname)){
    let finaltodolist = [...todostatus, toname];
    settodostatus(finaltodolist);
    // alert("Task added successfully");

  }
  else{
    alert("This task already exists");
  }


    event.preventDefault();

  }
   let list = todostatus.map((value, index)=>{
    return(
      <ToDolistItems value={value}  key={index} indexNumber={index} todostatus= {todostatus} settodostatus= {settodostatus}  />
    )
   })


  return (
    <div className="App">
     <h> ToDo List</h>

    <form onSubmit={SaveTodolist}>
      <input type='text' name = "toname"></input>
      <button >Save</button>
    </form>


      <div className='Outerdiv'>  
          <ul>
            {list}
         
    
    </ul>
    </div>


     

    </div>
  );
}

export default App;


function ToDolistItems({value,indexNumber, todostatus, settodostatus}){
  let [status, setStatus] = useState(false)

 let deleteRow = ()=>{
  let finalData = todostatus.filter((v,i)=>i!=indexNumber)
 settodostatus (finalData)
 }

 let checkStatus = ()=>{
  setStatus(!status)

 }

  return(
      <li className={(status) ? 'completeTodo' : ''} onClick={checkStatus}>{indexNumber+1} {value} <span onClick={deleteRow}>&times;</span></li>  

  ) 
}