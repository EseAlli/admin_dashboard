import { MatxLoadable } from "matx";

const Membership = MatxLoadable({
  loader: () => import("./Membership"),
});
const Managers = MatxLoadable({
  loader: () => import("./Managers"),
});

const Staff = MatxLoadable({
  loader: () => import("./Staff"),
});

const Groups = MatxLoadable({
  loader: () => import("./Groups"),
});

const Followers = MatxLoadable({
  loader: () => import("./Followers"),
});

const userRoutes = [
  {
    path: "/membership",
    component: Membership,
  },
  {
    path: "/managers",
    component: Managers,
  },
  {
    path: "/staff/",
    component: Staff,
  },
  {
    path: "/groups/",
    component: Groups,
  },

  {
    path: "/followers",
    component: Followers,
  },
];

export default userRoutes;
