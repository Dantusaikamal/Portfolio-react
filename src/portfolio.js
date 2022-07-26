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
    "Hi, I'm Sai kamal, a Full Stack Developer 🚀 from Hyderabad, India. I'm currently an undergraduate student contributing to various open-sourced projects and working on quite a few personal projects.",
  resumeLink:
    "https://drive.google.com/file/d/1A_ou2CMzGRgLUwI5jz2onjcF_GsKHYtG/view?usp=sharing",
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
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/dantusaikamal",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/dantusaikamal",
    // },
    
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/dantusaikamal",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bharat Institute of Engineering and Technology",
      subtitle: "B.Tech. in Computer Science Engineering",
      logo_path: "biet_logo.png",
      alt_name: "BIET HYD",
      duration: "2019 - 2023 (Pursuing)",
      descriptions: [
        "⚡ I took various software engineering courses like Machine Learning, Data Structures, Algorithms, Computer Networks, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ Published more than 5 research papers in national and international repositories on Machine learning, Neural Networks, GANs and other technologies. ",
        "⚡ I secured first place in Hackathon with over 100 participants for coming up with the idea of Agrodrone. Though agrodrones already exist, our model is more affordable and efficient.",
        "⚡ I also won first place in Start-up and business model competition conducted by Institute Innovation Council, an initiative of Ministry of Education, India.",
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
          title: "Lead, Google DSC",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "August 2021 - July 2022",
          location: "Hyderabad, Telangana",
          description:
            "• Conducted hands-on workshops and sessions on Web Development, Docker, Kotlin, Kubernetes, Cloud, Git. \n\
             • Part of 250 students from India that were selected as Google Developer Students Clubs lead in 2021. \n\
             • Established a technical community in the college and trained multiple people to lead the community. \n\
             • Built various open-sourced projects and encouraged various students to contribute to the projects.",
          color: "#4285F4",
        },

        {
          title: "Full stack developer Intern",
          company: "HFIL Technologies Pvt Ltd.",
          company_url: "https://www.hfilabs.com/",
          logo_path: "hfil_logo.png",
          duration: "November 2020 - July 2021",
          location: "Hyderabad, Telangana",
          description: [
            "• Led the Development team of a Start-up that focuses on Electric vehicle charging stations and smart energy meters.", 
            "• Built cross platform scalable mobile applications using flutter and deployed the data pipelines on AWS EC2, and Azure instances.", 
            "• Designed UI wireframes for the applications using Figma and also documentation for the applications.", 
            "• Effectively managed projects from start to finish.",
            "• Improved the response time of applications by over 800 milliseconds, using advanced frameworks, data structures, caching mechanismand optimized code in order to reduce the number of queries to the database."
          ],
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
            "Built an Operating System for Engineering colleges in the state of Telangana that comes pre-installed with all the software an Engineer of any majors would require. The Operating System is based on Linux kernel and is made open-sourced in order to encourage other students contribute to the Operating System and learn more about Operating Systems.",
          color: "#0071C5",
        },

      ],
    },
    {
      title: "More",
      experiences: [
        {
          title: "IBM Z Student",
          company: "IBM",
          company_url: "https://www.ibm.com/",
          logo_path: "ibm_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "IBM Z Student is a program for university students to lead the awareness and use of IBM Cloud and Mainframe tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing and Mainframe concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Lead",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - present",
          location: "Hyderabad, Telangana",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Hyderabad city. We have built opensource community of our own college.",
          color: "#000000",
        },
        
      ],
    },
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
    profile_image_path: "kamal1.jpg",
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
