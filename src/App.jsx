import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { HashRouter as Router , Routes , Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Destination from "./Components/Destination.jsx";
import Crew from "./Components/Crew.jsx";
import Technology from "./Components/Technology.jsx";

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>

      </Router>
    </>
  )
}

export default App
