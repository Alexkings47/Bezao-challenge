import React, { useEffect } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { menuActions } from "./components/features/MenuReducer";

const App = () => {
  const { menu } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const { setMenu } = menuActions;

  useEffect(() => {
    (async () => {
      if (!menu.length) {
        const res = await fetch("/Data.json").then((r) => r.json());
        dispatch(setMenu(res.data));
      }
    })();
  }, [dispatch, setMenu, menu.length]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<AddItem />} />
      </Routes>
    </div>
  );
};

export default App;
