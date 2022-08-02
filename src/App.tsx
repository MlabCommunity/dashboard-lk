import Theme from "styles/Theme";
import { Routes, Route } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Register from "components/Register/Register";
import Temporary from "components/Dashboard/Temporary";
// import Form from "components/Login/Form";
import ResetSection from "components/Login/ResetSection";
import Login from "components/Login/Login";

function App() {
  return (
    <>
      <Theme>
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="resetPassword" element={<ResetSection />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Temporary />} />
        </Routes>
      </Theme>
      <GlobalStyles />
    </>
  );
}

export default App;
