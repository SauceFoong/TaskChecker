import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks,setTask] = useState([
    {
        id: 1, 
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true, 
    },
    {
        id: 2, 
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true, 
    },
    {
        id: 3, 
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false, 
    }

])
  //Add Task 
  const addTask = (task)=>{
    const id = Math.floor(Math.random()*10000) +1
    const newTask = {id,...task}
    setTask([...tasks,newTask])
  }


  //Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task)=>task.id !==id))
  }

  //Toggle Reminder 
  const toggleReminder = (id) => {
    setTask(tasks.map((task)=> task.id === id? {...task,reminder: !task.reminder}:task))
  }


  return (
    <div className="container">
      <Header title= {"Sauce Foong"} onAdd={()=>setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask &&<AddTask onAdd = {addTask}/>}
      {tasks.length >0? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder} /> : 'No tasks to show'}
    </div>
  );
}

export default App;
