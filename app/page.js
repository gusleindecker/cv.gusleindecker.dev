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

export default function CVPage() {
  // You can update this data with your actual LinkedIn information
  const cvData = {
    personalInfo: {
      name: "Gustavo Leindecker Pereira",
      title:
        "Senior Frontend Engineer | Vue.js | React | TypeScript | Nuxt | Next.js | Tailwindcss | Node.js",
      location: "Porto Alegre, RS, Brazil",
      linkedin: "https://www.linkedin.com/in/gusleindecker/",
      github: "https://github.com/gusleindecker", // Optional: add GitHub if you want
      website: "https://gusleindecker.dev/", // Optional: add personal website
      summary: `A seasoned Frontend Engineer with a background in Advertising and over a decade of experience delivering high-quality web applications. Specialized in Vue.js (2 & 3), TypeScript, and modern JavaScript (ES6+), I've led the development of scalable, performant, and responsive user interfaces for the web. I also bring strong experience with React, Next.js, Nuxt, Tailwind CSS, SCSS, and Node.js, consistently transforming complex requirements into intuitive and visually refined digital experiences.

        As a technology professional, I'm deeply committed to continuous learning and growth. I stay ahead of industry trends, explore emerging tools, and value clean, maintainable code as much as user-centered design. I thrive in Agile environments, where cross-functional collaboration and adaptability are essential to building solutions that are not only technically sound but genuinely resonate with users.`,
    },
    experience: [
      {
        company: "Software Mind North America",
        description:
          "Software Mind is a global software company offering engineering, cloud, and AI solutions with 1,500+ experts worldwide.",
        location: "Remote",
        totalDuration: "July 2021 - Present · 3 yrs 11 mos",
        positions: [
          {
            title: "Team Leader",
            duration: "Jul 2024 - Present",
            description: [
              "Leading a team of 6 consultants.",
              "Facilitating personal and professional issues for the consultants, ensuring smooth project execution.",
              "Improving team collaboration.",
            ],
            skills: [
              "Mentoring",
              "Team Building",
              "Team Leadership",
              "Team Management",
            ],
          },
          {
            title: "Senior Frontend Engineer",
            duration: "Jul 2021 - Present",
            description: [
              "Developing and maintaining Software Mind's client applications using mostly Vue.js and TypeScript.",
            ],
            skills: [
              "Git",
              "HTML5",
              "JavaScript (ES6+)",
              "Node.js",
              "Nuxt",
              "Pinia",
              "Tailwind CSS",
              "TypeScript",
              "Vitest",
              "Vue Router",
              "Vue Use",
              "Vue.js",
            ],
          },
        ],
      },
      {
        company: "ADP Brazil Labs",
        description:
          "ADP Brazil Labs is ADP's tech hub in Porto Alegre, focused on building next-gen cloud HCM solutions. With 500+ employees, it supports global product development.",
        location: "Porto Alegre, Rio Grande do Sul, Brazil",
        totalDuration: "Oct 2019 - Jul 2021 · 1 yr 10 mos",
        positions: [
          {
            title: "Senior Software Engineer - Frontend Specialist",
            duration: "",
            description: [
              "Worked on the GETS team in developing and maintaining core Vue.js UI components that are reused in multiple internal ADP applications.",
            ],
            skills: [
              "CSS3",
              "Git",
              "HTML5",
              "JavaScript (ES6+)",
              "RESTful APIs",
              "SCSS/Sass",
              "TypeScript",
              "Vue Router",
              "Vue.js",
              "Vuex",
              "Webpack",
            ],
          },
        ],
      },
      {
        company: "Dell Technologies",
        description:
          "Dell Technologies is a global tech leader providing PCs, servers, storage, and AI-optimized IT solutions across 180+ countries.",
        location: "Eldorado do Sul, Rio Grande do Sul, Brazil",
        totalDuration: "Jul 2017 - Oct 2019 · 2 yrs 4 mos",
        positions: [
          {
            title: "Senior Software Engineer - Frontend Specialist",
            duration: "",
            description: [
              "Worked on the Dell Financial Services team developing the Customer Portal: Dell's end-user application for managing consumer, small business and enterprise finance accounts in US.",
            ],
            skills: [
              "Angular Material",
              "Angular",
              "AngularJS",
              "CSS3",
              "Express.js",
              "Git",
              "HTML5",
              "JavaScript (ES6+)",
              "MongoDB",
              "Node.js",
              "RESTful APIs",
              "Salesforce.com",
              "Webpack",
            ],
          },
        ],
      },
      {
        company: "Stefanini Group",
        description:
          "Stefanini Group is a Brazilian multinational IT company offering digital solutions in cloud, AI, cybersecurity, and SAP. With ~30,000 employees, it operates in 40+ countries.",
        location: "Porto Alegre, Rio Grande do Sul, Brazil",
        totalDuration: "Sep 2015 - Jul 2017 · 1 yr 11 mos",
        positions: [
          {
            title: "Senior Frontend Developer",
            duration: "",
            description: [
              "Worked initially on the TNT team as an outsourced Frontend Developer for Dell Technologies developing A/B tests on the company's various e-commerce sites. And then worked in the Dell Financial Services team developing the Customer Portal US.",
            ],
            skills: [
              "A/B Testing",
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
        location: "Porto Alegre, Rio Grande do Sul, Brazil",
        totalDuration: "Apr 2014 - Sep 2015 · 1 yr 6 mos",
        positions: [
          {
            title: "Frontend Developer / UI Designer",
            duration: "",
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
            ],
          },
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor's Degree in Social Communication (Advertising)",
        school: "Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)",
        duration: "Jan 1994 - Jan 1999",
        gpa: "",
      },
    ],
    skills: [
      "Vue.js",
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Nuxt.js",
      "Next.js",
      "Tailwind CSS",
      "SCSS/Sass",
      "Node.js",
      "Express.js",
      "HTML5",
      "CSS3",
      "Git",
      "Webpack",
      "Vite",
      "Jest",
      "Cypress",
      "RESTful APIs",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Vercel",
      "Netlify",
      "Figma",
      "Adobe XD",
      "Responsive Design",
      "Web Performance Optimization",
      "Accessibility (a11y)",
      "Agile/Scrum",
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
        proficiency: "Level: Native",
      },
      {
        name: "English",
        proficiency: "Level: Advanced | Full professional proficiency",
      },
      {
        name: "Spanish",
        proficiency: "Level: Intermediate",
      },
    ],
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 print:bg-white">
      {/* Header with download button - hidden in print */}
      <header className="bg-white shadow-sm print:hidden sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Resume</h1>
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Download CV as PDF"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>
      </header>

      {/* Main CV Content */}
      <main className="max-w-4xl mx-auto p-4 print:p-0 print:max-w-none">
        <div className="bg-white rounded-lg shadow-lg print:shadow-none print:rounded-none">
          {/* Personal Info Header */}
          <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 print:bg-blue-600 print:compact-header">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 print:text-3xl print:mb-2 print:leading-tight">
                  {cvData.personalInfo.name}
                </h1>
                <p className="text-xl text-blue-100 mb-4 print:text-lg print:mb-3 print:leading-snug">
                  {cvData.personalInfo.title}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm print:text-sm print:leading-snug">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    <span>{cvData.personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" aria-hidden="true" />
                    <a
                      href={`https://${cvData.personalInfo.linkedin}`}
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cvData.personalInfo.linkedin}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="p-8 space-y-8 print:p-4 print:space-y-1">
            {/* Summary */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 print:text-xl print:mb-1">
                <User className="w-5 h-5 text-blue-600" aria-hidden="true" />
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed print:text-base print:leading-snug">
                {cvData.personalInfo.summary}
              </p>
            </section>

            {/* Skills */}
            <section className="skills-container">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 print:text-xl print:mb-1">
                <PencilRuler
                  className="w-5 h-5 text-blue-600"
                  aria-hidden="true"
                />
                Technical Skills
              </h2>
              <div className="flex flex-wrap gap-2 print:gap-1">
                {cvData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium print:bg-gray-100 print:text-gray-800 print:text-xs print:px-2 print:py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="experience-section">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 print:text-xl print:mb-2">
                <Building
                  className="w-5 h-5 text-blue-600"
                  aria-hidden="true"
                />
                Professional Experience
              </h2>
              <div className="space-y-8 print:space-y-2">
                {cvData.experience.map((company, companyIndex) => (
                  <div
                    key={companyIndex}
                    className="border-l-4 border-blue-200 pl-6 company-block"
                  >
                    {/* Company Header */}
                    <div className="mb-4 print:mb-2 company-header">
                      <h3 className="text-xl font-bold text-gray-900 print:text-lg">
                        {company.company}
                      </h3>
                      {/* Company Description */}
                      <div className="text-gray-600 text-sm mt-2 mb-3 print:text-sm print:mt-1 print:mb-2">
                        <p className="leading-relaxed print:leading-snug">
                          {company.description}
                        </p>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between text-gray-600 mt-1">
                        <p className="flex items-center gap-1 print:text-sm">
                          <MapPin className="w-4 h-4" aria-hidden="true" />
                          {company.location}
                        </p>
                        <p className="flex items-center gap-1 mt-1 md:mt-0 print:text-sm">
                          <Calendar className="w-4 h-4" aria-hidden="true" />
                          {company.totalDuration}
                        </p>
                      </div>
                    </div>

                    {/* Positions within the company */}
                    <div className="flex ml-1.5">
                      <div className="grow">
                        {company.positions.map((position, positionIndex) => (
                          <div key={positionIndex} className="flex">
                            <div
                              className={`border-l-2 ${
                                company.positions.length === 1
                                  ? "border-transparent"
                                  : "border-gray-200"
                              } ${
                                positionIndex ===
                                  company.positions.length - 1 && "h-4"
                              } ${positionIndex === 0 && "mt-3"}`}
                            ></div>
                            <div className="grow pl-4 print:mb-1">
                              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 print:mb-1 relative">
                                <div className="flex-shrink-0 absolute -left-[1.3rem] top-2.5">
                                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 print:text-base">
                                  {position.title}
                                </h4>
                                <span className="text-sm text-gray-600 mt-1 md:mt-0 print:text-sm">
                                  {position.duration}
                                </span>
                              </div>
                              <ul
                                className={`list-inside space-y-1 print:space-y-0 text-gray-700 print:text-sm mb-3 print:mb-1 ${
                                  position.description.length > 1 && "list-disc"
                                }`}
                              >
                                {position.description.map((item, i) => (
                                  <li key={i} className="print:mb-1">
                                    {item}
                                  </li>
                                ))}
                              </ul>

                              {/* Skills for this position */}
                              <div
                                className={`mt-3 ${
                                  positionIndex !==
                                    company.positions.length - 1 && `mb-3`
                                } print:mt-1`}
                              >
                                <div className="flex items-center gap-2 mb-2 print:mb-1">
                                  <span className="text-sm font-medium text-gray-600 print:text-xs">
                                    Technologies and tools:
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-2 print:gap-1">
                                  {position.skills.map((skill, skillIndex) => (
                                    <span
                                      key={skillIndex}
                                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium print:bg-gray-100 print:text-gray-800 print:text-xs print:px-2 print:py-1"
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
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 print:text-xl print:mb-3">
                <GraduationCap
                  className="w-5 h-5 text-blue-600"
                  aria-hidden="true"
                />
                Academic Education
              </h2>
              <div className="space-y-4 print:space-y-2">
                {cvData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 print:text-lg">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-blue-600 font-medium print:text-base">
                      {edu.school}
                    </p>
                    <div className="flex flex-col md:flex-row md:justify-between text-gray-600 mt-1 print:text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        {edu.duration}
                      </span>
                      {edu.gpa && <span>GPA: {edu.gpa}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 print:text-xl print:mb-2">
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
                      <h3 className="font-semibold text-gray-900 print:text-base">
                        {language.name}
                      </h3>
                      <p className="text-gray-600 print:text-sm">
                        {language.proficiency}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 print:text-xl print:mb-3">
                <Award className="w-5 h-5 text-blue-600" aria-hidden="true" />
                Courses, Certifications
              </h2>
              <div className="space-y-3 print:space-y-2">
                {cvData.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:justify-between"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 print:text-base">
                        {cert.name}
                      </h3>
                      <p className="text-gray-600 print:text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-gray-600 mt-1 md:mt-0 print:text-sm">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer - hidden in print */}
      <footer className="text-center py-8 text-gray-600 print:hidden">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}
