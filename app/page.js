import { ThemeToggle } from "@/components/theme-toggle";
import { connection } from "next/server";
import { getExperienceIntroduction } from "@/lib/experience";
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

export default async function CVPage() {
  await connection();
  // Personal contact overrides remain configurable through environment variables.
  const cvData = {
    personalInfo: {
      name: process.env.NEXT_PUBLIC_FULL_NAME || "Your Name",
      title: "Senior Front-end Engineer",
      location: process.env.NEXT_PUBLIC_LOCATION || "Your City, Your Country",
      phone: process.env.NEXT_PUBLIC_PHONE || "+1 (555) 123-4567",
      email: process.env.NEXT_PUBLIC_EMAIL || "your.email@example.com",
      linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "your-linkedin-url",
      website: process.env.NEXT_PUBLIC_WEBSITE || "https://your-website.com",
      summary: [
        `${getExperienceIntroduction()} My strongest framework experience is in Vue.js, complemented by over a year of cumulative work with React and Next.js on internal CMS tools and personal projects. Experienced in reusable UI components, responsive interfaces, accessibility, and extensive use of Testing Library, alongside Jest, Vitest, and Tailwind CSS. Comfortable using Claude and Codex within established AI-assisted development workflows. Based in Brazil, with C1 English and native Portuguese.`,
      ],
    },
    experience: [
      {
        company: "Self Employed",
        totalDuration: "June 2025 - Present",
        positions: [
          {
            title: "Freelance Front-end Engineer / UX/UI Designer",
            duration: "June 2025 - Present",
            description: [
              "Providing front-end engineering and UX/UI consulting for projects using React, Next.js, Vue.js, and Nuxt.",
              "Designing and developing responsive, accessible interfaces with a focus on usability and performance.",
              "Collaborating with clients and cross-functional teams to deliver features from concept to production.",
              "Built my personal CV website with Next.js: https://cv.gusleindecker.dev/."
            ]
          }
        ]
      },
      {
        company: "Allstacks",
        totalDuration: "August 2025 - August 2026",
        positions: [
          {
            title: "Senior Front-end Engineer",
            duration: "August 2025 - August 2026",
            description: [
              "Built performant, scalable, and accessible web applications with Vue.js.",
              "Led the migration of core components from Vue 2 to Vue 3, modernizing the codebase.",
              "Collaborated with product and backend teams to define technical approaches and deliver solutions.",
              "Used Vite, Webpack, Vitest, ESLint, and Prettier to maintain code quality."
            ]
          }
        ]
      },
      {
        company: "Software Mind",
        totalDuration: "July 2021 - June 2025",
        positions: [
          {
            title: "Team Leader",
            duration: "July 2024 - June 2025",
            description: [
              "Led a team of 6 consultants across multiple projects, ensuring high-quality delivery and client satisfaction.",
              "Provided technical mentorship and guidance, supporting both individual growth and team performance.",
              "Conducted regular 1:1s and team syncs to maintain alignment, resolve blockers, and foster collaboration.",
              "Championed team morale and cohesion, enabling smooth project execution and consistent delivery outcomes."
            ]
          },
          {
            title: "Senior Front-end Engineer - Consultant at DealerOn",
            duration: "July 2022 - June 2025",
            description: [
              "Modernized CMS platforms serving thousands of automotive dealerships, improving performance, scalability, and developer efficiency.",
              "Led the creation of reusable UI libraries and internal npm packages, accelerating delivery and ensuring product consistency.",
              "Introduced unit testing with Vitest and Testing Library, reducing bugs and strengthening code quality across teams.",
              "Mentored developers and established engineering standards that scaled with company growth.",
              "Worked on React-based and Vue.js-based internal/CMS tools alongside upgrades to legacy Vue.js systems."
            ]
          },
          {
            title: "Senior Front-end Engineer - Consultant at Oliver Wyman",
            duration: "July 2021 - June 2022",
            description: [
              "Developed MultiRail Web, a strategic freight planning tool used for scenario simulation and capacity optimization.",
              "Built scalable UI components and advanced data visualizations with Vue.js, Highcharts, Mapbox, and AG-Grid.",
              "Improved design-to-dev handoff and frontend best practices, raising delivery speed and consistency.",
              "Improved UX, making complex planning tools more intuitive."
            ]
          }
        ]
      },
      {
        company: "ADP",
        totalDuration: "October 2019 - July 2021",
        positions: [
          {
            title: "Senior Software Engineer - Front-end Specialist",
            duration: "October 2019 - July 2021",
            description: [
              "Built and maintained Vue.js-based UI component libraries, enabling reuse and consistency across multiple internal applications.",
              "Developed internal tools, including Incident Tracker and monitoring dashboards, improving performance, reliability, and developer efficiency.",
              "Implemented comprehensive unit testing, ensuring code robustness and adherence to team quality standards.",
              "Collaborated with cross-functional teams to enhance internal workflows and overall user experience for enterprise applications."
            ]
          }
        ]
      },
      {
        company: "DELL Technologies",
        totalDuration: "July 2017 - October 2019",
        positions: [
          {
            title: "Senior Software Engineer - Front-end Specialist",
            duration: "July 2017 - October 2019",
            description: [
              "Developed modern, responsive UIs for the Customer Portal in Dell Financial Services, improving user experience for consumers, SMBs, and enterprises.",
              "Built applications with Angular.js, Angular Material, Sass, and HTML5, integrating seamlessly with Salesforce backends.",
              "Wrote unit tests with Jest, Mocha, and Chai, ensuring high performance and reliability.",
              "Contributed to forward-thinking UX design initiatives, enhancing digital customer experiences across financial products."
            ]
          }
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor's Degree in Social Communication (Advertising)",
        school: "Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)",
        duration: "January 1994 - January 1999"
      }
    ],
    skillGroups: [
      {
        name: "Frontend Development",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript (ES6+/ESNext)",
          "Tailwind CSS",
          "HTML5",
          "CSS3",
          "Responsive Design",
          "Accessibility",
          "Web Performance",
          "Vue.js",
          "Nuxt",
          "Sass",
          "Web Components",
          "Lit",
          "SEO"
        ]
      },
      {
        name: "Tools & Testing",
        skills: [
          "Jest",
          "Testing Library",
          "Vitest",
          "Git",
          "Vite",
          "Webpack",
          "ESLint",
          "Prettier",
          "Claude",
          "Codex"
        ]
      },
      {
        name: "UI/UX & Design",
        skills: [
          "UI Design",
          "UX Design",
          "Figma",
          "Adobe XD"
        ]
      }
    ],
    certifications: [
      {
        name: "Node.js: The Complete Guide to Build RESTful APIs",
        issuer: "Udemy - 15 total hours",
        date: "2018"
      },
      {
        name: "Intensive Course in Marketing",
        issuer: "ESPM (School of Advertising and Marketing), Porto Alegre, RS, Brazil",
        date: "1999"
      }
    ],
    professionalDevelopment: "Self-taught software engineer with ongoing professional development.",
    languages: [
      {
        name: "Portuguese",
        proficiency: "Native"
      },
      {
        name: "English",
        proficiency: "C1 - Full professional proficiency"
      },
      {
        name: "Spanish",
        proficiency: "Intermediate"
      }
    ]
  };

  // const handleDownloadPDF = () => {
  //   window.print();
  // };

  return (
    <div className="cv-page min-h-screen bg-gray-50 dark:bg-gray-950 print:bg-white">
      {/* Header with download button - hidden in print */}
      <header className="bg-white dark:bg-gray-900 shadow-sm print:hidden sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Résumé</h1>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="/Gustavo-Leindecker-Pereira.resume.pdf"
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
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg print:shadow-none print:rounded-none print:bg-white">
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
                  {cvData.personalInfo.phone && (
                    <div className="hidden print:block">
                      <span>Phone: {cvData.personalInfo.phone}</span>
                    </div>
                  )}
                  {cvData.personalInfo.email && (
                    <div className="hidden print:block">
                      <span>Email: {cvData.personalInfo.email}</span>
                    </div>
                  )}
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
              <h2 className="capitalize text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2 print:hide-icons print:text-black">
                <User className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                Professional Summary
              </h2>
              <div>
                {cvData.personalInfo.summary.map((p, i) => (
                  <p
                    key={i}
                    className="text-gray-700 dark:text-gray-300 pt-2 first:pt-0 leading-relaxed print:text-black print:pt-0 print:leading-[1.3]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="print:ats-section-spacing">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2 print:hide-icons print:text-black">
                <PencilRuler
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />
                Technical Skills
              </h2>
              <div className="space-y-4 print:space-y-2">
                {cvData.skillGroups.map((group) => (
                  <div key={group.name}>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 print:text-black">
                      {group.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 print:gap-x-2 print:gap-y-0 print:ats-skills">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="print:ats-section-spacing">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2 print:hide-icons print:text-black">
                <Building
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />
                Professional Experience
              </h2>
              <div className="space-y-8 print:space-y-0">
                {cvData.experience.map((company, companyIndex) => (
                  <div
                    key={companyIndex}
                    className="border-l-4 border-blue-200 dark:border-blue-900 pl-2 sm:pl-4 md:pl-6 print:ats-simple"
                  >
                    {/* Company Header */}
                    <div className="mb-4 print:mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 print:text-black">
                        {company.company}
                      </h3>
                      <div className="flex text-gray-600 dark:text-gray-400 mt-1 print:text-black print:hide-icons">
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
                                  : "border-gray-200 dark:border-gray-700"
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
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 print:text-black">
                                  {position.title}
                                </h4>
                                <span className="hidden print:inline mt-1.5 px-1">
                                  |
                                </span>
                                <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 print:text-black print:ats-dates">
                                  {position.duration}
                                </span>
                              </div>
                              <div className="list-inside text-gray-700 dark:text-gray-300 mb-3 print:text-black print:mb-2 print:ml-2">
                                <ul className="list-disc pl-5 space-y-1">
                                  {position.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2 print:hide-icons print:text-black">
                <GraduationCap
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />
                Education
              </h2>
              <div className="space-y-4 print:space-y-2">
                {cvData.education.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-200 dark:border-blue-900 pl-6 print:ats-simple"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 print:text-black">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium print:text-black print:text-xs">
                      {edu.school}
                    </p>
                    <div className="flex flex-col md:flex-row md:justify-between text-gray-600 dark:text-gray-400 mt-1 print:text-black print:hide-icons">
                      <span className="flex items-center gap-1 print:ats-dates">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        <span>Duration: {edu.duration}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="print:ats-section-spacing">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2 print:hide-icons print:text-black">
                <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                Training & Certifications
              </h2>
              <div className="space-y-3 print:space-y-2">
                {cvData.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:justify-between"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 print:text-black">
                        {cert.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 print:text-black">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 mt-1 md:mt-0 print:text-black print:ats-dates">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-4 print:text-black print:mt-2">
                {cvData.professionalDevelopment}
              </p>
            </section>

            {/* Languages */}
            <section className="print:ats-section-spacing">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2 print:hide-icons print:text-black">
                <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                Languages
              </h2>
              <div className="space-y-3 print:space-y-2">
                {cvData.languages.map((language, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:justify-between"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 print:text-black">
                        {language.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 print:text-black">
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
      <footer className="text-center py-8 text-gray-600 dark:text-gray-400 print:hidden">
        <p>Last updated: October 6, 2026</p>
      </footer>
    </div>
  );
}
