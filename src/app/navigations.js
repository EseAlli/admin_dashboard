export const navigations = [
  {
    name: "Dashboard",
    path: "/dashboard/analytics",
    icon: "dashboard"
  },
  {
    name: "Orders",
    path: "/orders/",
    icon: "description"
  },
  {
    name: "Products",
    icon: "local_grocery_store",
    children: [
      {
        name: "Products List",
        path: "/products",
        iconText: "B"
      },
      {
        name: "New Products",
        path: "/product/details",
        iconText: "E"
      }
    ]
  },
  {
    name: "Withdrawal",
    icon: "credit_card",
    path: "/withdrawal"
  },
  {
    name: "Coupons",
    icon: "card_giftcard",
    path: "/coupons"
  },
  {
    name: "Sellers",
    icon: "wc",
    path: '/vendors'
  },
  {
    name: "Customers",
    icon: "group",
    children: [
      {
        name: "Customer List",
        path: "/customers",
        iconText: "B"
      },
      {
        name: "New Customer",
        path: "/forms/editor",
        iconText: "E"
      }
    ]
  },
  {
    name: "User Management",
    icon: "group_add",
    children: [
      {
        name: "Staff",
        path: "/staff",
        iconText: "B"
      },
      {
        name: "Manager",
        path: "/managers",
        iconText: "E"
      },
      {
        name: "Group",
        path: "/groups",
        iconText: "E"
      },
      {
        name: "Membership",
        path: "/membership",
        iconText: "E"
      },
      {
        name: "Followers",
        path: "/followers",
        iconText: "E"
      }
    ]
  },
  {
    name: "Refund",
    icon: "cached",
    path: '/refund_requests'
  },


  // {
  //   name: "Tags",
  //   icon: "local_offer",
  //   children: [
  //     {
  //       name: "Tags List",
  //       path: "/forms/basic",
  //       iconText: "B"
  //     },
  //     {
  //       name: "New Tags",
  //       path: "/forms/editor",
  //       iconText: "E"
  //     }
  //   ]
  // },
  // {
  //   name: "Inventory Management",
  //   icon: "store",
  //   path: "/others/drag-and-drop"
  // },  

  // {
  //   name: "Shipping",
  //   icon: "local_shipping",
  //   children: [
  //     {
  //       name: "Users List",
  //       path: "/forms/basic",
  //       iconText: "B"
  //     },
  //     {
  //       name: "New User",
  //       path: "/forms/editor",
  //       iconText: "E"
  //     }
  //   ]
  // },

  //  {
  //   name: "Draft Orders",
  //   icon: "border_color",
  //   children: [
  //     {
  //       name: "Users List",
  //       path: "/forms/basic",
  //       iconText: "B"
  //     },
  //     {
  //       name: "New User",
  //       path: "/forms/editor",
  //       iconText: "E"
  //     }
  //   ]
  // },
  {
    name: "Reviews",
    icon: "border_color",
    children: [
      {
        name: "Users List",
        path: "/forms/basic",
        iconText: "B"
      },
      {
        name: "New User",
        path: "/forms/editor",
        iconText: "E"
      }
    ]
  },

  // {
  //   name: "Reports",
  //   icon: "border_color",
  //   children: [
  //     {
  //       name: "Users List",
  //       path: "/forms/basic",
  //       iconText: "B"
  //     },
  //     {
  //       name: "New User",
  //       path: "/forms/editor",
  //       iconText: "E"
  //     }
  //   ]
  // },

  // {
  //   name: "Support",
  //   icon: "border_color",
  //   children: [
  //     {
  //       name: "Users List",
  //       path: "/forms/basic",
  //       iconText: "B"
  //     },
  //     {
  //       name: "New User",
  //       path: "/forms/editor",
  //       iconText: "E"
  //     }
  //   ]
  // },
  
];
