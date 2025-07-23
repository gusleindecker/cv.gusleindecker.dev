"use client";
import {
  Award,
  Building,
  Calendar,
  Download,
  Globe,
  GraduationCap,
  Linkedin,
  MapPin,
  PencilRuler,
  User,
} from "lucide-react";
import { getTimeElapsed } from "@/lib/utils";

export default function CVPage() {
  // CV data with personal info from environment variables
  const cvData = {
    personalInfo: {
      name: process.env.NEXT_PUBLIC_FULL_NAME || "Your Name",
      title: "Senior Front-end Engineer",
      location: process.env.NEXT_PUBLIC_LOCATION || "Your Location",
      phone: process.env.NEXT_PUBLIC_PHONE || "+1 (555) 123-4567",
      email: process.env.NEXT_PUBLIC_EMAIL || "your.email@example.com",
      linkedin:
        process.env.NEXT_PUBLIC_LINKEDIN ||
        "https://www.linkedin.com/in/your-profile/",
      github:
        process.env.NEXT_PUBLIC_GITHUB || "https://github.com/your-username",
      website: process.env.NEXT_PUBLIC_WEBSITE || "https://your-website.com/",
      summary: [
        "Expert in Vue.js, TypeScript, JavaScript (ES6+), HTML5, CSS3 (including Sass/Tailwind), with deep knowledge of frontend build tools (Vite, Webpack) and testing frameworks (Jest, Cypress).",
        "Led architecture, development, and maintenance of business-critical web applications, consistently improving performance (reducing load time by 30-50%) and enhancing UX. I've built scalable UI libraries, implemented component-driven design systems, and orchestrated end-to-end feature delivery, from planning to deployment, impacting both developer productivity and user satisfaction.",
        "Thrive in fast-paced, Agile environments: I collaborate closely with cross-functional teams (designers, backend, QA), contribute actively to code reviews and CI/CD pipelines, and mentor junior engineers, driving high-quality, maintainable code under tight delivery schedules.",
        "Skilled at aligning technical solutions to strategic goals, I blend hands-on coding with visionary thinking to build robust, future-proof front ends. I'm now looking to elevate complex, user-centric products with impact-driven engineering and innovation.",
      ],
    },
    experience: [
      {
        company: "Self Employed",
        description: "",
        location: "Remote",
        totalDuration: `June 2025 - Present (${getTimeElapsed(
          new Date("2025-06-15")
        )})`,
        positions: [
          {
            title: "Freelance Front-end Engineer / UX/UI Designer",
            duration: "June 2025 - Present",
            description: [
              "Delivering front-end engineering and UX/UI consulting services while actively seeking full-time opportunities. Specializing in building performant, scalable web applications using Vue.js, Nuxt, React or Next.js.",
              "Designing and developing responsive, accessible UIs with a strong focus on performance and usability.",
              "Collaborating with clients and cross-functional teams to deliver robust features from concept to production.",
              "Leveraging modern tools such as Vite, Webpack, Vitest, ESLint, and Prettier to ensure code quality and delivery speed.",
              "Contributing to open source projects to give back to the dev community, stay current with best practices, and collaborate with engineers worldwide.",
              "Expanding backend skills with Node.js, Express.js, NestJS, MongoDB and Supabase to gain a broader full-stack perspective.",
              "Open to full-time roles where I can apply my technical expertise and product thinking to build impactful user-centric applications.",
            ],
            skills: [
              "Accessibility",
              "Adobe XD",
              "CSS3",
              "ESLint",
              "Figma",
              "Git",
              "HTML5",
              "JavaScript",
              "Next.js",
              "Nuxt",
              "Prettier",
              "React",
              "Responsive Design",
              "Tailwind CSS",
              "TypeScript",
              "UI Design",
              "Usability",
              "UX Design",
              "Vercel",
              "Vite",
              "Vitest",
              "Vue.js",
              "Web Performance Optimization",
            ],
          },
        ],
      },
      {
        company: "Software Mind North America",
        description:
          "Software Mind is a global software company offering engineering, cloud, and AI solutions with 1,500+ experts worldwide.",
        location: "Remote",
        totalDuration: `July 2021 - June 2025 (${getTimeElapsed(
          new Date("2021-07-15"),
          new Date("2025-06-15")
        )})`,
        positions: [
          {
            title: "Team Leader",
            duration: "July 2024 - June 2025",
            description: [
              "• Managed a team of 6 consultants across diverse projects.",
              "• Provided technical mentorship and individual support, facilitating both personal and professional growth.",
              "• Held regular 1:1s and team syncs to ensure alignment, resolve blockers, and foster a collaborative, high-performing environment.",
              "• Played a key role in maintaining team morale and cohesion, ensuring smooth project execution and consistent delivery.",
            ],
            skills: [
              "Mentoring",
              "Project Management",
              "Team Building",
              "Team Leadership",
            ],
          },
          {
            title: "Senior Frontend Engineer - DealerOn contractor",
            duration: "July 2022 - June 2025",
            description: [
              "Worked as a Senior Frontend Engineer supporting the development and maintenance of DealerOn's CMS platforms—tools that power digital experiences for thousands of automotive dealerships. Collaborated cross-functionally with product and engineering teams to modernize the front-end stack and elevate development practices across the company.",
              "Key contributions:",
              "• Maintained and enhanced internal CMS applications, ensuring performance, scalability, and maintainability.",
              "• Spearheaded the development of a reusable UI component library, promoting consistency and accelerating feature delivery across multiple internal tools.",
              "• Led the creation and deployment of internally used npm packages, streamlining code reuse and reducing duplication across projects.",
              "• Modernized legacy codebases by introducing modern frontend practices including improved state management, better modularization, and performance optimizations.",
              "• Championed unit testing adoption, resulting in a significant reduction in production bugs; mentored other teams on how to design and implement effective tests.",
              "Played a key role in improving the developer experience, establishing standards and processes that increased code quality and development velocity. This work helped support DealerOn's continued growth and scalability as a leading provider of digital retail solutions for the automotive industry.",
            ],
            skills: [
              "HTML5",
              "JavaScript",
              "Lit",
              "Node.js",
              "Pinia",
              "Tailwind CSS",
              "TanStack Table",
              "Testing Library",
              "TypeScript",
              "Vite",
              "Vitest",
              "Vue Router",
              "Vue Use",
              "Vue.js",
              "Web Components",
            ],
          },
          {
            title: "Senior Frontend Engineer - Oliver Wyman contractor",
            duration: "July 2021 - June 2022",
            description: [
              "Contributed to the development of MultiRail Web, a strategic freight railroad service-design planning tool. Worked closely with product managers and backend developers to translate complex business requirements into a high-performance, intuitive user interface.",
              "Key contributions:",
              "• Built and maintained core UI components using Vue.js and JavaScript, ensuring scalability and maintainability.",
              "• Developed dynamic charts with Highcharts, interactive maps with MapBox, and highly customizable tables with AG-Grid, providing users with powerful data analysis and visualization tools.",
              "• Led the implementation of unit tests to boost confidence in code quality and reduce regressions during iterative development.",
              "• Actively collaborated in refining UX details and workflows to support advanced features such as capacity planning, scenario simulation, and optimization dashboards.",
              "• Helped establish frontend best practices and improve the handoff process from design to development.",
            ],
            skills: [
              "AG-Grid",
              "CSS3",
              "HighCharts.js",
              "HTML5",
              "JavaScript",
              "Jest",
              "Sass",
              "Vue Router",
              "Vue.js",
              "Vuex",
            ],
          },
        ],
      },
      {
        company: "ADP Brazil Labs",
        description:
          "ADP Brazil Labs is ADP's tech hub in Porto Alegre, focused on building next-gen cloud HCM solutions. With 500+ employees, it supports global product development.",
        location: "Porto Alegre, RS, Brazil",
        totalDuration: `October 2019 - July 2021 (${getTimeElapsed(
          new Date("2019-10-15"),
          new Date("2021-07-15")
        )})`,
        positions: [
          {
            title: "Senior Software Engineer - Frontend Specialist",
            duration: "October 2019 - July 2021",
            description: [
              "• Contributed to internal tools that supported incident tracking and monitoring across ADP's software ecosystem.",
              "• Built and maintained Vue.js-based UI component libraries, enabling reuse and consistency across multiple internal apps.",
              "• Developed tools like Incident Tracker and monitoring dashboards, focusing on performance, reliability, and a smooth developer experience.",
              "• Implemented comprehensive unit testing aligned with team quality gates, ensuring code robustness and maintainability.",
            ],
            skills: [
              "CSS3",
              "Git",
              "HTML5",
              "JavaScript",
              "Jest",
              "RESTful APIs",
              "Sass",
              "TypeScript",
              "Vue Router",
              "Vue.js",
              "Vuex",
              "Web Components",
              "Webpack",
            ],
          },
        ],
      },
      {
        company: "Dell Technologies",
        description:
          "Dell Technologies is a global tech leader providing PCs, servers, storage, and AI-optimized IT solutions across 180+ countries.",
        location: "Eldorado do Sul, RS, Brazil",
        totalDuration: `July 2017 - October 2019 (${getTimeElapsed(
          new Date("2017-07-15"),
          new Date("2019-10-15")
        )})`,
        positions: [
          {
            title: "Senior Software Engineer - Frontend Specialist",
            duration: "July 2017 - October 2019",
            description: [
              "• Contributed to Customer Portal, a key app in the Dell Financial Services (DFS) ecosystem that enabled consumers, small businesses, and enterprises to manage their DELL financial accounts in the US. The project stood out for its forward-thinking design and improved UX, marking a notable step forward in DELL's digital customer experience at the time.",
              "• Built modern, responsive UIs using Angular.js, Angular Material, Sass, and HTML5, integrated with Salesforce backends.",
              "• Wrote unit tests with Jest, Mocha, and Chai, ensuring reliability and performance.",
            ],
            skills: [
              "Angular",
              "AngularJS",
              "Angular Material",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Git",
              "Webpack",
              "RESTful APIs",
              "Salesforce",
            ],
          },
        ],
      },
      {
        company: "Stefanini Group",
        description:
          "Stefanini Group is a Brazilian multinational IT company offering digital solutions in cloud, AI, cybersecurity, and SAP. With ~30,000 employees, it operates in 40+ countries.",
        location: "Porto Alegre, RS, Brazil",
        totalDuration: `September 2015 - July 2017 (${getTimeElapsed(
          new Date("2015-09-15"),
          new Date("2017-07-15")
        )})`,
        positions: [
          {
            title: "Senior Frontend Developer",
            duration: "September 2015 - July 2017",
            description: [
              "• Worked as a consultant for DELL Technologies on the TNT team, focusing on developing A/B tests across DELL's global e-commerce sites.",
              "• Used Adobe Target to inject and manage UI variations, requiring advanced JavaScript skills to dynamically modify complex user interfaces without access tothe underlying codebase.",
              "• Used and developed strong problem-solving abilities and further sharpened proficiency in vanilla JavaScript for real-time, data-driven experimentation at scale.",
            ],
            skills: [
              "A/B Testing",
              "Adobe Target",
              "Bootstrap",
              "CSS3",
              "Git",
              "HTML5",
              "JavaScript",
              "jQuery",
              "Node.js",
              "React",
            ],
          },
        ],
      },
      {
        company: "LCG IT",
        description:
          "LCG IT is a tech company from Porto Alegre specializing in SaaS, telecom expense management, mobile solutions, and IT consulting.",
        location: "Porto Alegre, RS, Brazil",
        totalDuration: `April 2014 - September 2015 (${getTimeElapsed(
          new Date("2014-04-15"),
          new Date("2015-09-15")
        )})`,
        positions: [
          {
            title: "Frontend Developer / UI Designer",
            duration: "April 2014 - September 2015",
            description: [
              "Worked as a frontend developer and user interface designer on several projects for the company.",
            ],
            skills: [
              "Adobe Photoshop",
              "Adobe XD",
              "Backbone.js",
              "Bootstrap",
              "CSS3",
              "Git",
              "HTML5",
              "JavaScript",
              "jQuery",
              "PHP",
              "Wordpress",
            ],
          },
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor's Degree in Social Communication (Advertising)",
        school: "Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)",
        duration: "January 1994 - January 1999",
        gpa: "",
      },
    ],
    skills: [
      "Vue.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Nuxt.js",
      "Next.js",
      "Tailwind CSS",
      "Sass",
      "Node.js",
      "Express.js",
      "Git",
      "Webpack",
      "Vite",
      "Vitest",
      "Jest",
      "RESTful APIs",
      "Vercel",
      "Figma",
      "Adobe XD",
      "Responsive Design",
      "Web Performance Optimization",
      "Accessibility",
      "Adobe Target",
      "Web Components",
      "Lit",
      "ESLint",
      "Prettier",
      "MongoDB",
    ],
    certifications: [
      {
        name: "Intensive Course in Marketing",
        issuer:
          "ESPM (School of Advertising and Marketing), Porto Alegre, RS, Brazil",
        date: "1999",
      },
    ],
    languages: [
      {
        name: "Portuguese",
        proficiency: "Native",
      },
      {
        name: "English",
        proficiency: "Advanced - Full professional proficiency",
      },
      {
        name: "Spanish",
        proficiency: "Intermediate",
      },
    ],
  };

  // const handleDownloadPDF = () => {
  //   window.print();
  // };

  return (
    <div className="min-h-screen bg-gray-50 print:bg-white">
      {/* Header with download button - hidden in print */}
      <header className="bg-white shadow-sm print:hidden sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Resume</h1>

          <div>
            <a
              href="Gustavo-Leindecker-Pereira.resume.pdf"
              download="Gustavo-Leindecker-Pereira.resume.pdf"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Download CV as PDF"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
            {/* <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Download CV as PDF"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button> */}
          </div>
        </div>
      </header>

      {/* Main CV Content */}
      <main className="max-w-4xl mx-auto p-2 sm:p-4 print:p-0 print:max-w-none">
        <div className="bg-white rounded-lg shadow-lg print:shadow-none print:rounded-none print:bg-white">
          {/* Personal Info Header */}
          <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 sm:p-8 print:ats-header">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="print:flex print:items-baseline">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2 print:mb-0 print:text-3xl print:text-black">
                    {cvData.personalInfo.name}
                  </h1>
                  <p className="text-xl text-blue-100 mb-4 print:relative print:mb-0 print:ml-3 print:text-black print:text-base print:before:absolute print:before:content-['-'] print:before:-left-2">
                    {cvData.personalInfo.title}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 text-sm print:ats-contact print:hide-icons print:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    <span>
                      <span className="hidden print:inline">Location:</span>
                      <span> {cvData.personalInfo.location}</span>
                    </span>
                  </div>
                  <div className="flex items-center pt-2 gap-2 md:justify-end md:pt-0 print:pt-0 print:justify-normal">
                    <Linkedin className="w-4 h-4" aria-hidden="true" />
                    <span>
                      <span className="hidden print:inline">LinkedIn:</span>
                      <span> {cvData.personalInfo.linkedin}</span>
                    </span>
                  </div>
                  {/* ATS-friendly contact info for print only */}
                  <div className="hidden print:block">
                    <span>Phone: {cvData.personalInfo.phone}</span>
                  </div>
                  <div className="hidden print:block">
                    <span>Email: {cvData.personalInfo.email}</span>
                  </div>
                  <div className="hidden print:block">
                    <span>GitHub: {cvData.personalInfo.github}</span>
                  </div>
                  <div className="hidden print:block">
                    <span>Website: {cvData.personalInfo.website}</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="p-4 space-y-4 sm:p-8 sm:space-y-8 print:p-0 print:space-y-0">
            {/* Summary */}
            <section className="print:ats-section-spacing">
              <h2 className="capitalize text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 print:hide-icons print:text-black">
                <User className="w-5 h-5 text-blue-600" aria-hidden="true" />
                Professional Summary
              </h2>
              <div>
                {cvData.personalInfo.summary.map((p, i) => (
                  <p
                    key={i}
                    className="text-gray-700 pt-2 first:pt-0 leading-relaxed print:text-black print:pt-0 print:leading-[1.3]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="print:ats-section-spacing">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 print:hide-icons print:text-black">
                <PencilRuler
                  className="w-5 h-5 text-blue-600"
                  aria-hidden="true"
                />
                Technical Skills
              </h2>
              <div className="flex flex-wrap gap-2 print:gap-x-2 print:gap-y-0 print:ats-skills">
                {cvData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="print:ats-section-spacing">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 print:hide-icons print:text-black">
                <Building
                  className="w-5 h-5 text-blue-600"
                  aria-hidden="true"
                />
                Professional Experience
              </h2>
              <div className="space-y-8 print:space-y-0">
                {cvData.experience.map((company, companyIndex) => (
                  <div
                    key={companyIndex}
                    className="border-l-4 border-blue-200 pl-2 sm:pl-4 md:pl-6 print:ats-simple"
                  >
                    {/* Company Header */}
                    <div className="mb-4 print:mb-2">
                      <h3 className="text-xl font-bold text-gray-900 print:text-black">
                        {company.company}
                      </h3>
                      {/* Company Description */}
                      <div className="text-gray-600 text-sm mt-2 mb-3 print:ats-position-description print:text-black print:mt-1 print:mb-2">
                        <p className="leading-relaxed">{company.description}</p>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between text-gray-600 mt-1 print:text-black print:hide-icons print:flex-row print:justify-normal print:items-center">
                        <p className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" aria-hidden="true" />
                          <span>
                            <span className="print:font-bold">Location:</span>
                            <span> {company.location}</span>
                          </span>
                        </p>
                        <p className="hidden print:inline print:px-1">|</p>
                        <p className="flex items-center gap-1 mt-1 md:mt-0 print:mt-0 print:ats-dates">
                          <Calendar className="w-4 h-4" aria-hidden="true" />
                          <span>
                            <span className="print:font-bold">Duration:</span>
                            <span> {company.totalDuration}</span>
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Positions within the company */}
                    <div className="flex ml-1.5 print:ml-0">
                      <div className="grow">
                        {company.positions.map((position, positionIndex) => (
                          <div
                            key={positionIndex}
                            className="flex print:block print:ml-2"
                          >
                            <div
                              className={`border-l-2 print:hidden ${
                                company.positions.length === 1
                                  ? "border-transparent"
                                  : "border-gray-200"
                              } ${
                                positionIndex ===
                                  company.positions.length - 1 && "h-4"
                              } ${positionIndex === 0 && "mt-3"}`}
                            ></div>
                            <div className="grow pl-4 print:pl-0 print:mb-2">
                              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 print:mb-1 relative print:ats-position print:justify-normal print:flex-row">
                                <div className="flex-shrink-0 absolute -left-[1.3rem] top-2.5 print:hidden">
                                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 print:text-black">
                                  {position.title}
                                </h4>
                                <span className="hidden print:inline mt-1.5 px-1">
                                  |
                                </span>
                                <span className="text-sm text-gray-600 mt-1 print:text-black print:ats-dates">
                                  {position.duration}
                                </span>
                              </div>
                              <div className="list-inside text-gray-700 mb-3 print:text-black print:mb-2 print:ml-2">
                                {position.description.map((item, i) => (
                                  <p className="mb-1" key={i}>
                                    {item}
                                  </p>
                                ))}
                              </div>

                              {/* Skills for this position */}
                              <div
                                className={`mt-3 print:ats-position-skills ${
                                  positionIndex !==
                                    company.positions.length - 1 && `mb-3`
                                } print:mt-0 print:ml-2`}
                              >
                                <div className="mb-2 text-sm font-medium text-gray-600 print:text-black print:mb-1 print:text-[11px] print:font-semibold">
                                  Technologies and tools:
                                </div>
                                <div className="flex flex-wrap gap-2 print:gap-y-0">
                                  {position.skills.map((skill, skillIndex) => (
                                    <span
                                      key={skillIndex}
                                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="print:ats-section-spacing">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 print:hide-icons print:text-black">
                <GraduationCap
                  className="w-5 h-5 text-blue-600"
                  aria-hidden="true"
                />
                Education
              </h2>
              <div className="space-y-4 print:space-y-2">
                {cvData.education.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-200 pl-6 print:ats-simple"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 print:text-black">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-blue-600 font-medium print:text-black print:text-xs">
                      {edu.school}
                    </p>
                    <div className="flex flex-col md:flex-row md:justify-between text-gray-600 mt-1 print:text-black print:hide-icons">
                      <span className="flex items-center gap-1 print:ats-dates">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        <span>Duration: {edu.duration}</span>
                      </span>
                      {edu.gpa && <span>GPA: {edu.gpa}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="print:ats-section-spacing">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 print:hide-icons print:text-black">
                <Award className="w-5 h-5 text-blue-600" aria-hidden="true" />
                Training & Certifications
              </h2>
              <div className="space-y-3 print:space-y-2">
                {cvData.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:justify-between"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 print:text-black">
                        {cert.name}
                      </h3>
                      <p className="text-gray-600 print:text-black">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-gray-600 mt-1 md:mt-0 print:text-black print:ats-dates">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section className="print:ats-section-spacing">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 print:hide-icons print:text-black">
                <Globe className="w-5 h-5 text-blue-600" aria-hidden="true" />
                Languages
              </h2>
              <div className="space-y-3 print:space-y-2">
                {cvData.languages.map((language, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:justify-between"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 print:text-black">
                        {language.name}
                      </h3>
                      <p className="text-gray-600 print:text-black">
                        {language.proficiency}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer - hidden in print */}
      <footer className="text-center py-8 text-gray-600 print:hidden">
        <p>Last updated: June 27, 2025</p>
      </footer>
    </div>
  );
}
