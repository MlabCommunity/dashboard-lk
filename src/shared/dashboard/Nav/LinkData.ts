import { Routes } from "services/Routes";

import { ReactComponent as HomeIcon } from "assets/dashboard/HomeNavIcon.svg";
import { ReactComponent as ChatIcon } from "assets/dashboard/ChatNavIcon.svg";
import { ReactComponent as SmileIcon } from "assets/dashboard/SmileNavIcon.svg";
import { ReactComponent as HeartIcon } from "assets/dashboard/HeartNavIcon.svg";

export const LinkData = [
  {
    id: 1,
    icon: HomeIcon,
    route: Routes.dashboard.path,
    text: "Dashboard",
  },
  {
    id: 2,
    icon: ChatIcon,
    route: Routes.messages.path,
    text: "Wiadomości",
  },
  {
    id: 3,
    icon: SmileIcon,
    route: Routes.animalCards.path,
    text: "Karty zwierząt",
  },
  {
    id: 4,
    icon: HeartIcon,
    route: Routes.volunteering.path,
    text: "Wolontariat",
  },
];
