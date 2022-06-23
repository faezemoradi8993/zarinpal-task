import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "./App.css";
import Home from "./pages/home";
import data from "./data.json";
import FormMaker from "./components/formMaker";
import store, { persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { addUser, addProduct } from './api'


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {data.map((item) => (<>
              <Route key={item.form} path={"/".concat(item.path)} element={<FormMaker func={item.path === "addproduct" ? addProduct : item.path === "addusers" ? addUser : null} formData={item} />}
              />
            </>
            ))}
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
