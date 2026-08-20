import React from "react";
import { motion } from "framer-motion";
import { FaVideo, FaFilm, FaCameraRetro, FaPhotoVideo } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "The Art of Cinematic Videography",
    desc: "Discover how lighting, camera angles, and storytelling techniques create cinematic videos that captivate audiences.",
    date: "October 2025",
    icon: <FaFilm className="text-red-500 text-4xl" />,
    tag: "Cinematography",
  },
  {
    id: 2,
    title: "Essential Gear Every Videographer Needs",
    desc: "From cameras to gimbals and microphones — explore the must-have equipment for professional video production.",
    date: "September 2025",
    icon: <FaCameraRetro className="text-yellow-500 text-4xl" />,
    tag: "Equipment",
  },
  {
    id: 3,
    title: "Video Editing Techniques for Stunning Visuals",
    desc: "Learn color grading, transitions, sound design, and editing workflows to transform raw footage into masterpieces.",
    date: "August 2025",
    icon: <FaPhotoVideo className="text-purple-500 text-4xl" />,
    tag: "Editing",
  },
  {
    id: 4,
    title: "Shooting Professional Videos with Any Budget",
    desc: "Practical tips to create high-quality videos even with entry-level gear using creativity and smart planning.",
    date: "July 2025",
    icon: <FaVideo className="text-blue-500 text-4xl" />,
    tag: "Production",
  },
];

const Blog = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 dark:text-white py-16 px-6 sm:px-12 lg:px-24 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Videography <span className="text-red-600">Blog</span>
        </motion.h2>

        <motion.p
          className="text-gray-500 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Sharing creative insights, filming techniques, gear reviews, and
          professional tips to help you produce stunning video content.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex justify-center mb-4">{blog.icon}</div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {blog.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">
                {blog.desc}
              </p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-red-600 font-medium">
                  #{blog.tag}
                </span>
                <span className="text-gray-400">{blog.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
