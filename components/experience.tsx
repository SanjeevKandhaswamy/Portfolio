"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experienceData = [
  {
    position: "AI Developer",
    company: "Alpharion Inc.",
    location: "Remote Work",
    type: "Part-time",
    duration: "Feb 2025 - Present",
    description:
      "Collaborating with a team of AI researchers to develop a model for AI influencer.",
    responsibilities: [
      "Research on viable ways to create an AI influencer",
      "Develop a prototype for the AI influencer using RAG architecture",
      "Collaborated with design and product teams to deliver high-quality user experiences",
      "Implemented performance optimizations resulting in faster load times",
    ],
    technologies: ["Python", "Tensorflow", "Pytorch", "Streamlit"],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading">Work Experience</h2>
            <p className="subheading mx-auto">My professional journey and career highlights.</p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {experienceData.map((job, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card>
                <CardHeader className="flex flex-row items-start space-x-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <CardTitle>{job.position}</CardTitle>
                      <Badge variant="outline">{job.duration}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div className="font-medium">{job.company}</div>
                      <div>
                        {job.location} | {job.type}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{job.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {job.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
