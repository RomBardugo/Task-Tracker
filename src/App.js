import Header from"./components/Header"
import Tasks from "./components/Tasks";
import {useState} from 'react';
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask,setShowAddtask] = useState(false);
  const [tasks, setTaskes] = useState([
    {
      id:1,
      text: 'Doctors Appontment',
      date: "05/02/2022 2:30 pm",
      reminder: true,
  },
  {
      id:2,
      text: 'Metting at School',
      date: "25/02/2022 6:30 pm",
      reminder: true,
  },
  {
      id:3,
      text: 'Shopping with Adi',
      date: "15/04/2022 12:30 am",
      reminder: false,
  }
  ])

  //Delete Task
  const deleteTask = (id) =>{
    setTaskes(tasks.filter((task)=>task.id !== id));
  }

  //toggele reminder
  const toggeleRemainder = (id) =>{
    setTaskes(tasks.map((task)=>
    task.id === id ? {...task, reminder: !task.reminder} : task));
  }

  //Add Task
  const addTask = (task) => {

    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = {id, ...task};
    setTaskes([...tasks, newTask]);
  }


  return (
    <div className="container">
      <Header onAdd={()=> setShowAddtask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      { tasks.length > 0 ? 
      <Tasks 
        tasks={tasks}
        onDelete={deleteTask}
        onToggle= {toggeleRemainder}
        />
      :
      ("No Tasks To Show ") }
    </div>
    
  );
}

export default App;
