import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'

const App = () =>{
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: '04/23/2021',
      reminder: true,
    },
    {
      id: 2,
      text: 'Party',
      day: '04/24/2021',
      reminder: true,
    },
  ])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder} : task)
    )
  }

  return (
    <div className='container'>
      <Header />
      <AddTask/>
      {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : 'No Tasks to Show'}
    </div>
  );
}

export default App;
