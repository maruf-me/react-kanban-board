import Home from "../pages/Home";
import Task from "../pages/Task";
import { Routes, Route } from "react-router-dom";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task" element={<Task/>} />
    </Routes>
  );
};

export default routes;