"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Expense Tracker",
    description:
      "A modern web application built with tkinter, chart.js, and Firebase for tracking expenses and generating reports. Features data visualization.",
    image: "/Expense-tracker.png?height=400&width=600",
    tags: ["Python", "tkinter", "Chart.js", "Firebase"],
    githubUrl: "https://github.com/SanjeevKandhaswamy/Expense_Tracker",
  },
  {
    title: "DetectAI - AI Model for Fake News and Deepfake Detection",
    description:
      "Built a dual-purpose detection tool using Python and TensorFlow to identify misinformation in both text and video formats.",
    image: "/ai-detection.png?height=400&width=600",
    tags: ["Deepfake Detection", "Fake news Detection", "Python", "TensorFlow"],
    githubUrl: "https://detectai-web.netlify.app/", 
  },
  {
    title: "VADER Sentiment Analysis",
    description:
      "A sentiment analysis tool using the VADER model to classify text as positive, negative, or neutral.",
    image: "/ML-concept.png?height=400&width=600",
    tags: ["Machine Learning", "NLP", "Python", "VADER"],
    githubUrl: "https://github.com/SanjeevKandhaswamy/Sentiment-Analysis",
  },
  {
    title: "Sticky Notes App",
    description:
      "A simple sticky notes app to provide users with a digital space to jot down quick notes and reminders.",
    image: "/sticknotes.png?height=400&width=600",
    tags: ["MERN"],
    githubUrl: "https://github.com/SanjeevKandhaswamy/",
  },
]

export default function Projects() {
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
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading">My Projects</h2>
            <p className="subheading mx-auto">
              Here are some of my recent projects. Each project is a unique piece of development.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="https://github.com/SanjeevKandhaswamy" target="_blank">
              View More Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
