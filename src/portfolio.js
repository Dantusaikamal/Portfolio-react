/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, 
};

//Home Page
const greeting = {
  title: "Dantu Sai Kamal",
  logo_name: "Dantusaikamal",
  nickname: "Sai Kamal",
  subTitle:
    "Hi, I'm Sai kamal, a Full Stack Developer 🚀 from Hyderabad, India. Currently a sophomore student contributing to various open-sourced projects and working on quite a few personal projects.",
  resumeLink:
    "https://drive.google.com/file/d/1u35utHrhX2EzVLsltyKgFVA3j17Y9R4p/view?usp=sharing",
  portfolio_repository: "https://github.com/Dantusaikamal/Portfolio-react",
};

const socialMediaLinks = [
  //  Your Social Media Link, 
  //  github: "https://github.com/Dantusaikamal/",
  //  linkedin: "https://www.linkedin.com/in/dantu-sai-kamal/",
  //  gmail: "dantusaikamal@gmail.com",
  //  twitter: "https://twitter.com/saikamaldantu/",
  //  instagram: "https://www.instagram.com/sai_kamal7/"

  {
    name: "Github",
    link: "https://github.com/dantusaikamal/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dantu-sai-kamal/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:dantusaikamal@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/saikamaldantu/",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  
  {
    name: "Instagram",
    link: "https://www.instagram.com/sai_kamal7/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React, Vue, Bootstrap.",
        "⚡ Developing mobile applications using Flutter, React Native ",
        "⚡ Creating application backend in Node, PHP",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },

        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/dantusaikamal",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/dantusaikamal",
    },
    
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/dantusaikamal",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bharat Institute of Engineering and Technology",
      subtitle: "B.Tech. in Computer Science Engineering",
      logo_path: "biet_logo.png",
      alt_name: "BIET HYD",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I secured first place in Hackathon with over 100 participants for coming up with the idea of Agrodrone. Though agrodrones already exist, our model is more affordable and efficient.",
      ],
      website_link: "http://biet.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "ML with Big Data",
      subtitle: "- Mai Nguyen",
      logo_path: "USD_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/LXK5GKA5USDE",
      alt_name: "Deep Learning",
      color_code: "#D83B0199",
    }, 
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YQPW7MRUBVAB",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Convolution Neural Networks",
      subtitle: "- DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/972f79d557642e036ecb58173d9fa6ce",
      alt_name: "Deeplearning.AI",
      color_code: "#4285F499",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/DTGAXLXP9WCC",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },

    {
      title: "SQL for Data Science",
      subtitle: "- University of California, Davis",
      logo_path: "UC_Davis_logo.png",
      certificate_link:
        "https://coursera.org/share/aceb208e4869b4cddb2b4b05e9bd1d5e",
      alt_name: "UC Davis",
      color_code: "#1F70C199",
    },
    {
      title: "Data Visualization",
      subtitle: "- John Hart",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://coursera.org/share/14adc28b47253bdcf02f77800194fd61",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },    
    {
      title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      subtitle: "- The Hong Kong University of Science and Technology",
      logo_path: "HKU.jpg",
      certificate_link:
        "https://coursera.org/share/6aca47adece3f7840564929e9528cd70",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Linux for Developers",
      subtitle: "- The Linux Foundation",
      logo_path: "Tlf_logo.png",
      certificate_link:
        "https://coursera.org/share/b1d12afb0f897fb2706a5ae3389c02fb",
      alt_name: "The Linux Foundation",
      color_code: "#0C9D5899",
    },

       {
      title: "Programming for Web with JavaScript",
      subtitle: "- Chris Murphy",
      logo_path: "penn_logo.png",
      certificate_link:
        "https://courses.edx.org/certificates/a87191b5c0124260bfa135c3a1cf0bf2",
      alt_name: "edX",
      color_code: "#FFBB0099",
    },

  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have completed various Internships in the field of Full Stack Development that gave me industry exposure on both Front End and Back End development. Apart from Developing Web and Mobile applications, I love teaching and writing about Tech. Hence I actively contribute to Open Source Communities.",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [
    //     {
    //       title: "React Developer",
    //       company: "",
    //       company_url: "",
    //       logo_path: "",
    //       duration: "June 2020 - PRESENT",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on so and so project in BIET company",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: " ML Developer",
    //       company: "BIET Solutions",
    //       company_url: "]",
    //       logo_path: "",
    //       duration: "May 2020 - Oct 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "",
    //       color: "#9b1578",
    //     },
    //     
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full stack developer Intern",
          company: "HFIL Technologies Pvt Ltd.",
          company_url: "https://www.hfilabs.com/",
          logo_path: "hfil_logo.png",
          duration: "November 2020 - Present",
          location: "Hyderabad, Telangana",
          description:
            "I have worked on project of designing and developing a Web application and a mobile application. I'm designing wireframes using Figma and I'm developing the applications using ReactJS, React Native, Firebase.",
          color: "#ee3c26",
        },
        {
          title: "Web Design and Development Intern",
          company: "The Sparks Foundation",
          company_url:
            "https://www.thesparksfoundationsingapore.org/",
          logo_path: "TSF_logo.png",
          duration: "September 2020 - November 2020",
          location: "Work From Home",
          description:
            " During this Internship, I developed a banking web application in which we can transfer amount from one user to another without any login page or other extra redundant features. I used Heroku to deploy my web application. For this project, I used tools including Git, XAAMP, MySQL Workbench, JawsDB and also PHP and MySQL for backend, HTML, CSS, JS, Bootstrap for frontend.",
          color: "#0071C5",
        },
        {
          title: "Linux developer Intern",
          company: "Swecha",
          company_url:
            "https://swecha.org/",
          logo_path: "logo2.png",
          duration: "July 2020 - August 2020",
          location: "Work From Home",
          description:
            "Developed a Debian Distro, an Operating System based on Linux kernel. The Distro comes pre-installed with all the softwares and Engineer would require.",
          color: "#0071C5",
        },

      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC BIET",
    //       company_url:
    //         "",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2020 - Present",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating peoper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Web Design and Development projects and deploy them to web applications using Heroku.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will try to reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@dantusaikamal",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Brundavan homes, Udyog nagar, Badangpet, Hyderabad.",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MrWkeWdGNXXo7ozW8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9177114722",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
