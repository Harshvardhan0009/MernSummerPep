// course data
const courses = [
    { id: 1,  title: "React JS Complete Guide",       category: "Web Dev",  price: 999,  level: "Beginner",      instructor: "Harshvardhan Sharma",  rating: 4.5, students: 1200 },
    { id: 2,  title: "Node.js & Express Backend",     category: "Web Dev",  price: 1299, level: "Intermediate",   instructor: "Rahul Sharma",   rating: 4.3, students: 980  },
    { id: 3,  title: "JavaScript Fundamentals",       category: "Web Dev",  price: 599,  level: "Beginner",      instructor: "Vikas Singh",    rating: 4.2, students: 4500 },
    { id: 4,  title: "Python for Beginners",          category: "Python",   price: 799,  level: "Beginner",      instructor: "Priya Gupta",    rating: 4.7, students: 2100 },
    { id: 5,  title: "Flask & Django Basics",         category: "Python",   price: 1099, level: "Intermediate",   instructor: "Anjali Roy",     rating: 4.1, students: 430  },
    { id: 6,  title: "Data Structures & Algorithms",  category: "DSA",      price: 1499, level: "Intermediate",   instructor: "Amit Kumar",     rating: 4.8, students: 3400 },
    { id: 7,  title: "Advanced DSA for Interviews",   category: "DSA",      price: 2499, level: "Advanced",      instructor: "Nikhil Verma",   rating: 4.9, students: 5200 },
    { id: 8,  title: "Machine Learning with Python",  category: "ML",       price: 1999, level: "Advanced",      instructor: "Sneha Patel",    rating: 4.6, students: 870  },
    { id: 9,  title: "Deep Learning Fundamentals",    category: "ML",       price: 2999, level: "Advanced",      instructor: "Karan Mehta",    rating: 4.7, students: 920  },
    { id: 10, title: "MongoDB & Mongoose",            category: "Database", price: 899,  level: "Intermediate",   instructor: "Pooja Jain",     rating: 4.4, students: 650  },
];

export default courses;
