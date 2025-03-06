// import images from all-images/blog-img directory
import img01 from "../all-images/blog-img/blog-1.jpg";
import img02 from "../all-images/blog-img/blog-2.jpg";
import img03 from "../all-images/blog-img/blog-3.jpg";

const blogData = [
  {
    id: 1,
    title: "The best way to drive cars",
    author: "Rishit",
    date: "06 May, 2025",
    time: "8:00AM",
    imgUrl: img01,
    description:

      "The best way to drive a car is to prioritize safety, stay alert, and follow traffic rules. Always wear your seatbelt, maintain a safe distance from other vehicles, and avoid distractions like mobile phones. Adjust your mirrors, use turn signals, and drive at a controlled speed suitable for road conditions. Regular maintenance of your car, like checking tire pressure and brakes, ensures a smooth and safe ride. Remember, responsible driving not only protects you but also everyone on the road. Drive smart, drive safe! 🚗✨",

    quote:
      <i>  "The best drivers are those who know they are not perfect and drive accordingly."</i>,
  },

  {
    id: 2,
    title: "If your car battery is down",
    author: "Aman",
    date: "19 June, 2025",
    time: "12:05AM",
    imgUrl: img02,
    description:
      "If your car battery is down, don’t panic! First, ensure your car is in a safe location. Use jumper cables to connect your dead battery to a working one from another vehicle, ensuring the correct terminals are matched. Start the working car and let it run for a few minutes to charge your battery. Alternatively, call for roadside assistance or use a portable jump starter if available. To avoid future issues, regularly check your battery’s health, keep terminals clean, and consider replacing it every 3-5 years. A little preparation can save you from being stranded! 🔋🚗",
    quote:
      <i> "Stay charged, stay ready. A little maintenance can save you from a lot of trouble."</i>,
  },

  {
    id: 3,
    title: "The best way to give trip",
    author: "Shubham",
    date: "05 April, 2025",
    time: "04:25PM",
    imgUrl: img03,
    description:
      "The best way to give a trip is to plan ahead and stay organized. Choose a comfortable and reliable vehicle, ensure it’s well-maintained, and pack essentials like snacks, water, and a first-aid kit. Plan your route, check traffic updates, and take breaks to stay refreshed. Keep your phone charged for navigation and emergencies, and drive responsibly to ensure a smooth and enjoyable journey. Happy travels! 🚗✨🌍",
    quote:
      <i>"Travel is the best way to lose yourself and find yourself at the same time."</i>,
  },
];

export default blogData;
