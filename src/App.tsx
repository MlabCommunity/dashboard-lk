import Theme from "styles/Theme";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import GlobalStyles from "styles/GlobalStyles";
import Register from "components/Register/Register";
import Temporary from "components/Dashboard/Temporary";
import ResetSection from "components/Login/ResetSection";
import Login from "components/Login/Login";

function App() {
  return (
    <>
      <Theme>
        <AnimatePresence>
          <Routes>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="resetPassword" element={<ResetSection />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Temporary />} />
          </Routes>
        </AnimatePresence>
      </Theme>
      <GlobalStyles />
    </>
  );
}

export default App;
