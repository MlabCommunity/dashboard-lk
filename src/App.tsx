import Theme from "styles/Theme";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import GlobalStyles from "styles/GlobalStyles";
// import Register from "components/Register/Register";
import MainDashboard from "components/Dashboard/MainDashboard";
// import ResetSection from "components/Login/ResetSection";
// import Login from "components/Login/Login";
import DashboardSection from "components/Dashboard/DashboardSections/DashboardSection";
import MessagesSection from "components/Dashboard/DashboardSections/MessagesSection";
import AnimalCardsSection from "components/Dashboard/DashboardSections/AnimalCardsSection";
import VolunteeringSection from "components/Dashboard/DashboardSections/VolunteeringSection";
import LoginLayout from "shared/loginRegister/LoginLayout";
import LoginForm from "components/Login/LoginForm";
import ResetPassword from "components/Login/ResetPassword";

function App() {
  return (
    <>
      <Theme>
        <AnimatePresence>
          <Routes>
            <Route path="LoginLayout" element={<LoginLayout />}>
              <Route index element={<LoginForm />} />
              <Route path="LoginForm" element={<LoginForm />} />
              <Route
                path="/LoginLayout/ResetPassword"
                element={<ResetPassword />}
              />
            </Route>
            {/* <Route index element={<Login />} />
            <Route path="login" element={<Login />} /> */}
            {/* <Route path="resetPassword" element={<ResetSection />} /> */}
            {/* <Route path="register" element={<Register />} /> */}
            <Route path="dashboard" element={<MainDashboard />}>
              <Route index element={<DashboardSection />} />
              <Route
                path="/dashboard/dashboardSection"
                element={<DashboardSection />}
              />
              <Route
                path="/dashboard/messagesSection"
                element={<MessagesSection />}
              />
              <Route
                path="/dashboard/animalCardsSection"
                element={<AnimalCardsSection />}
              />
              <Route
                path="/dashboard/volunteeringSection"
                element={<VolunteeringSection />}
              />
            </Route>
          </Routes>
        </AnimatePresence>
      </Theme>
      <GlobalStyles />
    </>
  );
}

export default App;
