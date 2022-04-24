import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import New from "./pages/New";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
