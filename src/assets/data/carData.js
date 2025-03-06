// import all images from assets/images directory
// import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/Creta.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
// import img07 from "../all-images/cars-img/toyota-offer-2.png";
// import img08 from "../all-images/cars-img/mercedes-offer.png";
import img09 from "../all-images/cars-img/legender.png"
const carData = [
  {
    id: 1,
    brand: "TOYOTA",
    rating: 112,
    carName: "LEGENDER",
    imgUrl: img09,
    model: "Model-4x4 AT Petrol",
    price: "5500",
    speed: "14.4kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      "The Toyota Legender is a premium, full-size SUV that exudes sophistication and modernity. It is a more upscale and stylish version of the Toyota Fortuner, designed to cater to buyers seeking a luxurious and bold SUV experience. The Legender features a sleek, futuristic design with a prominent grille, sharp LED headlights, and a coupe-like roofline, giving it a distinctive and commanding presence on the road.",
  },

  {
    id: 2,
    brand: "KIA",
    rating: 102,
    carName: "KIA SELTOS",
    imgUrl: img02,
    model: "Model-HTX 1.5 Diesel",
    price: 2500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Kia Seltos is a compact SUV that combines style, performance, and practicality. It features a bold design with a distinctive tiger-nose grille, sleek LED headlights, and a sporty profile. Inside, it offers a spacious and tech-savvy cabin with a user-friendly infotainment system, premium materials, and ample cargo space.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW M5",
    imgUrl: img03,
    model: "Model-Drive M Sport Petrol",
    price: 31500,
    speed: "49.75kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The BMW M5 is a luxury compact SUV that blends performance, sophistication, and versatility. Known for its dynamic driving experience, it offers powerful engine options, including turbocharged petrol and diesel variants, as well as a plug-in hybrid model for eco-conscious drivers. The X3 features BMW's signature sporty handling, precise steering, and optional xDrive all-wheel drive for enhanced traction.",
  },

  {
    id: 4,
    brand: "AUDI",
    rating: 102,
    carName: "AUDI Q8",
    imgUrl: img04,
    model: "Model-TFSI quattro Hybrid",
    price: 28500,
    speed: "9.8kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      "The Audi Q8 is a luxury flagship SUV that combines bold design, cutting-edge technology, and exceptional performance. With its sleek coupe-like silhouette, aggressive Singleframe grille, and sharp LED lighting, the Q8 makes a striking statement on the road. It offers a range of powerful engine options, including mild-hybrid V6 and performance-oriented RS Q8 variants, delivering a smooth and exhilarating driving experience.",
  },

  {
    id: 5,
    brand: "HYUNDAI",
    rating: 94,
    carName: "CRETA",
    imgUrl: img05,
    model: "Model-SX Knight Hybrid",
    price: 2400,
    speed: "18.5kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Hyundai Creta is a popular compact SUV known for its bold design, advanced features, and reliable performance. It features a sleek and modern exterior with a cascading grille, sharp LED headlights, and a muscular stance. Inside, the Creta offers a spacious and premium cabin equipped with a touchscreen infotainment system, wireless charging, and ventilated seats for added comfort. It comes with multiple engine options, including petrol, diesel, and turbocharged variants, ensuring a smooth and efficient ride. Packed with safety features like ABS, ESC, and multiple airbags, the Hyundai Creta is a perfect choice for those seeking style, comfort, and practicality in a compact SUV.",
  },

  {
    id: 6,
    brand: "BMW",
    rating: 119,
    carName: "BMW X7",
    imgUrl: img06,
    model: "Model-xDrive40i M Sport",
    price: 30500,
    speed: "14kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The BMW X7 is a flagship luxury SUV that combines opulence, performance, and cutting-edge technology. With its bold design, including a massive kidney grille and sleek LED lighting, the X7 exudes sophistication. Inside, it offers a lavish cabin with premium materials, a panoramic sunroof, and advanced features like a digital cockpit and ambient lighting. Powered by robust engine options, including a turbocharged V8, the X7 delivers a powerful and smooth driving experience. Equipped with advanced safety and driver-assistance systems, the BMW X7 is the ultimate choice for those seeking luxury, space, and performance in a full-size SUV.",
  },


];

export default carData;
