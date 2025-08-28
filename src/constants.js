import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import pythonLogo from './assets/tech_logo/python.png';
import javaLogo from './assets/tech_logo/java.png';
import cppLogo from './assets/tech_logo/cpp.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import tensorflowLogo from './assets/tech_logo/Tensorflow_logo.webp';
import pytorchLogo from './assets/tech_logo/pytorch.webp';
import scikitLearnLogo from './assets/tech_logo/scikit-learn.webp';
import opencvLogo from './assets/tech_logo/opencvlogo.webp';
import mysqlLogo from './assets/tech_logo/mysql.png';
import redisLogo from './assets/tech_logo/Logo-redis.webp';
import swaggerLogo from './assets/tech_logo/swaggerlogo.webp';
import dockerLogo from './assets/tech_logo/docker-logo.webp';
import kafkaLogo from './assets/tech_logo/Apache.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import netlifyLogo from './assets/tech_logo/netlify.png';

// Experience Section Logos
import codsoftLogo from './assets/company_logo/codsoftlogo.avif';

// Education Section Logos
import bennettLogo from './assets/education_logo/Bennett1.png';
import stPaulLogo from './assets/education_logo/Schoolpaul.png';

// Project Section Logos
import fitlifeLogo from './assets/work_logo/fitlife.png';
import apniCarLogo from './assets/work_logo/apnicar.png';
import satelliteLogo from './assets/work_logo/Satellite-Free-PNG-Image.webp'; 

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Material-UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Spring Boot', logo: springbootLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Redis', logo: redisLogo },
      { name: 'Apache Kafka', logo: kafkaLogo },
    ],
  },
  {
    title: 'AI/ML',
    skills: [
      { name: 'TensorFlow', logo: tensorflowLogo },
      { name: 'PyTorch', logo: pytorchLogo },
      { name: 'Scikit-learn', logo: scikitLearnLogo },
      { name: 'OpenCV', logo: opencvLogo },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Docker', logo: dockerLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Swagger UI', logo: swaggerLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [
    {
      id: 0,
      img: codsoftLogo,
      role: "Full-Stack Development Intern",
      company: "CodSoft, Noida",
      date: "June 2024 - July 2024",
      desc: "Developed full-stack web modules using HTML, CSS, and JavaScript integrated with Spring Boot REST APIs, reducing average page load time by 27%. Built and deployed 8 robust Spring Boot endpoints, optimizing MySQL queries to support 100+ daily requests.",
      skills: [ "Java", "Spring Boot", "MySQL", "JavaScript", "HTML", "CSS", "REST APIs" ],
    },
];
  
export const education = [
    {
      id: 0,
      img: bennettLogo,
      school: "Bennett University, Noida",
      date: "Aug 2022 - May 2026",
      grade: "8.8 CGPA",
      desc: "Pursuing a B.Tech in Computer Science, focusing on core subjects like Data Structures & Algorithms, OOP, and DBMS, alongside practical experience in AI/ML and full-stack development.",
      degree: "Bachelor of Technology in Computer Science",
    },
    {
      id: 1,
      img: stPaulLogo,
      school: "St. Paul Sr. Sec. Co-Ed School, Bhopal",
      date: "Mar 2020 - Mar 2021",
      grade: "88% Percentage",
      desc: "Completed my senior secondary education under the CBSE board with a focus on science and computer science.",
      degree: "CBSE (Class XII)",
    },
    {
      id: 2,
      img: stPaulLogo,
      school: "St. Paul Sr. Sec. Co-Ed School, Bhopal",
      date: "Mar 2018 - Mar 2019",
      grade: "90.2% Percentage",
      desc: "Completed my high school education under the CBSE board, building a strong foundation in science and mathematics.",
      degree: "CBSE (Class X)",
    },
];
  
export const projects = [
    {
      id: 0,
      title: "FitLife Web Application",
      description: "Developed a full-stack fitness tracker with modular microservices and secure login via Keycloak. Integrated Google Gemini API to deliver personalized workout plans, improving recommendation accuracy to 89%.",
      image: fitlifeLogo,
      tags: ["Java", "Spring Boot", "MySQL", "MongoDB", "Keycloak", "Docker", "RabbitMQ", "React", "Gemini API"],
      github: "https://github.com/dakshsahu1803/Fit-Life",
    },
    {
      id: 1,
      title: "Apni-Car: AI-Powered Car Recommendation",
      description: "Built an ML pipeline using XGBoost and LSTM to recommend cars with 92% accuracy and forecast fuel prices. Designed a responsive web interface to showcase predictions and trends.",
      image: apniCarLogo,
      tags: ["Python", "TensorFlow", "XGBoost", "LSTM", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/dakshsahu1803/ApniCar",
      webapp: "https://visionary-entremet-43657f.netlify.app/"
    },
    {
      id: 2,
      title: "Satellite Image Segmentation (DeepLabV3+)",
      description: "Trained DeepLabV3+ on Urban-LandSat data, achieving 84% mIoU. Automated dataset preparation using Google Earth Engine and reduced manual labeling time by 30% through augmentation.",
      image: satelliteLogo,
      tags: ["PyTorch", "Google Earth Engine", "Albumentations", "OpenCV", "Deep Learning"],
      github: "https://github.com/dakshsahu1803/Satellite-Image-Segmentation-Using-DeepLabV3-",
    },
];