"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import CenteredContainer from "./CenteredContainer"
import MasonryGrid from "./MasonryGrid"
import { ChevronDown, Users, Calendar, Bell, ArrowRight, Rocket, Send } from "lucide-react"
import HeroSection from "./PrHeroSection"

const PromotionPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    setIsVisible(true)
    controls.start((i) => ({
      y: [0, -10, 0],
      transition: { delay: i * 0.2, repeat: Number.POSITIVE_INFINITY, duration: 2 },
    }))
  }, [controls])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      <CenteredContainer>
        {/* Hero Section */}
        
        <HeroSection/>

        {/* Features Section */}
        <section className="py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
              <FeatureCard
                icon={<Calendar className="w-12 h-12 text-orange-600" />}
                title="Organize Events Seamlessly"
                description="Manage all your college events with ease, from workshops to festivals, using our intuitive platform."
              />
              <FeatureCard
                icon={<Users className="w-12 h-12 text-indigo-600" />}
                title="Collaborate with Peers"
                description="Work with your college mates and create amazing events that everyone will remember!"
              />
              <FeatureCard
                icon={<Bell className="w-12 h-12 text-orange-600" />}
                title="Real-Time Updates"
                description="Stay updated with the latest event info and important announcements at all times."
              />
            </div>
          </motion.div>
        </section>

        {/* Interactive Showcase */}
        <section className="py-20 bg-gray-50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Experience Innovation</h2>
            <div className="max-w-4xl mx-auto px-4">
              <InteractiveShowcase />
            </div>
          </motion.div>
        </section>

        {/* MasonryGrid Section */}
        <section className="py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.02 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
          >
            <motion.h2
              className="text-4xl font-bold text-gray-800 mb-12 text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              Our Events Showcase
            </motion.h2>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              <MasonryGrid />
            </motion.div>
          </motion.div>

        </section>
      </CenteredContainer>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-indigo-600 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join SDIETTechies today and take your college events to the next level!
          </p>
          <motion.button
            className="px-8 py-4 bg-white text-indigo-600 text-lg font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join SDIETTechies Now
            <ArrowRight className="inline-block ml-2 w-6 h-6" />
          </motion.button>
        </motion.div>
      </section>

    </div>
  )
}

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
    whileHover={{ y: -5 }}
  >
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
)

const InteractiveShowcase = () => {
  const [activeTab, setActiveTab] = useState("events")

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 rounded-l-lg ${activeTab === "events" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setActiveTab("events")}
        >
          Events
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${activeTab === "innovation" ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setActiveTab("innovation")}
        >
          Innovation
        </button>
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "events" ? (
          <div className="text-center">
            <Calendar className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Streamlined Event Management</h3>
            <p className="text-gray-600">
              Our platform simplifies the entire event lifecycle, from planning to execution, ensuring your college
              events are a resounding success.
            </p>
          </div>
        ) : (
          <div className="text-center">
            <Rocket className="w-16 h-16 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Fostering Innovation</h3>
            <p className="text-gray-600">
              SDIETTechies provides a space for creative minds to collaborate, innovate, and bring groundbreaking ideas
              to life within your college community.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default PromotionPage

