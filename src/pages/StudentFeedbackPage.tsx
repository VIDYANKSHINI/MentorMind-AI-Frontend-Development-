import { useState } from 'react';
import { MessageSquare, Heart, Volume2, ThumbsUp, Star } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { motion } from 'framer-motion';

interface FeedbackItem {
  id: number;
  studentName: string;
  avatar: string;
  feedback: string;
  category: 'appreciation' | 'accessibility' | 'suggestion';
  timestamp: string;
  sessionId: string;
  rating: number;
}

// Mock student feedback data
const mockFeedbacks: FeedbackItem[] = [
  {
    id: 1,
    studentName: 'Priya Sharma',
    avatar: '👩‍🎓',
    feedback: 'Thank you for explaining in Hindi! It was really helpful for me to understand the complex topics better. Your bilingual approach makes learning so much easier.',
    category: 'appreciation',
    timestamp: '2 hours ago',
    sessionId: 'abc123',
    rating: 5
  },
  {
    id: 2,
    studentName: 'Rahul Kumar',
    avatar: '👨‍💼',
    feedback: "I can't watch your lecture due to visual impairment, but with the audio clarity feature, I am able to hear everything clearly. Your explanations are very detailed and easy to follow through audio alone.",
    category: 'accessibility',
    timestamp: '5 hours ago',
    sessionId: 'def456',
    rating: 5
  },
  {
    id: 3,
    studentName: 'Anjali Patel',
    avatar: '👩‍💻',
    feedback: 'In the last video, I was not able to hear your voice clearly during the middle section. Could you please check your microphone settings? This session was much better though!',
    category: 'suggestion',
    timestamp: '1 day ago',
    sessionId: 'ghi789',
    rating: 4
  },
  {
    id: 4,
    studentName: 'Vikram Singh',
    avatar: '👨‍🎓',
    feedback: 'The pace of explanation was perfect! Not too fast, not too slow. The captions also helped me take better notes. Thank you!',
    category: 'appreciation',
    timestamp: '1 day ago',
    sessionId: 'jkl012',
    rating: 5
  },
  {
    id: 5,
    studentName: 'Sneha Reddy',
    avatar: '👩‍🔬',
    feedback: 'As a hearing-impaired student, the captions feature is a lifesaver. However, sometimes the technical terms are not captioned correctly. Maybe you could speak them more clearly?',
    category: 'suggestion',
    timestamp: '2 days ago',
    sessionId: 'mno345',
    rating: 4
  },
  {
    id: 6,
    studentName: 'Arjun Mehta',
    avatar: '👨‍💻',
    feedback: 'Your use of real-world examples makes everything so relatable! I finally understood the concept that I was struggling with for weeks.',
    category: 'appreciation',
    timestamp: '2 days ago',
    sessionId: 'pqr678',
    rating: 5
  }
];

export function StudentFeedbackPage() {
  const [filterCategory, setFilterCategory] = useState<'all' | 'appreciation' | 'accessibility' | 'suggestion'>('all');
  const darkMode = useDarkMode();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'appreciation':
        return <Heart className="w-5 h-5 text-pink-600" />;
      case 'accessibility':
        return <Volume2 className="w-5 h-5 text-blue-600" />;
      case 'suggestion':
        return <ThumbsUp className="w-5 h-5 text-purple-600" />;
      default:
        return <MessageSquare className="w-5 h-5 text-gray-600" />;
    }
  };

  const getCategoryBadge = (category: string) => {
    switch(category) {
      case 'appreciation':
        return darkMode ? 'bg-pink-600/20 text-pink-400 border border-pink-500/30' : 'bg-pink-100 text-pink-800 border border-pink-300';
      case 'accessibility':
        return darkMode ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'bg-blue-100 text-blue-800 border border-blue-300';
      case 'suggestion':
        return darkMode ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30' : 'bg-purple-100 text-purple-800 border border-purple-300';
      default:
        return darkMode ? 'bg-gray-600/20 text-gray-400 border border-gray-500/30' : 'bg-gray-100 text-gray-800 border border-gray-300';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'appreciation':
        return 'Appreciation';
      case 'accessibility':
        return 'Accessibility';
      case 'suggestion':
        return 'Suggestion';
      default:
        return 'Feedback';
    }
  };

  const filteredFeedbacks = filterCategory === 'all' 
    ? mockFeedbacks 
    : mockFeedbacks.filter(f => f.category === filterCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[rgba(1,1,1,0)]">
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <MessageSquare className={`w-10 h-10 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h1 className={`text-3xl md:text-4xl ${
            darkMode ? 'text-white font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]' : 'text-gray-900 font-bold'
          }`}>
            Student Feedback
          </h1>
        </div>
        <p className={`${
          darkMode ? 'text-[#B8BACC] font-medium' : 'text-gray-600 font-medium'
        }`}>
          View student feedback and insights to help improve your teaching approach
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div 
        className={`rounded-xl p-6 mb-8 shadow-[0_4px_10px_rgba(0,0,0,0.15)] ${
          darkMode 
            ? 'bg-white/[0.03] backdrop-blur-sm border border-white/[0.08]' 
            : 'bg-white backdrop-blur-sm border border-gray-200'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap gap-3 items-center">
          <span className={`font-semibold flex items-center gap-2 ${darkMode ? 'text-[#E8E9F0]' : 'text-gray-800'}`}>
            <MessageSquare className="w-5 h-5" />
            Filter by:
          </span>
          <motion.button
            onClick={() => setFilterCategory('all')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium shadow-[0_4px_6px_rgba(0,0,0,0.2)] ${
              filterCategory === 'all'
                ? darkMode
                  ? 'bg-blue-600 text-white shadow-[0_6px_12px_rgba(59,130,246,0.4)]'
                  : 'bg-blue-600 text-white shadow-[0_6px_12px_rgba(59,130,246,0.5)]'
                : darkMode
                ? 'bg-white/[0.05] text-[#B8BACC] hover:bg-white/[0.08] hover:text-white border border-white/[0.08] hover:shadow-[0_6px_10px_rgba(0,0,0,0.25)]'
                : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 border border-gray-300 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-200 hover:border-gray-400 hover:shadow-[0_6px_10px_rgba(0,0,0,0.25)]'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Feedback
          </motion.button>
          <motion.button
            onClick={() => setFilterCategory('appreciation')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 font-medium shadow-[0_4px_6px_rgba(0,0,0,0.2)] ${
              filterCategory === 'appreciation'
                ? darkMode
                  ? 'bg-pink-600 text-white shadow-[0_6px_12px_rgba(219,39,119,0.4)]'
                  : 'bg-pink-600 text-white shadow-[0_6px_12px_rgba(219,39,119,0.5)]'
                : darkMode
                ? 'bg-white/[0.05] text-[#B8BACC] hover:bg-white/[0.08] hover:text-white border border-white/[0.08] hover:shadow-[0_6px_10px_rgba(0,0,0,0.25)]'
                : 'bg-gradient-to-br from-pink-50 to-pink-100 text-pink-700 border border-pink-300 hover:bg-gradient-to-br hover:from-pink-100 hover:to-pink-200 hover:border-pink-400 hover:shadow-[0_6px_10px_rgba(0,0,0,0.25)]'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-4 h-4" />
            Appreciation
          </motion.button>
          <motion.button
            onClick={() => setFilterCategory('accessibility')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 font-medium shadow-[0_4px_6px_rgba(0,0,0,0.2)] ${
              filterCategory === 'accessibility'
                ? darkMode
                  ? 'bg-blue-600 text-white shadow-[0_6px_12px_rgba(59,130,246,0.4)]'
                  : 'bg-blue-600 text-white shadow-[0_6px_12px_rgba(59,130,246,0.5)]'
                : darkMode
                ? 'bg-white/[0.05] text-[#B8BACC] hover:bg-white/[0.08] hover:text-white border border-white/[0.08] hover:shadow-[0_6px_10px_rgba(0,0,0,0.25)]'
                : 'bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 border border-blue-300 hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-200 hover:border-blue-400 hover:shadow-[0_6px_10px_rgba(0,0,0,0.25)]'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Volume2 className="w-4 h-4" />
            Accessibility
          </motion.button>
          <motion.button
            onClick={() => setFilterCategory('suggestion')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 font-medium shadow-[0_4px_6px_rgba(0,0,0,0.2)] ${
              filterCategory === 'suggestion'
                ? darkMode
                  ? 'bg-purple-600 text-white shadow-[0_6px_12px_rgba(147,51,234,0.4)]'
                  : 'bg-purple-600 text-white shadow-[0_6px_12px_rgba(147,51,234,0.5)]'
                : darkMode
                ? 'bg-white/[0.05] text-[#B8BACC] hover:bg-white/[0.08] hover:text-white border border-white/[0.08] hover:shadow-[0_6px_10px_rgba(0,0,0,0.25)]'
                : 'bg-gradient-to-br from-purple-50 to-purple-100 text-purple-700 border border-purple-300 hover:bg-gradient-to-br hover:from-purple-100 hover:to-purple-200 hover:border-purple-400 hover:shadow-[0_6px_10px_rgba(0,0,0,0.25)]'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ThumbsUp className="w-4 h-4" />
            Suggestions
          </motion.button>
        </div>
      </motion.div>

      {/* Feedback Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <motion.div 
          className={`rounded-xl p-6 text-center transition-all duration-200 shadow-[0_4px_10px_rgba(0,0,0,0.15)] ${
            darkMode 
              ? 'bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.05] hover:border-pink-500/30 hover:shadow-[0_6px_14px_rgba(0,0,0,0.2)]' 
              : 'bg-gradient-to-br from-pink-50 to-white border border-pink-200 hover:shadow-[0_8px_20px_rgba(219,39,119,0.25)] hover:border-pink-300'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <Heart className={`w-8 h-8 mx-auto mb-3 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`} />
          <div className={`text-2xl mb-1 ${darkMode ? 'text-pink-300 font-bold' : 'text-gray-900 font-bold'}`}>
            {mockFeedbacks.filter(f => f.category === 'appreciation').length}
          </div>
          <p className={`font-semibold ${darkMode ? 'text-[#4B4F60]' : 'text-gray-700'}`}>Appreciations</p>
        </motion.div>
        <motion.div 
          className={`rounded-xl p-6 text-center transition-all duration-200 shadow-[0_4px_10px_rgba(0,0,0,0.15)] ${
            darkMode 
              ? 'bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.05] hover:border-blue-500/30 hover:shadow-[0_6px_14px_rgba(0,0,0,0.2)]' 
              : 'bg-gradient-to-br from-blue-50 to-white border border-blue-200 hover:shadow-[0_8px_20px_rgba(59,130,246,0.25)] hover:border-blue-300'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <Volume2 className={`w-8 h-8 mx-auto mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <div className={`text-2xl mb-1 ${darkMode ? 'text-blue-300 font-bold' : 'text-gray-900 font-bold'}`}>
            {mockFeedbacks.filter(f => f.category === 'accessibility').length}
          </div>
          <p className={`font-semibold ${darkMode ? 'text-[#4B4F60]' : 'text-gray-700'}`}>Accessibility Mentions</p>
        </motion.div>
        <motion.div 
          className={`rounded-xl p-6 text-center transition-all duration-200 shadow-[0_4px_10px_rgba(0,0,0,0.15)] ${
            darkMode 
              ? 'bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.05] hover:border-purple-500/30 hover:shadow-[0_6px_14px_rgba(0,0,0,0.2)]' 
              : 'bg-gradient-to-br from-purple-50 to-white border border-purple-200 hover:shadow-[0_8px_20px_rgba(147,51,234,0.25)] hover:border-purple-300'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <ThumbsUp className={`w-8 h-8 mx-auto mb-3 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
          <div className={`text-2xl mb-1 ${darkMode ? 'text-purple-300 font-bold' : 'text-gray-900 font-bold'}`}>
            {mockFeedbacks.filter(f => f.category === 'suggestion').length}
          </div>
          <p className={`font-semibold ${darkMode ? 'text-[#4B4F60]' : 'text-gray-700'}`}>Suggestions</p>
        </motion.div>
      </div>

      {/* Feedback List */}
      <motion.div 
        className={`rounded-xl p-8 shadow-[0_4px_10px_rgba(0,0,0,0.15)] ${
          darkMode 
            ? 'bg-white/[0.03] backdrop-blur-sm border border-white/[0.08]' 
            : 'bg-white backdrop-blur-sm border border-gray-200'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className={`mb-6 flex items-center gap-3 ${darkMode ? 'text-[#E8E9F0] font-semibold' : 'text-gray-900 font-bold'}`}>
          <MessageSquare className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          Recent Feedback
        </h2>
        <div className="space-y-4">
          {filteredFeedbacks.map((feedback, index) => (
            <motion.div
              key={feedback.id}
              className={`rounded-xl p-6 transition-all duration-200 shadow-[0_4px_10px_rgba(0,0,0,0.15)] ${
                darkMode 
                  ? 'bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.04] hover:border-white/[0.12] hover:shadow-[0_6px_14px_rgba(0,0,0,0.2)]' 
                  : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-[0_8px_18px_rgba(0,0,0,0.2)] hover:border-gray-300 hover:from-gray-50 hover:to-gray-100'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
              whileHover={{ scale: 1.01, x: 5 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{feedback.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className={darkMode ? 'text-[#E8E9F0] font-medium' : 'text-gray-900 font-semibold'}>
                      {feedback.studentName}
                    </h4>
                    <span className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${getCategoryBadge(feedback.category)}`}>
                      {getCategoryIcon(feedback.category)}
                      {getCategoryLabel(feedback.category)}
                    </span>
                    <div className="flex gap-1 ml-auto">
                      {[...Array(feedback.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className={`leading-relaxed mb-2 ${darkMode ? 'text-[#2C2E48]' : 'text-gray-700'}`}>
                    {feedback.feedback}
                  </p>
                  <div className={`flex items-center gap-3 text-sm ${darkMode ? 'text-[#6B6E7E]' : 'text-gray-500'}`}>
                    <span>{feedback.timestamp}</span>
                    <span>•</span>
                    <span>Session: {feedback.sessionId}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}