"use client"
import { Download, Mail, Phone, MapPin, Linkedin, Calendar, Building, GraduationCap, Award, User } from "lucide-react"

export default function CVPage() {
  // You can update this data with your actual LinkedIn information
  const cvData = {
    personalInfo: {
      name: "Your Real Name",
      title: "Your Professional Title",
      email: "your.real.email@domain.com",
      phone: "your-real-phone",
      location: "Your City, State/Country",
      linkedin: "linkedin.com/in/gusleindecker", // Keep this as is
      summary:
        "Passionate software engineer with expertise in full-stack development, cloud architecture, and team leadership. Committed to building scalable solutions and fostering collaborative development environments.",
    },
    experience: [
      // Replace with your actual work experience from LinkedIn
    ],
    education: [
      // Replace with your actual education
    ],
    skills: [
      // Replace with your actual skills
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
  }

  const handleDownloadPDF = () => {
    window.print()
  }

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
          <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 print:bg-blue-600">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{cvData.personalInfo.name}</h1>
                <p className="text-xl text-blue-100 mb-4">{cvData.personalInfo.title}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <a href={`mailto:${cvData.personalInfo.email}`} className="hover:underline">
                      {cvData.personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <a href={`tel:${cvData.personalInfo.phone}`} className="hover:underline">
                      {cvData.personalInfo.phone}
                    </a>
                  </div>
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

          <div className="p-8 space-y-8">
            {/* Summary */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" aria-hidden="true" />
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">{cvData.personalInfo.summary}</p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Building className="w-5 h-5 text-blue-600" aria-hidden="true" />
                Professional Experience
              </h2>
              <div className="space-y-6">
                {cvData.experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        <p className="text-lg text-blue-600 font-medium">{job.company}</p>
                      </div>
                      <div className="text-sm text-gray-600 mt-1 md:mt-0 flex items-center gap-1">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        {job.duration}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3 flex items-center gap-1">
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                      {job.location}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {job.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" aria-hidden="true" />
                Education
              </h2>
              <div className="space-y-4">
                {cvData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-lg text-blue-600 font-medium">{edu.school}</p>
                    <div className="flex flex-col md:flex-row md:justify-between text-gray-600 mt-1">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
              <div className="flex flex-wrap gap-2">
                {cvData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium print:bg-gray-100 print:text-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" aria-hidden="true" />
                Certifications
              </h2>
              <div className="space-y-3">
                {cvData.certifications.map((cert, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                      <p className="text-gray-600">{cert.issuer}</p>
                    </div>
                    <span className="text-gray-600 mt-1 md:mt-0">{cert.date}</span>
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
  )
}
