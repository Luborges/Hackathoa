import Initial from "../views/Initial";
import Login from "../views/Login";
import Administrator from "../views/Administrator";
import Participant from "../views/Participant";
export const routes = [
  {
    path: "/",
    component: Login,
    private: false
  },
  {
    path: "/initial",
    component: Initial,
    private: true
  },
  {
    path: "/participant",
    component: Participant,
    private: true
  },
  {
    path: "/participant/:eventId",
    component: Participant,
    private: true
  },
  {
    path: "/administrator",
    component: Administrator,
    private: true
  }
];
