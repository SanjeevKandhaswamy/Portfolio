"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Amrita Vishwa Vidyapeetham",
    location: "Coimbatore, Tamil Nadu, India",
    duration: "2022-Present",
    description: "Focused on Software Engineering, Data Structures, and Algorithms. Participated in hackathons and coding competitions.",
    achievements: ["iDEA club(software development club) Core Team Lead", "Joint-Secretary of Amrita Model United Nations Society", "Former Head of Event Management of Amrita Model United Nations Society"],
  },
  {
    degree: "CBSE",
    institution: "Suguna PIP School",
    location: "Coimbatore, Tamil Nadu, India",
    duration: "2019-2022",
    description: "Completed 12th grade with a focus on Science and Mathematics. Participated in various extracurricular activities.",
    achievements: ["Participated in Inter-district Athletics meet"],
  },
  {
    degree: "CBSE",
    institution: "Our Own English High School",
    location: "Sharjah, UAE",
    duration: "2017-2019",
    description: "Completed subjects that solidified my understanding of core concepts in Science and Mathematics. Engaged in various extracurricular activities.",
    achievements: ["Sastra Pratibha winner - Organised by the Indian Embassy in UAE", "Went to the final round of The Hamdan Bin Rashid Al Maktoum Award for Distinguished Academic Performance"],
  },
]

export default function Education() {
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
    <section id="education" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading">Education</h2>
            <p className="subheading mx-auto">My academic background and qualifications.</p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {educationData.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card>
                <CardHeader className="flex flex-row items-start space-x-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle>{item.degree}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      <div className="font-medium">{item.institution}</div>
                      <div>
                        {item.location} | {item.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold mb-2">Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm">
                          {achievement}
                        </li>
                      ))}
                    </ul>
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
