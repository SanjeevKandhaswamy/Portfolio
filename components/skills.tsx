"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BrainCircuit, Code, Database, Layout, Server, Smartphone, Workflow } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-8 w-8" />,
    items: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Figma"],
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8" />,
    items: ["Node.js", "Express", "Flask", "Django"],
  },
  {
    category: "Database",
    icon: <Database className="h-8 w-8" />,
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    category: "Artificial Intelligence",
    icon: <BrainCircuit className="h-8 w-8" />,
    items: ["TensorFlow", "PyTorch", "Keras", "OpenCV", "Scikit-learn"],
  },
  {
    category: "DevOps",
    icon: <Workflow className="h-8 w-8" />,
    items: ["Git", "Docker", "CI/CD", "Vercel"],
  },
  {
    category: "Languages",
    icon: <Code className="h-8 w-8" />,
    items: ["Python", "Java", "C++", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading">My Skills</h2>
            <p className="subheading mx-auto">Here are some of the technologies and tools I work with.</p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-card rounded-lg p-6 h-full shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="mr-4 text-primary">{skill.icon}</div>
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
