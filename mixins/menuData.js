export default {
  data() {
    return {
      menuData: [
        {
          id: 1,
          hasDropdown: false,
          title: 'Home',
          link: "/",
        },
        {
          id: 3,
          title: "News & Annoucements",
          hasDropdown: false,
          link: "/news",
        },
        {
          id: 2,
          title: "Department",
          hasDropdown: false,
          link: "/department",
        },
        {
          id: 4,
          title: "About Us",
          hasDropdown: false,
          link: "/about-us/1",
        },
        {
          id: 5,
          hasDropdown: false,
          title: "Contact Us",
          link: "/contact-us",
        },
      ],
    };
  },
};
