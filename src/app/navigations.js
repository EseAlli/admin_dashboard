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
        path: "/products/details",
        iconText: "E"
      }
    ]
  },
  {
    name: "Customers",
    icon: "group",
    children: [
      {
        name: "Customer List",
        path: "/forms/basic",
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
    name: "Sellers",
    icon: "wc",
    children: [
      {
        name: "Sellers List",
        path: "/forms/basic",
        iconText: "B"
      },
      {
        name: "New Sellers",
        path: "/forms/editor",
        iconText: "E"
      }
    ]
  },
  {
    name: "Tags",
    icon: "local_offer",
    children: [
      {
        name: "Tags List",
        path: "/forms/basic",
        iconText: "B"
      },
      {
        name: "New Tags",
        path: "/forms/editor",
        iconText: "E"
      }
    ]
  },
  {
    name: "Inventory Management",
    icon: "store",
    path: "/others/drag-and-drop"
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
      }
    ]
  },

  {
    name: "Shipping",
    icon: "local_shipping",
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

   {
    name: "Draft Orders",
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
  
];
