import React from "react";
import { motion } from "framer-motion";
import profilePic from "./assets/profile.jpg";

const data = {
  name: "MD Mejbah Ur Rahman Sowad",
  title: "Data Analyst",
  experience: "Experienced data analyst with 2+ years of hands-on experience in data analysis, automation, and visualization using Python and Power BI.",
  about: `Results-driven data analyst with a passion for automating workflows, delivering actionable business insights, and optimizing processes with technology. Proven experience in Python scripting, Power BI dashboard creation, and cross-functional team collaboration at Unilever Bangladesh. Adept at identifying inefficiencies and building robust data-driven solutions to enhance decision-making and operational excellence.`,
  experienceDetails: [
    {
      role: "Supply Chain Executive",
      company: "Unilever Bangladesh Limited",
      duration: "Mar 2024 – Present",
      details: [
        "Managed sales operations for over 100 distributors within the Customer Service Excellence team, covering 3 out of 4 depots nationally.",
        "Streamlined processes by integrating technology solutions, wrote Python scripts and automated Excel workflows, reduced manual effort, and saved significant man-hours (around 1500 hours annually).",
        "Performed data analysis to generate actionable insights, using Power BI and Python, enabling informed and strategic business decisions. Constructed more than 5 dashboards with data from multiple sources.",
        "Identified and resolved critical operational challenges by integrating automated distributor management systems, resulting in an annual reduction of 1500 hours spent on manual processes.",
        "Collaborated with cross-functional teams on 2-3 projects to ensure high standards of service delivery and operational excellence."
      ]
    },
    {
      role: "Distribution Requirement Planner",
      company: "Unilever Bangladesh Limited",
      duration: "Jun 2023 – Feb 2024",
      details: [
        "Managed the national distribution of stock from multiple production plants to five depots nationally, ensured timely and accurate delivery to meet operational demands, maintained loss due to stock unavailability below 5%.",
        "Developed and implemented over 15 Python scripts to automate distribution processes, reduce complexity, minimize manual hours, and improve overall efficiency.",
        "Designed and maintained 2 interactive dashboards in Power BI to provide real-time insights, supporting data-driven decision making.",
        "Played a key role in optimizing logistics and supply chain operations by integrating technology and leveraging data analytics."
      ]
    },
    {
      role: "Supply Chain Intern",
      company: "Unilever Bangladesh Limited",
      duration: "Feb 2023 – May 2023",
      details: [
        "Automated Business Waste Alert using Python to reduce operation time by more than 90%, that increased efficiency of work and minimized non-value-adding tasks.",
        "Generated Dynamic CV- Predicts the month end sales value from any point in the month with an accuracy greater than 97%."
      ]
    }
  ],  
  skills: [
    "Python", "C++", "C", "Java", "JavaScript", "R", "SQL",
    "Power BI", "Tableau", "Excel", "SAP", "Figma",
    "Effective Communication", "Team Collaboration", "Problem Solving"
  ],
  projects: [
    {
      title: "Business Waste Alert",
      details: [
        "Automated Business Waste Alert using Python to reduce operation time by over 90%, increasing work efficiency and minimizing non-value-adding tasks.",
        "Tools Used : Python, Excel, Power BI"
      ],
      link : "https://github.com/Sowad13/Business-Waste-Alert"
    },
    {
      title: "Dynamic CV",
      details: [
        "Developed a dynamic forecasting tool that predicts month-end sales values with over 97% accuracy using historical data.",
        "Tools Used : Excel, Linear Regression"
      ]
    }
  ],
  education: [
    {
      title: "BSc in Computer Science and Engineering",
      institute: "Ahsanullah University of Science and Technology",
      year: "2018–2022"
    },
    {
      title: "A Levels",
      institute: "Academia",
      year: "2017"
    },
    {
      title: "O Levels",
      institute: "Maple Leaf International School",
      year: "2015"
    }
  ],
  publications: [
    {
      title: "Depression Detection through Smartphone Sensing: A Federated Learning Approach",
      journal: "International Journal of Interactive Mobile Technologies",
      date: "Jan 2023",
      link: "https://doi.org/10.3991/ijim.v17i01.35131"
    }
  ],
  achievements: [
    {
      title: "Unilever Supply Chain Director’s Award",
      description: "Received for the successful automation project PLAN DIISH."
    }
  ]
};

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen font-sans text-white">
      <header className="bg-gradient-to-br from-blue-100 to-blue-300 shadow-xl py-10 px-6 text-center">
        <img
          src={profilePic}
          alt="Profile"
          className="w-40 h-40 mx-auto rounded-full border-2 border-yellow-400 mb-4"
        />
        <motion.h1
          className="text-5xl font-extrabold text-sky-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {data.name}
        </motion.h1>
        <p className="text-2xl text-purple-900 mt-2">{data.title}</p>
        <p className="text-lg mt-4 text-cyan-900 italic">{data.experience}</p>
      </header>

      <Section title="About Me" color="indigo" content={<p className="text-gray-300">{data.about}</p>} />

      <Section title="Experience" color="blue" content={
        <div className="space-y-6">
          {data.experienceDetails.map((job, idx) => (
            <div key={idx} className="bg-gray-800 border border-blue-600 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-yellow-300">{job.role}</h3>
              <p className="text-sm text-pink-300">{job.company} — {job.duration}</p>
              <ul className="list-disc list-inside mt-2 text-gray-200 text-sm space-y-1">
                {job.details.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          ))}
        </div>
      } />

      <Section title="Skills" color="yellow" content={
        <div className="flex flex-wrap gap-6">
          {data.skills.map((skill, idx) => (
            <span key={idx} className="bg-yellow text-white px-4 py-2 rounded-full text-sm shadow-md shadow-yellow-500">{skill}</span>
          ))}
        </div>
      } />

      <Section title="Projects" color="purple" content={
        <div className="grid md:grid-cols-2 gap-8">
          {data.projects.map((project, idx) => (
            <motion.div key={idx} className="bg-gradient-to-br from-purple-700 to-blue-950 p-6 rounded-lg shadow-xl" whileHover={{ scale: 1.02 }}>
            {/* // <motion.div key={idx} className="bg-purple-700 border border-purple-600 p-6 rounded-lg shadow-xl" whileHover={{ scale: 1.02 }}> */}

              <h3 className="text-xl font-bold text-yellow-300 mb-2">{project.title}</h3>
              <ul className="list-disc list-inside mt-2 text-gray-200 text-sm space-y-1">
                {project.details.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
              <a href={project.link} className="text-yellow-400 underline text-sm" target="_blank" rel="noopener noreferrer">{project.link}</a>
              {/* <p className="text-gray-100 text-sm leading-relaxed">{project.description}</p> */}
            </motion.div>
          ))}
        </div>
      } />

      <Section title="Education" color="green" content={
        <div className="space-y-6">
          {data.education.map((edu, idx) => (
            <div key={idx} className="bg-gray-800 border border-green-600 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-yellow-300">{edu.title}</h3>
              <p className="text-sm text-pink-300">{edu.institute}</p>
              <p className="text-xs text-gray-300">{edu.year}</p>
            </div>
          ))}
        </div>
      } />

      <Section title="Publications" color="pink" content={
        <div className="space-y-6">
          {data.publications.map((pub, idx) => (
            <div key={idx} className="bg-gray-800 border border-pink-600 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-yellow-300">{pub.title}</h3>
              <p className="text-sm text-pink-300">{pub.journal} — {pub.date}</p>
              <a href={pub.link} className="text-blue-400 underline text-sm" target="_blank" rel="noopener noreferrer">Read publication</a>
            </div>
          ))}
        </div>
      } />

      <Section title="Achievements" color="yellow" content={
        <div className="space-y-6">
          {data.achievements.map((ach, idx) => (
            <div key={idx} className="bg-gray-800 border border-yellow-600 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-300">{ach.title}</h3>
              <p className="text-sm text-gray-200">{ach.description}</p>
            </div>
          ))}
        </div>
      } />

      <footer className="bg-gradient-to-r from-slate-600 to-slate-900 text-yellow-200 text-center py-6 mt-12 text-sm">
        © {new Date().getFullYear()} {data.name}
      </footer>
    </div>
  );
}

function Section({ title, color, content }) {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className={`text-3xl font-bold text-${color}-400 mb-6 border-b-2 border-${color}-500 pb-2`}>{title}</h2>
        {content}
      </motion.div>
    </section>
  );
}
