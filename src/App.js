import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'


function App() {
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
