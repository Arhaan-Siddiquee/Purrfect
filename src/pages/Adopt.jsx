import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PawPrint, Heart, Globe, Compass, Star } from 'lucide-react';

const Adopt = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: PawPrint,
      title: "Personalized Matching",
      description: "Our advanced algorithm finds your perfect companion",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Holistic support from first contact to forever home",
      gradient: "from-blue-500 to-teal-400"
    },
    {
      icon: Globe,
      title: "Global Connections",
      description: "Bridging animals with loving homes worldwide",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      icon: Compass,
      title: "Journey Guidance",
      description: "Comprehensive support throughout your adoption process",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: Star,
      title: "Community Impact",
      description: "Every adoption creates ripples of positive change",
      gradient: "from-indigo-600 to-purple-700"
    }
  ];

  const handleBeginJourney = () => {
    navigate('/pets');
  };

  return (
    <motion.div 
      style={{ 
        backgroundColor: 'hsl(0, 0%, 0%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}
      className="text-white"
    >
      {/* Ethereal Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 2,
              opacity: 0.3
            }}
            animate={{ 
              rotate: 360,
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute w-2 h-2 bg-white/10 rounded-full blur-sm"
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent 
            bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Reimagine Companionship
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            An innovative platform that transforms lives through meaningful connections 
            between compassionate humans and animals seeking a home.
          </p>
        </motion.div>

        {/* Interactive Features Section */}
        <div className="grid md:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0,0,0,0.3)"
              }}
              className={`bg-gradient-to-br ${feature.gradient} 
                rounded-3xl p-6 transform transition-all duration-300
                hover:rotate-3 hover:skew-y-3 cursor-pointer
                flex flex-col items-center text-center`}
            >
              <feature.icon className="w-16 h-16 mb-4 text-white/80" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Interactive CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex justify-center"
        >
          <button 
            onClick={handleBeginJourney}
            className="
              px-12 py-4 
              bg-gradient-to-r from-pink-500 to-purple-600
              text-white 
              font-bold 
              rounded-full 
              text-lg
              transform 
              transition-all 
              duration-300
              hover:scale-110
              hover:rotate-6
              hover:shadow-2xl
              focus:outline-none
              focus:ring-4
              focus:ring-purple-300/50
            ">
              Begin Your Journey
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Adopt;