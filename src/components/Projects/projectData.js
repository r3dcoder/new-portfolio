// src/data/projectData.js
import storygram from "../../Assets/Projects/storygram.webp";
import englishjanala from "../../Assets/Projects/englishjanala.webp";
import hurryup from "../../Assets/Projects/hurryup.jpeg";
import taxrebate from "../../Assets/Projects/taxrebate.jpeg";
import shoopy from "../../Assets/Projects/shoopy.png";
import spam from "../../Assets/Projects/spam.png";

const projectData = [
  {
    imgPath: storygram,
    isBlog: false,
    title: "StoryGram",
    description: "Storygram provides a powerful AI photo editor with thousands of templates and features like AI Photo Enhance, Magic Remove, Background Change, AI Retouch, and more. I developed the web version and admin panel using React, Next.js, TypeScript, and Tailwind CSS.",
    ghLink: "",
    demoLink: "https://www.storygram.app/",
  },
  {
    imgPath: englishjanala,
    isBlog: false,
    title: "English Janala",
    description: "English Janala [ইংলিশ জানালা] is a premier language learning app tailored for Bangladeshi learners. It offers a user-friendly interface and offline capabilities to improve English skills. I developed the admin panel of this app using Next.js, React, and Tailwind CSS.",
    ghLink: "",
    demoLink: "https://play.google.com/store/apps/details?id=com.englishjanala.app",
  },
  {
    imgPath: hurryup,
    isBlog: false,
    title: "HurryUp",
    description: "HurryUp is an e-commerce site tailored for the local area of Sylhet, Bangladesh. I developed this site using Vue, TypeScript, and Tailwind CSS to provide a seamless and efficient online shopping experience for the community.",
    ghLink: "https://hurry-up.netlify.app/",
    demoLink: "https://hurry-up.netlify.app/",
  },
  {
    imgPath: taxrebate,
    isBlog: false,
    title: "Tax Rebate",
    description: "I've developed a user-friendly web application that simplifies the tax refund process. Users can rely on our platform for expert assistance and guidance on maximizing their refunds. Powered by React, TypeScript, Next.js, MySQL, and Tailwind CSS, our application offers a seamless experience for all users",
    ghLink: "",
    demoLink: "https://taxrebate4u.vercel.app/",
  },
  {
    imgPath: shoopy,
    isBlog: false,
    title: "Shoopy Manager",
    description: "Shopy-Manager is a versatile platform built with React, Next.js, TypeScript, and Tailwind CSS. It allows users to set up websites and mobile apps effortlessly using our curated templates.",
    ghLink: "",
    demoLink: "https://shoppy-manager.vercel.app/",
  },
  {
    imgPath: spam,
    isBlog: false,
    title: "Spam Email Detection",
    description: "In my research, I utilized Python along with libraries such as Matplotlib, TensorFlow, and others to analyze and compare machine learning models for spam email detection.",
    ghLink: "",
    demoLink: "https://colab.research.google.com/drive/1lYh_Wcd1PdxwawJso28_5cGuJr0ja68Q?usp=sharing#scrollTo=DUPJTZeZt6u2",
  },
];

export default projectData;
