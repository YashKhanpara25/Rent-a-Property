import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Homepage from "./component/homepage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rent" element={<Homepage/>}  />
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
