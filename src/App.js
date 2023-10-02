import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Homepage from "./components/Homepage";
import CategoriesPage from "./components/CategoriesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/categories" exact element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
