import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import GlobalStyles from "styles/GlobalStyles";
import Theme from "styles/Theme";
import { ProtectedRoute } from "services/ProtectedRoute";

import { RegisterOrganization } from "components/Register/RegisterOrganization";
import { LoginLayout } from "shared/loginRegister/LoginLayout";
import {
  MainDashboard,
  AccountSettings,
  DashboardSection,
  MessagesSection,
  AnimalCardsSection,
  VolunteeringSection,
  NewAnimalCard,
  Employee,
  OrganizationSection,
} from "components/Dashboard";
import {
  LoginForm,
  ResetPassword,
  NewPassword,
  ResetSuccess,
  NewPasswordSuccess,
} from "components/Login";

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
            <Route path="NewPassword/:postId" element={<NewPassword />} />
            <Route path="NewPasswordSuccess" element={<NewPasswordSuccess />} />
            <Route path="Register" element={<RegisterOrganization />} />
          </Route>

          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route path="/" element={<MainDashboard />}>
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
                    <Route path="addAnimal" element={<NewAnimalCard />} />
                    <Route
                      path="volunteeringSection"
                      element={<VolunteeringSection />}
                    />
                    <Route
                      path="organizationSection"
                      element={<OrganizationSection />}
                    />
                    <Route
                      path="accountSettings"
                      element={<AccountSettings />}
                    />
                    <Route path="addEmployee" element={<Employee />} />
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
