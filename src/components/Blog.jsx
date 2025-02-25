import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaTags } from 'react-icons/fa';

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn how to structure and optimize large-scale React applications for better performance and maintainability.",
    date: "2024-03-15",
    readTime: "8 min",
    tags: ["React", "Performance", "Architecture"],
    image: "https://placeholder.com/800x400",
    slug: "building-scalable-react-apps"
  },
  // Add more blog posts
];

const BlogCard = ({ post }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className="bg-neutral-900/50 rounded-xl overflow-hidden"
  >
    <img 
      src={post.image} 
      alt={post.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex gap-4 text-sm text-neutral-400 mb-3">
        <span className="flex items-center gap-1">
          <FaCalendar className="text-cyan-500" />
          {new Date(post.date).toLocaleDateString()}
        </span>
        <span className="flex items-center gap-1">
          <FaClock className="text-cyan-500" />
          {post.readTime}
        </span>
      </div>
      <h3 className="text-xl font-medium mb-2 hover:text-cyan-400 transition-colors">
        {post.title}
      </h3>
      <p className="text-neutral-400 mb-4">{post.excerpt}</p>
      <div className="flex gap-2">
        {post.tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-cyan-400">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

const Blog = () => {
  return (
    <div className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-thin text-center mb-16"
      >
        Latest Articles
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog; 