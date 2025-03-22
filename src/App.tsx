import React from 'react';
import { BookOpen, Home, GraduationCap, Heart } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'courses':
        return <CoursesPage />;
      case 'trending':
        return <TrendingPage />;
      case 'wishlist':
        return <WishlistPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">Edutou skill academy 2</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <a
                  onClick={() => setCurrentPage('home')}
                  className={`py-4 px-3 text-gray-700 hover:text-gray-900 cursor-pointer flex items-center transition duration-300 ${
                    currentPage === 'home' ? 'border-b-2 border-blue-500' : ''
                  }`}
                >
                  <Home className="h-5 w-5 mr-1" />
                  Home
                </a>
                <a
                  onClick={() => setCurrentPage('courses')}
                  className={`py-4 px-3 text-gray-700 hover:text-gray-900 cursor-pointer flex items-center transition duration-300 ${
                    currentPage === 'courses' ? 'border-b-2 border-blue-500' : ''
                  }`}
                >
                  <BookOpen className="h-5 w-5 mr-1" />
                  Courses
                </a>
                <a
                  onClick={() => setCurrentPage('trending')}
                  className={`py-4 px-3 text-gray-700 hover:text-gray-900 cursor-pointer flex items-center transition duration-300 ${
                    currentPage === 'trending' ? 'border-b-2 border-blue-500' : ''
                  }`}
                >
                  <GraduationCap className="h-5 w-5 mr-1" />
                  Popular
                </a>
                <a
                  onClick={() => setCurrentPage('wishlist')}
                  className={`py-4 px-3 text-gray-700 hover:text-gray-900 cursor-pointer flex items-center transition duration-300 ${
                    currentPage === 'wishlist' ? 'border-b-2 border-blue-500' : ''
                  }`}
                >
                  <Heart className="h-5 w-5 mr-1" />
                  Saved
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderPage()}
      </main>
    </div>
  );
}

const HomePage = () => (
  <div className="space-y-8">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Edutou skill academy 2</h1>
      <p className="text-xl text-gray-600 mb-8">Unlock your potential with our expert-led courses</p>
      <img
        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200"
        alt="Education Banner"
        className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
      />
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
        <p className="text-gray-600">Learn from industry professionals with years of experience</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
        <p className="text-gray-600">Study at your own pace with lifetime access to courses</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Practical Projects</h3>
        <p className="text-gray-600">Build real-world projects for your portfolio</p>
      </div>
    </div>
  </div>
);

const CoursesPage = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          title: "Web Development Bootcamp",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400",
          price: "$99.99",
          duration: "12 weeks"
        },
        {
          title: "Data Science Fundamentals",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
          price: "$89.99",
          duration: "8 weeks"
        },
        {
          title: "UI/UX Design Essentials",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400",
          price: "$79.99",
          duration: "6 weeks"
        }
      ].map((course, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <div className="flex justify-between items-center">
              <p className="text-blue-600 font-semibold">{course.price}</p>
              <p className="text-gray-600">{course.duration}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TrendingPage = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          title: "Machine Learning Basics",
          image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80&w=400",
          students: "1,234 students",
          rating: "4.8"
        },
        {
          title: "Digital Marketing Masterclass",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
          students: "2,156 students",
          rating: "4.9"
        }
      ].map((course, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 cursor-pointer hover:shadow-xl transition-shadow duration-300">
          <img
            src={course.image}
            alt={course.title}
            className="w-32 h-32 object-cover rounded"
          />
          <div>
            <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
            <p className="text-gray-600">{course.students}</p>
            <p className="text-yellow-500">★ {course.rating}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const WishlistPage = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">Saved Courses</h2>
    <div className="bg-white rounded-lg shadow-md p-6">
      <p className="text-gray-600">You haven't saved any courses yet. Browse our courses and click the heart icon to save them for later!</p>
    </div>
  </div>
);

export default App;