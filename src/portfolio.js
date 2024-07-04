/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Farheen Akhter",
  title: "Hi all, I'm Farheen Akhter",
  subTitle: emoji(
    "With expertise in both front-end and back-end development, I create scalable web applications using technologies like React, Java, Node.js. My passion for Machine Learning drives me to integrate intelligent systems into projects, leveraging AI for data-driven insights. Academically accomplished and a creative problem-solver, I am eager to contribute to innovative teams."
  ),
  resumeLink:
    "https://drive.google.com/file/d/11QP72KBv7P0k__PySTSA45XlmBrlThxa/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/FarheenAkhter786",
  linkedin: "https://www.linkedin.com/in/farheen-akhter-153a0b156/",
  gmail: "akhter0893@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What do I do?",
  subTitle: "A Graduate student at California State University(CSUSB) pursuing Master of Science in Computer Science and Engineering(CSE) completing course work in the following subjects Software Engineering, Computation Complexity Theory, Operating Systems, Data Structures and Algorithms, Artificial Intelligence, Machine Learning (Data Science, Deep Learning, Computer Vision, Generative AI), ",  
  skills: [
    emoji(
      "⚡Languages known - Python, C, C++, Java, JavaScript"
    ),
    emoji("⚡Familiarity with Deep Learning, NLP, Computer Vision, Recommendation Systems"),
    emoji(
      "⚡Applied Scikit-learn, pandas, matplotlib, pytorch, tensorflow libraries to real-world projects, optimizing performance and accuracy for data featuring or fine tuning models or handle large-scale machine learning tasks"
    ),
    // emoji("⚡Utilized SQL for data extraction, transformation, and loading (ETL) processes"),
    // emoji("⚡Presented technical research and project outcomes to both technical and non-technical audiences, ensuring clarity and engagement."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State University-San Bernardino",
      logo: require("./assets/images/csusb.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - Current",
      desc: "CGPA - 3.9",
      descBullets: [
        "Currently working as a Teaching Assistant(TA) under Director of Teaching Resources Center (TRC)",
        "Course work in Machine Learning, working over projects using LLM's,TensorFlow,Pytorch "
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "TensorFlow", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "PyTorch", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "JavaScript",
      progressPercentage: "100%"
    },
    {
      Stack: "ReactTS", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Teaching Assistant",
      company: "California State University",
      companylogo: require("./assets/images/Csusb-1.jpg"),
      date: "February 2024 – Current",
      desc: "Assisting in developing new course content, updating existing materials,grading etc for courses Algorithm Analysis II , Numerical computation-Machine Learning , Ethical hacking , computer networking and security.",
      // descBullets: [
      //   "Implemented a Machine learning model to improve current Agricultural system by detecting pest and diseases in crops",
      //   "Worked with pandas, sci-kit learn , pytorch , tensorflow"
      // ]
    },
    {
      role: "Data Scientist Intern",
      company: "MDS",
      companylogo: require("./assets/images/moroco-DS.jpg"),
      date: "February 2024 – May 2024",
      desc: "Implemented a Machine learning model to improve current Agricultural system by detecting pest and diseases in crops, Worked with pandas, sci-kit learn , pytorch , tensorflow",
      // descBullets: [
      //   "Implemented a Machine learning model to improve current Agricultural system by detecting pest and diseases in crops",
      //   "Worked with pandas, sci-kit learn , pytorch , tensorflow"
      // ]
    },
    {
      role: "Senior Software Developer",
      company: "Purple Talk",
      companylogo: require("./assets/images/xcubelabs.png"),
      date: "July 2021 – August 2023",
      desc: "As a Full stack developer participated in writing scalable and efficient code both in Java, ReactJS and implemented RESTful API’s in NodeJS, GraphQL.",
      // descBullets: [
      //   "Implemented a Machine learning model to improve current Agricultural system by detecting pest and diseases in crops",
      //   "Worked with pandas, sci-kit learn , pytorch , tensorflow"
      // ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Academic Projects",
  subtitle: "Projects on Computer vision, Deep learning , Other projects are up and running found on my github",
  projects: [
    {
      video: require("././containers/StartupProjects/videos/giraffedemo_latest.mp4"),
      projectName: "Voice Controlled Object-NLP",
      projectDesc: "Control's objects based on commands, using tensor flow speech command model",
      footerLink: [
        {
          name: "SourceCode",
          url: "https://github.com/FarheenAkhter786/MachineLearning-Portfolio/tree/main/ReactJS%20%2B%20TensorFlow.js/voice-controlled-giraffe"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      video: require("./containers/StartupProjects/videos/pose_estimation_demo.mp4"),
      projectName: "Pose Estimation Model",
      projectDesc: "Detects various poses, joints intersection best used to interpret the correct posture when excercising",
      footerLink: [
        {
          name: "SourceCode",
          url: "https://github.com/FarheenAkhter786/pose-estimation-app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      video: require("./containers/StartupProjects/videos/gesture_Recog_demo.mp4"),
      projectName: "Gesture Recognition Model",
      projectDesc: "Understands gestures best implemented in sign language detection",
      footerLink: [
        {
          name: "SourceCode",
          url: "https://github.com/FarheenAkhter786/gesture-recogntion-app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters , Appreciations in my academic and professional career",
  achievementsCards: [
    {
      title: "Single handed final year project - Ethernet enabled digital i/o controlled devices",
      subtitle:
        "My project, is showcased as a presentation model, which demonstarated the Computer Lab's gadgets being managed using Ethernet.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open for collaboration on a project/Job experience",
  number: "510-377-2570",
  email_address: "akhter0893@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
