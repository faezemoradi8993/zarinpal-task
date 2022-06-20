import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import data from "./data.json";
import FormMaker from "./components/formMaker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {data.map((item) => (<>
        {console.log("/".concat(item.path))}
          <Route path={"/".concat(item.path)} element={<FormMaker formData={item} />} 
          />
        </>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
