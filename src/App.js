import Header from './components/Header'
import Tasks from './components/Tasks'
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

  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
