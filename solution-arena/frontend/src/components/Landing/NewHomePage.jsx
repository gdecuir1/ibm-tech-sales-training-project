import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, Zap, TrendingUp, Award, BarChart3, Brain, 
  Clock, Users, CheckCircle2, ArrowRight, Sparkles,
  Trophy, Flame, Star, ChevronRight, Play
} from 'lucide-react';

function NewHomePage() {
  const navigate = useNavigate();

  const handleStartTraining = () => {
    navigate('/dashboard');
  };

  const handleViewProgress = () => {
    navigate('/dashboard');
  };

  const handleStartInteractive = () => {
    navigate('/interactive');
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 pt-20 pb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                AI-Powered Sales Training
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              Master IBM Sales Through
              <br />
              Rapid AI Practice
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
            >
              Build elite solution selling skills with 100+ adaptive scenarios, 
              real-time AI coaching, and performance analytics that drive results.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={handleStartTraining}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
              >
                Start Training
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleViewProgress}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              >
                View Dashboard
                <BarChart3 className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* LIVE METRICS SECTION */}
        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { value: '100+', label: 'Scenarios', icon: Target },
              { value: '10', label: 'Industries', icon: Users },
              { value: '7-Step', label: 'Framework', icon: CheckCircle2 },
              { value: '3-6 min', label: 'Practice Sessions', icon: Clock }
            ].map((metric, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <metric.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <div className="text-3xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* HOW IT WORKS */}
        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              How It Works
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Play,
                  title: 'Practice',
                  description: 'Choose from 100+ real-world IBM sales scenarios across 10 industries',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Brain,
                  title: 'Receive AI Feedback',
                  description: 'Get instant, detailed coaching on your solution architecture and positioning',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: TrendingUp,
                  title: 'Track Mastery',
                  description: 'Watch your skills grow with comprehensive analytics and personalized insights',
                  color: 'from-orange-500 to-red-500'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ChevronRight className="w-8 h-8 text-gray-600" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FEATURE GRID */}
        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              Premium Features
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: 'Adaptive Difficulty', description: 'AI adjusts challenge level based on your performance' },
                { icon: Target, title: 'Industry Mastery', description: 'Track progress across 10 different industries' },
                { icon: Trophy, title: 'Gamification', description: 'Earn XP, unlock achievements, climb leaderboards' },
                { icon: BarChart3, title: 'Skill Heatmaps', description: 'Visualize strengths and weaknesses at a glance' },
                { icon: TrendingUp, title: 'Performance Analytics', description: 'Deep insights into your learning journey' },
                { icon: Brain, title: 'AI Recommendations', description: 'Personalized practice suggestions' },
                { icon: Award, title: 'Achievements', description: 'Unlock badges as you master new skills' },
                { icon: Flame, title: 'Daily Streaks', description: 'Build consistency with streak tracking' },
                { icon: Star, title: 'IBM Portfolio Coverage', description: 'Master the complete IBM solution portfolio' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer"
                >
                  <feature.icon className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Join Elite Sales Professionals
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '+24%', label: 'Avg Score Improvement' },
                  { value: '10,000+', label: 'Scenarios Completed' },
                  { value: '500+', label: 'Hours Practiced' },
                  { value: '150+', label: 'Active Users' }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* INDUSTRY COVERAGE */}
        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              Master Every Industry
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: 'Retail', icon: '🏪' },
                { name: 'Healthcare', icon: '🏥' },
                { name: 'Finance', icon: '💰' },
                { name: 'Manufacturing', icon: '🏭' },
                { name: 'Government', icon: '🏛️' },
                { name: 'Education', icon: '🎓' },
                { name: 'Energy', icon: '⚡' },
                { name: 'Transportation', icon: '🚚' },
                { name: 'Media', icon: '📺' },
                { name: 'Telecom', icon: '📡' }
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{industry.icon}</div>
                  <div className="font-semibold">{industry.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FINAL CTA */}
        <section className="container mx-auto px-6 py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to Transform Your Sales Skills?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Start your first sprint today and see immediate improvement
            </p>
            <button
              onClick={handleStartInteractive}
              className="group px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-bold text-xl transition-all duration-300 flex items-center gap-3 mx-auto shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
            >
              Start Your First Sprint
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default NewHomePage;

// Made with Bob
