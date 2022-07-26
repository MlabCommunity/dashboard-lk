import Theme from "styles/Theme";
import { Routes, Route } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Login from "components/Login/Login";
import Register from "components/Register/Register";

function App() {
  return (
    <>
      <Theme>
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Theme>
      <GlobalStyles />
    </>
  );
}

export default App;
