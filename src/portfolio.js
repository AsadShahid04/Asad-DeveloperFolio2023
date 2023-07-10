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
  username: "Asad Shahid",
  title: "Hi all, I'm Asad",
  subTitle: emoji(
    "A passionate Software Developer having an experience of building Web and Mobile applications along with developing & applying state of the art Machine Learning models!"
  ),
  resumeLink:
    "https://docs.google.com/document/d/10Rrbhk_uqKamrbSo1bK_Dt26UIjGTlQo/edit?usp=sharing&ouid=111821426187858764882&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AsadShahid04",
  linkedin: "https://www.linkedin.com/in/asad-shahid-9553a91b0/",
  gmail: "asadshahid623@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  instagram: "https://www.instagram.com/a1sad.shahid/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I know...",
  subTitle:
    "CRAZY MACHINE LEARNING ENGINEER & CODER LOOKING TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "→ Develop interactive Front end / User Interfaces for web and mobile applications"
    ),
    emoji("→ Create, test, and deploy robust pre-trained Machine Learning models"),
    emoji(
      "→ Control and manage cloud infrastructure using Terraform and Aviatrix"
    )
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
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fa-brands fa-square-js"
    },
    {
      skillName: "Android Studio",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Confluence",
      fontAwesomeClassname: "fab fa-confluence"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Las Positas College",
      logo: require("/Users/asadshahid/CodingFiles/Asad-DeveloperFolio/src/assets/images/LasPositasCollege.jpeg"),
      subHeader: "Associate of Science, Computer Science (AS)",
      duration: "June 2022 - May 2024",
      //desc: "Currently attending Las Positas to finish general education requirements before transfering to UC Davis in the Fall of 2024 for a BS in Computer Science & Engineering.",
      descBullets: [
        "Member of Muslim Student Association",
        "ICC Representative of Computer Science Club",
        "Awarded the Math, Computer Science, and Engineering Scholarship"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Sadiq",
      companylogo: require("/Users/asadshahid/CodingFiles/Asad-DeveloperFolio/src/assets/images/SadiqWhiteTransparent.png"),
      date: "April 2023 – Present",
      //desc: "Sadiq aims to empower buyers, sellers, and their communities, focused on building a safe, trusted, and technologically advanced platform that enables a new era of commerce. We are disrupting traditional experiences, opening a gateway to optimal user engagement and personalized shopping through state-of-the-art (SOTA) algorithms developed by Sadiq's AI Applied Research Team. We are a diverse team of moonshot thinkers and creative problem solvers with experience in e-commerce and technology development, working to evolve the latest happenings in global social commerce.",
      descBullets: [
        "Collaborate with the Machine Learning Engineering team to research, develop, and test advanced models for enhancing the functionality of the Sadiq platform.",
        "Stay updated on industry trends and technologies to continuously enhance technical expertise.",
        "Actively contribute to team activities, fostering a collaborative and innovative work environment that drives forward-thinking solutions."
      ]
    },
    {
      role: "Product Manager/Machine Learning Engineer - Incubator Program",
      company: "AI Camp",
      companylogo: require("/Users/asadshahid/CodingFiles/Asad-DeveloperFolio/src/assets/images/AICamp.jpeg"),
      date: "September 2022 – November 2022",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Played a leadership role in the team by helping maintain the focus of the group, creating and assigning individual tasks to team members to ensure high-quality, on-time deliverables",
        "Used Expo.dev and React to create a mobile application that uses models hosted on Roboflow to detect and alert officials about unlit and venting flares within oil & gas extraction operation plants"
      ]
    },
    {
      role: "Website Developer",
      company: "Mountain House Muslim Association",
      companylogo: require("./assets/images/MHMALogo.png"),
      date: "October 2021 – March 2022",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Developed a full-stack website application using React and MongoDB for Mountain House Muslim Association, serving 1,000+ community members.",
        "Thoroughly tested and debugged the website application using industry-standard tools like Jira and Confluence, efficiently tracking, resolving, and documenting issues to ensure a reliable and error-free user experience."
      ]
    },
    {
      role: "Marketing Research Intern",
      company: "Grotabyte",
      companylogo: require("./assets/images/GrotabyteLogo.jpeg"),
      date: "March 2021 – Nov 2021",
      descBullets: [
        "Conducted research for technical use cases of our archive storage software",
        "Looked into country legislation regarding consumer privacy",
        "Highlighted comparative differences between competitors’ websites and features to help in the future development of the Grotabyte website."
      ]
    },
    {
      role: "Marketing Director",
      company: "Provision Hacks",
      companylogo: require("./assets/images/ProvisionHacksLogo.png"),
      date: "Dec 2020 – Jul 2021",
      desc: "One of the founding members of Provision Hacks helping build and manage social media pages, website development, contacting and gathering sponsors, and creating online digital content to post on socials."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "TECH SOLUTIONS I HELPED IGNITE:",
  projects: [
    {
      image: require("/Users/asadshahid/CodingFiles/Asad-DeveloperFolio/src/assets/images/ProjectFireStartLogo.png"),
      projectName: "Project Firestart",
      projectDesc:
        "A React application which calls a Roboflow-hosted AI model to classify flare images, utilizing the Twilio API to notify the user's entered phone number if an unlit flare is detected.",
      footerLink: [
        {
          name: "Watch Live Demo",
          url: "https://www.youtube.com/watch?v=Ts2MYXkeRdw&ab_channel=ArhantChoudhary"
        },
        {
          name: "View Repository",
          url: "https://github.com/organization-x/project-firestart"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("/Users/asadshahid/CodingFiles/Asad-DeveloperFolio/src/assets/images/parallelprocessingLogo.png"),
      projectName: "Detecting Financial Fraud Cases",
      projectDesc:
        "Together, my team and I created multiple machine-learning models using Scikit-learn to detect financial frauds that happened across multiple countries/states. We were able to create our own website using Bootstrap, HTML, CSS, and Flask, that details our findings, exploratory data analysis using Pandas, Matplotlib, Numpy, and Seaborn , and descriptions of how each learning model works.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://asadshahid04.github.io/FinalParallelProcessingWebsite/index.html?"
        }
      ]
    },
    {
      image: require("/Users/asadshahid/CodingFiles/Asad-DeveloperFolio/src/assets/images/BioLockAppLogo.png"),
      projectName: "Bio Lock",
      projectDesc:
        "Led a team in the successful development of an Android app for our Computer Science capstone project, implementing robust biometric authentication to secure select apps. Leveraged Android Studio, SDK, and authentication libraries to create a user-friendly and secure solution.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/AsadShahid04/BioLock_Updated"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications"),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Getting Started with Terraform for Google Cloud",
      subtitle:
        "The Getting Started with Terraform for Google Cloud certification equipped me with the essential knowledge and skills to effectively use Terraform for provisioning and managing infrastructure on Google Cloud, including writing configurations, creating resources, utilizing modules and variables, and applying infrastructure as code principles.",
      image: require("/Users/asadshahid/CodingFiles/Asad-DeveloperFolio/src/assets/images/cloud-twitter-avatar.png"),
      footerLink: [
        {
          name: "Certificate Pending",
          url: "https://www.coursera.org/learn/getting-started-with-terraform-for-google-cloud/home/module/1"
        }
      ]
    },
    {
      title:
        "Aviatrix Certified Engineer Multicloud Network Automation Specialty (IaC)",
      subtitle:
        "This certificate equipped me with comprehensive knowledge and practical skills in automating infrastructure using Aviatrix. I learned how to programmatically deploy and manage network resources, automate complex configurations, and enhance scalability and resilience. This certification enables me to efficiently design, deploy, and manage infrastructure using Aviatrix's IaC capabilities.",
      image: require("/Users/asadshahid/CodingFiles/Asad-DeveloperFolio/src/assets/images/ACEIaC.png"),
      footerLink: [
        {
          name: "Certificate Pending",
          url: "https://www.credly.com/org/aviatrix/badge/multicloud-network-automation-specialty"
        }
      ]
    },
    {
      title:
        "Aviatrix Certified Engineer Multicloud Network Associate Training",
      subtitle:
        "This training equipped me with comprehensive knowledge and skills in multicloud network engineering, including designing secure and scalable networks, optimizing performance, implementing advanced networking features, and troubleshooting network issues in complex multicloud environments using the Aviatrix platform.",
      image: require("/Users/asadshahid/CodingFiles/Asad-DeveloperFolio/src/assets/images/ACE_Associate.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://verify.skilljar.com/c/3myuwn9onjc8"
        }
      ]
    },
    {
      title: "Introduction to Cloud Computing",
      subtitle:
        "This course has equipped me with a comprehensive understanding of cloud computing, including its characteristics, history, business case, emerging technologies, service models, deployment models, infrastructure components, trends, and popular cloud platforms.",
      image: require("/Users/asadshahid/CodingFiles/Asad-DeveloperFolio/src/assets/images/Dev_Skills_Network_-_Cloud_Computing_Core.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/verify/PHP7UT37Z2SN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        }
      ]
    },
    {
      title: "Introduction to Git and GitHub",
      subtitle:
        "This course has taught me the importance of version control for coding and collaboration. I have learned to install and run Git on my local machine, effectively use and interact with GitHub, and collaborate with others through remote repositories. I have also gained skills in using Git, version control systems, interacting with GitHub, reverting changes, and creating pull requests.",
      image: require("/Users/asadshahid/CodingFiles/Asad-DeveloperFolio/src/assets/images/GitImage.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/verify/8CWK8K997SEP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
        }
      ]
    },
    {
      title: "Machine Learning with Python",
      subtitle:
        "Certified by FreeCodeCamp, I learned concepts such as data analysis, data visualization, machine learning, and natural language processing.",
      image: require("/Users/asadshahid/CodingFiles/Asad-DeveloperFolio/src/assets/images/MLwithPythonCertImage.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://freecodecamp.org/certification/fccf41112cd-bc83-44bf-b418-1e2a55f111bc/machine-learning-with-python-v7"
        }
      ]
    },
    {
      title: "Introduction to SQL",
      subtitle:
        "Successfully completed the Introduction to SQL course on CodeHS. I learned concepts such as basic querying, filtering queries, advanced filters, ordering results, joining tables, and also various SQL functions. ",
      image: require("./assets/images/SQL_ICON_CODEHS.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://codehs.com/certificate/PphVy9"
        }
      ]
    },
    {
      title: "Golden State Seal of Merit Award Winner",
      subtitle:
        "The Golden State Seal Merit Diploma is given to seniors who have demonstrated mastery of the high school curriculum in at least six subject areas four of which are English-language arts, mathematics, science, and U.S. history, with the remaining two subject matter areas selected by the student. The seal is awarded jointly by the State Board of Education and the State Superintendent of Public Instruction.",
      image: require("./assets/images/GoldenStateSealofMerit.png"),
      footerLink: []
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
  display: false // Set false to hide this section, defaults to true
};

//TO-DO: Work on Testimonials Section
const talkSection = {
  title: "TESTIMONIALS",
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me!"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "(408)-430-2623",
  email_address: "asadshahid623@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "a1sadshahid", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

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
  twitterDetails
};
