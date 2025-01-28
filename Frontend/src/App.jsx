import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import HospitalMap from './pages/Dashboard/HospitalMap'
import LeaderBoard from './pages/Dashboard/LeaderBoard'
import Landingpage from './pages/LandingPage/Landingpage'

function App() {

  return (
    <div>
        <div>
          {/* <Landingpage /> */}
          <Dashboard />
          <LeaderBoard/>
          <HospitalMap />
        </div>
    </div>
  )
}

export default App
