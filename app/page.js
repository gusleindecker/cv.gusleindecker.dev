"use client";
import {
  Download,
  MapPin,
  Linkedin,
  Calendar,
  Building,
  GraduationCap,
  Award,
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
      summary: `A seasoned Frontend Engineer with a background in Advertising and over a decade of experience delivering high-quality web applications. Specialized in Vue.js (2 & 3), TypeScript, and modern JavaScript (ES6+), I’ve led the development of scalable, performant, and responsive user interfaces for the web. I also bring strong experience with React, Next.js, Nuxt, Tailwind CSS, SCSS, and Node.js, consistently transforming complex requirements into intuitive and visually refined digital experiences.

        As a technology professional, I’m deeply committed to continuous learning and growth. I stay ahead of industry trends, explore emerging tools, and value clean, maintainable code as much as user-centered design. I thrive in Agile environments, where cross-functional collaboration and adaptability are essential to building solutions that are not only technically sound but genuinely resonate with users.`,
    },
    experience: [
      {
        company: "Software Mind North America",
        location: "Remote",
        totalDuration: "2021 - Present · 3 yrs 11 mos",
        positions: [
          {
            title: "Team Leader",
            duration: "Jul 2024 - Present",
            description: [
              "Leading a team of 6 consultants.",
              "Facilitating personal and professional issues for the consultants, ensuring smooth project execution.",
              "Improving team collaboration.",
            ],
          },
          {
            title: "Senior Frontend Engineer",
            duration: "Jul 2021 - Present",
            description: [
              "Developing and maintaining Software Mind's client applications using mostly Vue.js and TypeScript.",
            ],
          },
        ],
      },
      {
        company: "ADP Brazil Labs",
        location: "Porto Alegre, Rio Grande do Sul, Brazil",
        totalDuration: "2019 - 2021 · 2 yrs",
        positions: [
          {
            title: "Senior Software Engineer - Frontend Specialist",
            duration: "Oct 2019 - Jul 2021 · 1 yr 10 mos",
            description: [
              "Worked on the GETS team in developing and maintaining core Vue.js UI components that are reused in multiple internal ADP applications.",
            ],
          },
        ],
      },
      {
        company: "Dell Technologies",
        location: "Eldorado do Sul, Rio Grande do Sul, Brazil",
        totalDuration: "Jul 2017 - Oct 2019 · 2 yrs 4 mos",
        positions: [
          {
            title: "Senior Software Engineer - Frontend Specialist",
            duration: "",
            description: [
              "Worked on the Dell Financial Services team developing the Customer Portal: Dell's end-user application for managing consumer, small business and enterprise finance accounts in US.",
            ],
          },
        ],
      },
      {
        company: "Stefanini Brasil",
        location: "Porto Alegre, Rio Grande do Sul, Brazil",
        totalDuration: "Sep 2015 - Jul 2017 · 1 yr 11 mos",
        positions: [
          {
            title: "Senior Frontend Developer",
            duration: "",
            description: [
              "Worked initially on the TNT team as an outsourced Frontend Developer for Dell Technologies developing A/B tests on the company's various e-commerce sites. And then worked in the Dell Financial Services team developing the Customer Portal US.",
            ],
          },
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "Universidade Federal do Rio Grande do Sul (UFRGS)",
        duration: "2014 - 2018",
        gpa: "3.7/4.0",
      },
      {
        degree: "Technical Course in Information Technology",
        school: "Instituto Federal do Rio Grande do Sul",
        duration: "2012 - 2014",
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
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023",
      },
      {
        name: "Certified Scrum Master",
        issuer: "Scrum Alliance",
        date: "2022",
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
          <h1 className="text-xl font-semibold text-gray-900">My CV</h1>
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
          <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 print:bg-blue-600 print:p-6">
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

          <div className="p-8 space-y-8 print:p-4 print:space-y-3">
            {/* Summary */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 print:text-xl print:mb-2">
                <User className="w-5 h-5 text-blue-600" aria-hidden="true" />
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed print:text-base print:leading-snug">
                {cvData.personalInfo.summary}
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 print:text-xl print:mb-3">
                <Building
                  className="w-5 h-5 text-blue-600"
                  aria-hidden="true"
                />
                Professional Experience
              </h2>
              <div className="space-y-8 print:space-y-4">
                {cvData.experience.map((company, companyIndex) => (
                  <div
                    key={companyIndex}
                    className="border-l-4 border-blue-200 pl-6"
                  >
                    {/* Company Header */}
                    <div className="mb-4 print:mb-2">
                      <h3 className="text-xl font-bold text-gray-900 print:text-lg">
                        {company.company}
                      </h3>
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
                            <div className="grow pl-4 print:mb-2">
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
                                className={`list-inside space-y-1 print:space-y-0 text-gray-700 print:text-sm ${
                                  position.description.length > 1 && "list-disc"
                                }`}
                              >
                                {position.description.map((item, i) => (
                                  <li key={i} className="print:mb-1">
                                    {item}
                                  </li>
                                ))}
                              </ul>
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
                Education
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

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 print:text-xl print:mb-3">
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

            {/* Certifications */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 print:text-xl print:mb-3">
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
