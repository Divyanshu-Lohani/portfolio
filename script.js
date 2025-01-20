// // Reset scroll position to top on reload with a slight delay
// window.onload = () => {
//   setTimeout(() => {
//     window.scrollTo(0, 0);
//   }, 10); // Delay in milliseconds (10ms should be enough)
// };

// document.addEventListener("DOMContentLoaded", () => {
//   const navbarItems = document.querySelectorAll(".navbar p");

//   // Add click event to all navbar items
//   navbarItems.forEach((item) => {
//     item.addEventListener("click", () => {
//       // Remove 'active' class from all items
//       navbarItems.forEach((p) => p.classList.remove("active"));

//       // Add 'active' class to the clicked item
//       item.classList.add("active");
//     });
//   });
// });

// // Select all elements with .home or .logo
// document.querySelectorAll(".home, .logo").forEach((element) => {
//   element.addEventListener("click", () => {
//     document.querySelector(
//       ".dynamic-container"
//     ).innerHTML = `  <section class="home-section">
//                   <div class="home-right">

//                       <img src="./assets/image/myphoto1.png" class="myphoto" alt="myphoto">
//                   </div>
//                   <div class="home-left">

//                       <h1>
//                           Hello I'm <br>
//                           <span>Divyanshu Lohani</span>
//                       </h1>
//                       <h2 class="summary">
//                           A dedicated interpreter and AWS Solutions Architect, currently exploring
//                           the world of web development. This website is my personal space to share my journey, skills, and
//                           projects. I invite you to browse through and hope you find something that resonates with you!
//                       </h2>

//                       <buttons>
//                           <button class="btn home">Home</button>
//                           <button class="btn resume">Resume</button>
//                           <button class="btn projects">Projects</button>
//                           <button class="btn about-me">About me</button>
//                       </buttons>
//                   </div>
//               </section>`;

//     document.querySelector(".navbar .home").classList.add("active");
//     document.querySelector(".navbar .resume").classList.remove("active");
//     document.querySelector(".navbar .projects").classList.remove("active");
//     document.querySelector(".navbar .about-me").classList.remove("active");
//   });
// });

// document.querySelectorAll(".resume").forEach((element) => {
//   element.addEventListener("click", () => {
//     document.querySelector(
//       ".dynamic-container"
//     ).innerHTML = ` <section class="resume-section">
//         <div class="resume-container">
//             <h1 class="resume-title">Resume</h1>
//             <section class="work-experience">
//                 <h2>Work Experience</h2>
//                 <div class="jobs">
//                     <div class="job">
//                         <span class="job-date">October 2021 - Present</span>
//                         <div class="job-details">
//                             <h3 class="job-title">Japanese Interpreter and AWS Solutions Associate <br>
//                                 Fujitsu Limited
//                             </h3>
//                             <p class="job-description">Translated and interpreted over 200 technical documents,
//                                 business meetings, and presentations for teams in Japan, India, Malaysia, and the
//                                 Philippines, supporting communication between 50+ team members across various
//                                 departments.<br>
//                                 <br>
//                                 Developed AWS system architecture, including VPC setup with private and public
//                                 subnets, NAT gateways, and internet gateways

//                             </p>
//                         </div>
//                     </div>
//                     <div class="job">
//                         <span class="job-date">May 2020 - October 2021</span>
//                         <div class="job-details">
//                             <h3 class="job-title">Customer Service Representative <br>
//                                 Concentrix</h3>
//                             <p class="job-description">Resolved over 300 customer queries per week, maintaining an
//                                 average customer satisfaction score of 98%.<br>
//                                 <br>
//                                 Reduced response times by 30% through proactive issue identification and resolution
//                                 strategies.

//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <hr>
//             <section class="work-experience">
//                 <h2>Education</h2>
//                 <div class="jobs">
//                     <div class="job">
//                         <span class="job-date">2019-2022</span>
//                         <div class="job-details">
//                             <h3 class="job-title">Delhi University <br>
//                                 Bachelor of Commerce
//                             </h3>
//                             <p class="job-description">Completed in 2022
//                                 <br>
//                                 <br>
//                                 Scored 7.1 CGPA
//                             </p>
//                         </div>
//                     </div>
//                     <div class="job">
//                         <span class="job-date">2018-2019 </span>
//                         <div class="job-details">
//                             <h3 class="job-title">Higher Secondary(XII) CBSE <br>
//                                 Govt Boys Senior Secondary School </h3>
//                             <p class="job-description">Completed in 2019
//                                 <br>
//                                 <br>
//                                 Scored 8.6 CGPA
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <hr>
//             <section class="work-experience">
//                 <h2>Skills & Expertise</h2>
//                 <div class="jobs">
//                     <div class="job">
//                         <span class="job-date"></span>
//                         <div class="job-details">
//                             <h3 class="job-title">Japanese Language<br>
//                             </h3>
//                             <p class="job-description">Profecient in Japanese Language : JLPT N1 holder
//                                 <br>
//                                 <br>
//                                 Expertise in technical translation and global team communication
//                             </p>
//                         </div>
//                     </div>
//                     <div class="job">
//                         <span class="job-date"></span>
//                         <div class="job-details">
//                             <h3 class="job-title">Front-End Development<br>
//                             </h3>
//                             <p class="job-description">Proficient in HTML, CSS, and JavaScript
//                                 <br>
//                                 <br>
//                                 Have build various projects on HTML, CSS, and JavaScript, here
//                             </p>
//                         </div>
//                     </div>
//                     <div class="job">
//                         <span class="job-date"></span>
//                         <div class="job-details">
//                             <h3 class="job-title">AWS (Amazon Web Services) <br>
//                             </h3>
//                             <p class="job-description">Cleared AWS Solution Architect : AWS SAA-C03
//                                 <br>
//                                 <br>
//                                 Developed AWS system architecture, including VPC setup with private and public
//                                 subnets, NAT gateways, and internet gateways
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     </section>`;
//   });
// });

// document.querySelectorAll(".projects").forEach((element) => {
//   element.addEventListener("click", () => {
//     document.querySelector(
//       ".dynamic-container"
//     ).innerHTML = `<section class="project-section">
//         <div class="project-container">
//             <h1 class="project-title">Projects</h1>
//             <div class="projects">
//                 <div class="project">
//                     <div class="project-info">
//                         <h2>Spotify Clone</h2>
//                         <p>
//                             I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit
//                             Text”
//                             or
//                             double click me to add your own content and make changes to the font. I’m a great place for
//                             you
//                             to
//                             tell a story and let your users know a little more about you.
//                         </p>
//                     </div>
//                     <div class="project-image">
//                         <img src="assets/image/spotify1.png" alt="spotify Image">
//                     </div>
//                 </div>
//                 <div class="project">
//                     <div class="project-info">
//                         <h2>Tic Tac Toe</h2>
//                         <p>
//                             I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit
//                             Text”
//                             or
//                             double click me to add your own content and make changes to the font. I’m a great place for
//                             you
//                             to
//                             tell a story and let your users know a little more about you.
//                         </p>
//                     </div>
//                     <div class="project-image">
//                         <img src="assets/image/tic-tac-toe.png" alt="spotify Image">
//                     </div>
//                 </div>
//                 <div class="project">
//                     <div class="project-info">
//                         <h2>Currency Converter</h2>
//                         <p>
//                             I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit
//                             Text”
//                             or
//                             double click me to add your own content and make changes to the font. I’m a great place for
//                             you
//                             to
//                             tell a story and let your users know a little more about you.
//                         </p>
//                     </div>
//                     <div class="project-image">
//                         <img src="assets/image/currency-converter.png" alt="spotify Image">
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>`;
//   });
// });

// document.querySelectorAll(".about-me").forEach((element) => {
//   element.addEventListener("click", () => {
//     console.log("about me clicked");
//     document.querySelector(
//       ".dynamic-container"
//     ).innerHTML = `    <section class="about-me-section">
//         <div class="about-me-container">
//             <h1>About me</h1>
//             <hr>
//             <div class="about-me-info">
//                 <p>Hi, I'm Divyanshu Lohani, originally from Delhi and now living in Japan. I am working as Japanese
//                 translator
//                 and an AWS Solutions Architect, which allows me to work with both language and technology in unique
//                 ways.
//                 </p>
//                 <p>My journey in language learning led me to clear the JLPT N1, the highest level of proficiency in the
//                 language, and I also hold certifications in AWS Cloud Practitioner and Solutions Architect Associate.
//                 </p>
//                 <p>I have a passion for technology and have recently ventured into web development—this website is one of
//                 the
//                 results of that new learning experience. When I'm not working, I enjoy playing cricket, watching anime,
//                 and
//                 always seeking opportunities to learn something new.</p>
//             </div>
//         </div>
//     </section>`;
//   });
// });

// Reset scroll position on reload
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
});

// Helper function to load content dynamically
function loadContent(sectionHTML, activeClass) {
  const container = document.querySelector(".dynamic-container");
  container.innerHTML = sectionHTML;

  // Update active navbar item
  document.querySelectorAll(".navbar p").forEach((item) => {
    item.classList.remove("active");
  });
  document.querySelector(`.navbar .${activeClass}`).classList.add("active");
}

// Dynamic content for each section
const homeHTML = `
    <section class="home-section">
                  <div class="home-right">
      
                      <img src="./assets/image/myphoto1.png" class="myphoto" alt="myphoto">
                  </div>
                  <div class="home-left">
      
                      <h1>
                          Hello I'm <br>
                          <span>Divyanshu Lohani</span>
                      </h1>
                      <h2 class="summary">
                          A dedicated interpreter and AWS Solutions Architect, currently exploring
                          the world of web development. This website is my personal space to share my journey, skills, and
                          projects. I invite you to browse through and hope you find something that resonates with you!
                      </h2>
      
                      <buttons>
                          <button class="btn home">Home</button>
                          <button class="btn resume">Resume</button>
                          <button class="btn projects">Projects</button>
                          <button class="btn about-me">About me</button>
                      </buttons>
                  </div>
    </section>`;

const resumeHTML = `
    <section class="resume-section">
        <div class="resume-container">
            <h1 class="resume-title">Resume</h1>
            <section class="work-experience">
                <h2>Work Experience</h2>
                <div class="jobs">
                    <div class="job">
                        <span class="job-date">October 2021 - Present</span>
                        <div class="job-details">
                            <h3 class="job-title">Japanese Interpreter and AWS Solutions Associate <br>
                                Fujitsu Limited
                            </h3>
                            <p class="job-description">Translated and interpreted over 200 technical documents,
                                business meetings, and presentations for teams in Japan, India, Malaysia, and the
                                Philippines, supporting communication between 50+ team members across various
                                departments.<br>
                                <br>
                                Developed AWS system architecture, including VPC setup with private and public
                                subnets, NAT gateways, and internet gateways

                            </p>
                        </div>
                    </div>
                    <div class="job">
                        <span class="job-date">May 2020 - October 2021</span>
                        <div class="job-details">
                            <h3 class="job-title">Customer Service Representative <br>
                                Concentrix</h3>
                            <p class="job-description">Resolved over 300 customer queries per week, maintaining an
                                average customer satisfaction score of 98%.<br>
                                <br>
                                Reduced response times by 30% through proactive issue identification and resolution
                                strategies.

                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr>
            <section class="work-experience">
                <h2>Education</h2>
                <div class="jobs">
                    <div class="job">
                        <span class="job-date">2019-2022</span>
                        <div class="job-details">
                            <h3 class="job-title">Delhi University <br>
                                Bachelor of Commerce
                            </h3>
                            <p class="job-description">Completed in 2022
                                <br>
                                <br>
                                Scored 7.1 CGPA
                            </p>
                        </div>
                    </div>
                    <div class="job">
                        <span class="job-date">2018-2019 </span>
                        <div class="job-details">
                            <h3 class="job-title">Higher Secondary(XII) CBSE <br>
                                Govt Boys Senior Secondary School </h3>
                            <p class="job-description">Completed in 2019
                                <br>
                                <br>
                                Scored 8.6 CGPA
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr>
            <section class="work-experience">
                <h2>Skills & Expertise</h2>
                <div class="jobs">
                    <div class="job">
                        <span class="job-date"></span>
                        <div class="job-details">
                            <h3 class="job-title">Japanese Language<br>
                            </h3>
                            <p class="job-description">Profecient in Japanese Language : JLPT N1 holder
                                <br>
                                <br>
                                Expertise in technical translation and global team communication
                            </p>
                        </div>
                    </div>
                    <div class="job">
                        <span class="job-date"></span>
                        <div class="job-details">
                            <h3 class="job-title">Front-End Development<br>
                            </h3>
                            <p class="job-description">Proficient in HTML, CSS, and JavaScript
                                <br>
                                <br>
                                Have build various projects on HTML, CSS, and JavaScript, here
                            </p>
                        </div>
                    </div>
                    <div class="job">
                        <span class="job-date"></span>
                        <div class="job-details">
                            <h3 class="job-title">AWS (Amazon Web Services) <br>
                            </h3>
                            <p class="job-description">Cleared AWS Solution Architect : AWS SAA-C03 
                                <br>
                                <br>
                                Developed AWS system architecture, including VPC setup with private and public
                                subnets, NAT gateways, and internet gateways
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>`;

const projectsHTML = `
    <section class="project-section">
        <div class="project-container">
            <h1 class="project-title">Projects</h1>
            <div class="projects">
                <div class="project">
                    <div class="project-info">
                        <h2>Spotify Clone</h2>
                        <p>
                            Developed a Spotify Clone web app using HTML, CSS, and JavaScript.  
                            <br>  
                            Integrated a dynamic playlist system with asynchronous fetch API to load songs.  
                            <br>  
                            Built a custom audio player with play, pause, next, previous, and seek bar functionality.  
                            <br>  
                            Added volume controls with mute/unmute toggle and styled visual feedback.  
                            <br>  
                            Designed a responsive UI featuring album lists and a collapsible side menu.  
                            <br>  
                            Implemented real-time updates for song duration and progress tracking.  
                            <br>  
                            Optimized user interactions using dynamic event listeners for playlists and albums.  
                            <br>  
                        </p>
                    </div>
                    <div class="project-image">
                      <a href="https://divyanshu-spotify.freewebhostmost.com/"><img src="assets/image/spotify1.png" alt="spotify Image"></a>
                    </div>
                </div>
                <div class="project">
                    <div class="project-info">
                        <h2>Tic Tac Toe</h2>
                        <p>
                            This is an interactive web-based Tic Tac Toe game.<br>  
                            The game features a clean and responsive design, allowing two players to enjoy the classic strategy game.<br>  
                            Players can take turns marking X or O on a 3x3 grid, with the objective of aligning three symbols horizontally, vertically, or diagonally to win.<br>  
                            The website is user-friendly, runs smoothly, and is perfect for casual gameplay.<br>  

                        </p>
                    </div>
                    <div class="project-image">
                       <a href="https://divyanshu-lohani.github.io/Tic-Tac-Toe/"><img src="assets/image/tic-tac-toe.png" alt="spotify Image"></a>
                    </div>
                </div>
                <div class="project">
                    <div class="project-info">
                        <h2>Currency Converter</h2>
                        <p>
                            This is a user-friendly web-based currency converter.<br>  
                            The tool allows users to convert amounts between multiple currencies quickly and accurately.<br>  
                            It features a clean and responsive design, ensuring compatibility across various devices.<br>  
                            Users can select currencies from dropdown menus, input the amount to convert, and view real-time conversion results.<br>  
                            The website is ideal for anyone needing instant currency conversion for travel, business, or personal use.<br>  

                        </p>
                    </div>
                    <div class="project-image">
                        <a href="https://divyanshu-lohani.github.io/currency-converter/"><img src="assets/image/currency-converter.png" alt="spotify Image"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

const aboutMeHTML = `
    <section class="about-me-section">
        <div class="about-me-container">
            <h1>About me</h1>
            <div class="about-me-info">
                <p>Hi, I'm Divyanshu Lohani, originally from Delhi and now living in Japan. I am working as Japanese
                translator
                and an AWS Solutions Architect, which allows me to work with both language and technology in unique
                ways.
                </p>
                <p>My journey in language learning led me to clear the JLPT N1, the highest level of proficiency in the
                language, and I also hold certifications in AWS Cloud Practitioner and Solutions Architect Associate.
                </p>
                <p>I have a passion for technology and have recently ventured into web development—this website is one of
                the
                results of that new learning experience. When I'm not working, I enjoy playing cricket, watching anime,
                and
                always seeking opportunities to learn something new.</p>
            </div>
        </div>
    </section>`;

// Event delegation for navbar
// Select all the navbar items
document.querySelectorAll(".navbar p").forEach((item) => {
  item.addEventListener("click", () => {
    // Scroll back to the top
    window.scrollTo(0, 0);

    // Optionally, add logic to load content, if required
    if (item.classList.contains("home")) {
      loadContent(homeHTML, "home");
    } else if (item.classList.contains("resume")) {
      loadContent(resumeHTML, "resume");
    } else if (item.classList.contains("projects")) {
      loadContent(projectsHTML, "projects");
    } else if (item.classList.contains("about-me")) {
      loadContent(aboutMeHTML, "about-me");
    }
  });
});

// Event delegation for navbar
document
  .querySelector(".dynamic-container")
  .addEventListener("click", (event) => {
    // Check if the target element contains the required class
    if (event.target.classList.contains("home")) {
      loadContent(homeHTML, "home");
    } else if (event.target.classList.contains("resume")) {
      loadContent(resumeHTML, "resume");
    } else if (event.target.classList.contains("projects")) {
      loadContent(projectsHTML, "projects");
    } else if (event.target.classList.contains("about-me")) {
      loadContent(aboutMeHTML, "about-me");
    }
  });
