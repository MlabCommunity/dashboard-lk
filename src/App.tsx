import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import GlobalStyles from "styles/GlobalStyles";
import Theme from "styles/Theme";
import { ProtectedRoute } from "services/ProtectedRoute";

import VolunteeringSection from "components/Dashboard/VolunteeringSection/VolunteeringSection";
import AnimalCardsSection from "components/Dashboard/AnimalCardsSection/AnimalCardsSection";
import DashboardSection from "components/Dashboard/DashboardSection/DashboardSection";
import MessagesSection from "components/Dashboard/MessagesSection/MessagesSection";
import RegisterOrganization from "components/Register/RegisterOrganization";
import MainDashboard from "components/Dashboard/MainDashboard";
import LoginLayout from "shared/loginRegister/LoginLayout";
import ResetPassword from "components/Login/ResetPassword";
import ResetSuccess from "components/Login/ResetSuccess";
import NewPassword from "components/Login/NewPassword";
import LoginForm from "components/Login/LoginForm";

const App = () => (
  <>
    <Theme>
      <AnimatePresence>
        <Routes>
          <Route path="auth" element={<LoginLayout />}>
            <Route index element={<LoginForm />} />
            <Route path="LoginForm" element={<LoginForm />} />
            <Route path="ResetPassword" element={<ResetPassword />} />
            <Route path="ResetSuccess" element={<ResetSuccess />} />
            <Route path="NewPassword" element={<NewPassword />} />
            <Route path="Register" element={<RegisterOrganization />} />
          </Route>

          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route path="/*" element={<MainDashboard />}>
                    <Route index element={<DashboardSection />} />
                    <Route
                      path="dashboardSection"
                      element={<DashboardSection />}
                    />
                    <Route
                      path="messagesSection"
                      element={<MessagesSection />}
                    />
                    <Route
                      path="animalCardsSection"
                      element={<AnimalCardsSection />}
                    />
                    <Route
                      path="volunteeringSection"
                      element={<VolunteeringSection />}
                    />
                  </Route>
                </Routes>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AnimatePresence>
    </Theme>
    <GlobalStyles />
  </>
);

export default App;
