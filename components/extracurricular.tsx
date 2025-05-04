"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Music, Users, Palette, Bike, Globe, CodeSquareIcon, Speaker, SpeakerIcon, PersonStanding, Brain } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const activities = [
  {
    title: "iDEA Club",
    role: "Core Team Lead",
    duration: "2024 - Present",
    description:
      "Leading a team of developers to create innovative software solutions.",
    icon: <CodeSquareIcon className="h-5 w-5" />,
  },
  {
    title: "Amrita Model United Nations Society",
    role: "Joint-Secretary",
    duration: "2024 - Present",
    description: "Coordinated communication between members and faculty; organized events which reduced planning time by 30% and increased event attendance by 15%",
    icon: <Brain className="h-5 w-5" />,
  },
  {
    title: "Amrita Model United Nations Society",
    role: "Head of Event Management",
    duration: "2023-2024",
    description: "Directed the planning and execution of 5 Mock MUNs, helping train members for real-world MUN concepts.",
    icon: <PersonStanding className="h-5 w-5" />,
  },
]

export default function Extracurricular() {
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
    <section id="extracurricular" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading">Extra-curricular Activities</h2>
            <p className="subheading mx-auto">
              Beyond work and education, here's what keeps me engaged and passionate.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activities.map((activity, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                  <div className="bg-primary/10 p-2 rounded-full">{activity.icon}</div>
                  <div>
                    <CardTitle className="text-lg">{activity.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {activity.role} | {activity.duration}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{activity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
