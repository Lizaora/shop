import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Layout from "./components/Layout";

import Missing from "./components/Missing";
import Unauthorized from "./components/Unauthorized";

import RequireAuth from "./components/RequireAuth";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Detaille from "./pages/Detaille";
import Panier from "./pages/Panier";

const ROLES = {
  User: 2001,
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="shop" element={<Shop />} />
        <Route path="register" element={<Register />} />
        <Route path="detaille" element={<Detaille />} />
        <Route path="detaille" element={<Detaille />} />
        <Route path="panier" element={<Panier/>} />

        <Route path="unauthorized" element={<Unauthorized />} />

        {/* user */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
