import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import data from "./data.json";
import FormMaker from "./components/formMaker";
import store from './store'
import { Provider } from 'react-redux'
import { addUser } from './slices/userSlice'
import { addProduct } from './slices/productSlice';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {data.map((item) => (<>
            <Route path={"/".concat(item.path)} element={<FormMaker func={item.path === "addProduct" ? addProduct : item.path === "addUser" ? addUser : null} formData={item} />}
            />
          </>
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
