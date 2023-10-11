import Header from "./components/Header"
import Task from "./components/Task"
import useState from "react"

function App() {
  [tasks, setTask] = useState([
      {
          id:1,
          text: "Doctor Appointment",
          day: "Feb 5th at 2:30pm",
          reminder: true
      },
      {
          id:2,
          text: "Meeting At School",
          day: "Feb 6th at 3:30pm",
          reminder: true,
      },
      {
          id:3,
          text: "Food Shopping",
          day: "Feb 7th at 1:30pm",
          reminder: true
      }
  ])
  
  return (
    <div className='container'>
      <Header title="Task Tracker" />
      <Task tasks={tasks} />
    </div>
  )
}

export default App
