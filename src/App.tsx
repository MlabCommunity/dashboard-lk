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
import ResetSuccess from "components/Login/ResetSuccess";
import NewPassword from "components/Login/NewPassword";
import RegisterOrganization from "components/Register/RegisterOrganization";

const App = () => (
  <>
    <Theme>
      <AnimatePresence>
        <Routes>
          <Route index element={<LoginLayout />} />
          <Route path="auth" element={<LoginLayout />}>
            <Route index element={<LoginForm />} />
            <Route path="LoginForm" element={<LoginForm />} />
            <Route path="ResetPassword" element={<ResetPassword />} />
            <Route path="ResetSuccess" element={<ResetSuccess />} />
            <Route path="NewPassword" element={<NewPassword />} />
            <Route path="Register" element={<RegisterOrganization />} />
          </Route>
          <Route path="/" element={<MainDashboard />}>
            <Route index element={<DashboardSection />} />
            <Route path="dashboardSection" element={<DashboardSection />} />
            <Route path="messagesSection" element={<MessagesSection />} />
            <Route path="animalCardsSection" element={<AnimalCardsSection />} />
            <Route
              path="volunteeringSection"
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
