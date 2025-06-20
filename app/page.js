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
  // CV data with personal info from environment variables
  const cvData = {
    personalInfo: {
      name: process.env.NEXT_PUBLIC_FULL_NAME || "Your Name",
      title:
        "Senior Frontend Engineer | Vue.js | React | TypeScript | Nuxt | Next.js | Tailwindcss | Node.js",
      location: process.env.NEXT_PUBLIC_LOCATION || "Your Location",
      phone: process.env.NEXT_PUBLIC_PHONE || "+1 (555) 123-4567",
      email: process.env.NEXT_PUBLIC_EMAIL || "your.email@example.com",
      linkedin:
        process.env.NEXT_PUBLIC_LINKEDIN ||
        "https://www.linkedin.com/in/your-profile/",
      github:
        process.env.NEXT_PUBLIC_GITHUB || "https://github.com/your-username",
      website: process.env.NEXT_PUBLIC_WEBSITE || "https://your-website.com/",
      summary: `A seasoned Frontend Engineer with a background in Advertising and over a decade of experience delivering high-quality web applications. Specialized in Vue.js (2 & 3), TypeScript, and modern JavaScript (ES6+), I've led the development of scalable, performant, and responsive user interfaces for the web. I also bring strong experience with React, Next.js, Nuxt, Tailwind CSS, SCSS, and Node.js, consistently transforming complex requirements into intuitive and visually refined digital experiences.

        As a technology professional, I'm deeply committed to continuous learning and growth. I stay ahead of industry trends, explore emerging tools, and value clean, maintainable code as much as user-centered design. I thrive in Agile environments, where cross-functional collaboration and adaptability are essential to building solutions that are not only technically sound but genuinely resonate with users.`,
    },
    experience: [
      {
        company: "Software Mind North America",
        description:
          "Software Mind is a global software company offering engineering, cloud, and AI solutions with 1,500+ experts worldwide.",
        location: "Remote",
        totalDuration: "July 2021 - Present (3 years 11 months)",
        positions: [
          {
            title: "Team Leader",
            duration: "July 2024 - Present",
            description: [
              "Leading a team of 6 consultants",
              "Facilitating personal and professional issues for the consultants, ensuring smooth project execution",
              "Improving team collaboration",
            ],
            skills: [
              "Team Leadership",
              "Project Management",
              "Mentoring",
              "Team Building",
            ],
          },
          {
            title: "Senior Frontend Engineer",
            duration: "July 2021 - Present",
            description: [
              "Developing and maintaining Software Mind's client applications using mostly Vue.js and TypeScript",
            ],
            skills: [
              "Vue.js",
              "TypeScript",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Nuxt.js",
              "Git",
              "Node.js",
              "Tailwind CSS",
              "Pinia",
              "Vue Router",
              "Vitest",
            ],
          },
        ],
      },
      {
        company: "ADP Brazil Labs",
        description:
          "ADP Brazil Labs is ADP's tech hub in Porto Alegre, focused on building next-gen cloud HCM solutions. With 500+ employees, it supports global product development.",
        location: "Porto Alegre, RS, Brazil",
        totalDuration: "October 2019 - July 2021 (1 year 10 months)",
        positions: [
          {
            title: "Senior Software Engineer - Frontend Specialist",
            duration: "October 2019 - July 2021",
            description: [
              "Worked on the GETS team in developing and maintaining core Vue.js UI components that are reused in multiple internal ADP applications",
            ],
            skills: [
              "Vue.js",
              "JavaScript",
              "TypeScript",
              "HTML5",
              "CSS3",
              "SCSS",
              "Sass",
              "Git",
              "Webpack",
              "RESTful APIs",
              "Vue Router",
              "Vuex",
            ],
          },
        ],
      },
      {
        company: "Dell Technologies",
        description:
          "Dell Technologies is a global tech leader providing PCs, servers, storage, and AI-optimized IT solutions across 180+ countries.",
        location: "Eldorado do Sul, RS, Brazil",
        totalDuration: "July 2017 - October 2019 (2 years 4 months)",
        positions: [
          {
            title: "Senior Software Engineer - Frontend Specialist",
            duration: "July 2017 - October 2019",
            description: [
              "Worked on the Dell Financial Services team developing the Customer Portal: Dell's end-user application for managing consumer, small business and enterprise finance accounts in US",
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
        totalDuration: "September 2015 - July 2017 (1 year 11 months)",
        positions: [
          {
            title: "Senior Frontend Developer",
            duration: "September 2015 - July 2017",
            description: [
              "Worked initially on the TNT team as an outsourced Frontend Developer for Dell Technologies developing A/B tests on the company's various e-commerce sites",
              "Later worked in the Dell Financial Services team developing the Customer Portal US",
            ],
            skills: [
              "JavaScript",
              "HTML5",
              "CSS3",
              "jQuery",
              "Bootstrap",
              "Git",
              "A/B Testing",
              "React",
              "Node.js",
            ],
          },
        ],
      },
      {
        company: "LCG IT",
        description:
          "LCG IT is a tech company from Porto Alegre specializing in SaaS, telecom expense management, mobile solutions, and IT consulting.",
        location: "Porto Alegre, RS, Brazil",
        totalDuration: "April 2014 - September 2015 (1 year 6 months)",
        positions: [
          {
            title: "Frontend Developer / UI Designer",
            duration: "April 2014 - September 2015",
            description: [
              "Worked as a frontend developer and user interface designer on several projects for the company",
            ],
            skills: [
              "JavaScript",
              "HTML5",
              "CSS3",
              "jQuery",
              "Bootstrap",
              "Git",
              "Adobe Photoshop",
              "Adobe XD",
              "Backbone.js",
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
      "SCSS",
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
        <div className="bg-white rounded-lg shadow-lg print:shadow-none print:rounded-none print:bg-white">
          {/* Personal Info Header */}
          <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 print:ats-header">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 print:text-black">
                  {cvData.personalInfo.name}
                </h1>
                <p className="text-xl text-blue-100 mb-4 print:text-black">
                  {cvData.personalInfo.title}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm print:ats-contact print:hide-icons">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    <span>Location: {cvData.personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" aria-hidden="true" />
                    <span>LinkedIn: {cvData.personalInfo.linkedin}</span>
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

          <div className="p-8 space-y-8 print:p-0 print:space-y-0">
            {/* Summary */}
            <section className="print:ats-section-spacing">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 print:hide-icons print:text-black">
                <User className="w-5 h-5 text-blue-600" aria-hidden="true" />
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed print:text-black">
                {cvData.personalInfo.summary}
              </p>
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
              <div className="flex flex-wrap gap-2 print:ats-skills">
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
                    className="border-l-4 border-blue-200 pl-6 print:ats-simple print:ats-spacing"
                  >
                    {/* Company Header */}
                    <div className="mb-4 print:mb-2">
                      <h3 className="text-xl font-bold text-gray-900 print:text-black">
                        {company.company}
                      </h3>
                      {/* Company Description */}
                      <div className="text-gray-600 text-sm mt-2 mb-3 print:text-black print:mt-1 print:mb-2">
                        <p className="leading-relaxed">{company.description}</p>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between text-gray-600 mt-1 print:text-black print:hide-icons">
                        <p className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" aria-hidden="true" />
                          <span>Location: {company.location}</span>
                        </p>
                        <p className="flex items-center gap-1 mt-1 md:mt-0 print:ats-dates">
                          <Calendar className="w-4 h-4" aria-hidden="true" />
                          <span>Duration: {company.totalDuration}</span>
                        </p>
                      </div>
                    </div>

                    {/* Positions within the company */}
                    <div className="flex ml-1.5 print:ml-0">
                      <div className="grow">
                        {company.positions.map((position, positionIndex) => (
                          <div key={positionIndex} className="flex print:block">
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
                              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 print:mb-1 relative print:ats-position">
                                <div className="flex-shrink-0 absolute -left-[1.3rem] top-2.5 print:hidden">
                                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 print:text-black">
                                  {position.title}
                                </h4>
                                <span className="text-sm text-gray-600 mt-1 md:mt-0 print:text-black print:ats-dates">
                                  {position.duration}
                                </span>
                              </div>
                              <ul className="list-inside space-y-1 text-gray-700 mb-3 print:ats-bullets print:text-black print:mb-2 print:space-y-0">
                                {position.description.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>

                              {/* Skills for this position */}
                              <div
                                className={`mt-3 print:ats-position-skills ${
                                  positionIndex !==
                                    company.positions.length - 1 && `mb-3`
                                } print:mt-1`}
                              >
                                <div className="mb-2 print:mb-1">
                                  <span className="text-sm font-medium text-gray-600 print:text-black">
                                    Technologies and tools:
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
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
                    <p className="text-lg text-blue-600 font-medium print:text-black">
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

            {/* Certifications */}
            <section className="print:ats-section-spacing">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 print:hide-icons print:text-black">
                <Award className="w-5 h-5 text-blue-600" aria-hidden="true" />
                Certifications
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
          </div>
        </div>
      </main>

      {/* Footer - hidden in print */}
      <footer className="text-center py-8 text-gray-600 print:hidden">
        <p>Last updated: Jun 20, 2025</p>
      </footer>
    </div>
  );
}
