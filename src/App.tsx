import Theme from "styles/Theme";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import GlobalStyles from "styles/GlobalStyles";
import MainDashboard from "components/Dashboard/MainDashboard";
import DashboardSection from "components/Dashboard/DashboardSections/DashboardSection";
import MessagesSection from "components/Dashboard/DashboardSections/MessagesSection";
import AnimalCardsSection from "components/Dashboard/DashboardSections/AnimalCardsSection";
import VolunteeringSection from "components/Dashboard/DashboardSections/VolunteeringSection";
import LoginLayout from "shared/loginRegister/LoginLayout";
import LoginForm from "components/Login/LoginForm";
import ResetPassword from "components/Login/ResetPassword";
import RegisterOrganization from "components/Register/RegisterOrganization";

const App = () => (
  <>
    <Theme>
      <AnimatePresence>
        <Routes>
          <Route index element={<LoginLayout />} />
          <Route path="LoginLayout" element={<LoginLayout />}>
            <Route index element={<LoginForm />} />
            <Route path="/LoginLayout/LoginForm" element={<LoginForm />} />
            <Route
              path="/LoginLayout/ResetPassword"
              element={<ResetPassword />}
            />
            <Route
              path="/LoginLayout/Register"
              element={<RegisterOrganization />}
            />
          </Route>
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

export default App;
