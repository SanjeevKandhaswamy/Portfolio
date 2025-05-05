"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="heading">About Me</h2>
            <p className="mt-6 text-lg">
              I'm a passionate developer with a background in web development and developing Neural Networks. I enjoy creating beautiful,
              functional, and user-friendly websites and applications. I also enjoy creating AI models to resolve real-world problems.
            </p>
            <p className="mt-4 text-lg">
              I've worked on a variety of projects ranging from small websites to complex products with a focus on user experience. 
              I'm constantly learning and exploring new technologies to improve my skills.
            </p>
            <p className="mt-4 text-lg">
              When I'm not coding, you can find me exploring new technologies, reading, or enjoying video games.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link href="/Resume1.pdf" target="_blank" download="Profile.pdf">
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/Profile-Picture.jpg?height=320&width=320" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
