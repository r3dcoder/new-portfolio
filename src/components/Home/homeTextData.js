import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiFillMediumSquare, AiFillCode } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const homeTextData = {
  introduction: {
    title: "About Me",
    body: `I'm a passionate React Software Engineer based in the UK. With over 4 years of experience, 
    I specialize in designing and developing cutting-edge web applications with a focus on security and scalability.
    <br>Proficient in TypeScript, React, and Redux, 
    I excel at crafting intuitive user interfaces and implementing state-of-the-art frontend solutions. 
    Additionally, my expertise extends to backend technologies, including PHP, Laravel, Python, and Java.
    <br>Armed with an MSc in Computing from the University of Northampton, 
    I bring a wealth of theoretical knowledge and practical skills to every project. 
    Driven by a commitment to continuous learning, 
    I stay updated with the latest trends and technologies to deliver exceptional results in every project. 
    <br>Let's collaborate and bring your ideas to life!`,
  },
  socialMedia: {
    title: "FIND ME ON",
    body: "Feel free to connect with me",
    links: [
      {
        name: "Github",
        url: "https://github.com/r3dcoder",
        icon: AiFillGithub,
      },
      {
        name: "Medium",
        url: "https://medium.com/@sdmahfuz",
        icon: AiFillMediumSquare,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mahfuz-hasan/",
        icon: FaLinkedinIn,
      },
      {
        name: "LinkedIn",
        url: "https://github.com/r3dcoder",
        icon: AiFillCode,
      }
       
    ],
  },
};

export default homeTextData;
