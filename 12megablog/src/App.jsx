import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authservices from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";
function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

    useEffect(() => {
    authservices
      .getcurrentuser()
      .then((userdata) => {
        if (userdata) {
          dispatch(login({ userdata }));
        } else {
          dispatch(logout());
        }
      })
      .finally(setloading(false));
  }, []);

   return !loading ? (
    <div
      className="min-h-screen flex f
    lex-wrap content-between bg-gray-400"
    >
      <div className="w-full block">
        <Header />
        <main>{/* <Outlet /> */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
