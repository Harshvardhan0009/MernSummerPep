import { useState } from 'react'
import Navbar from './components/Navbar'
import CourseCard from './components/CourseCard'
import CartSidebar from './components/CartSidebar'
import courses from './data/courses'
import './App.css'

const categories = ['All', 'Web Dev', 'Python', 'DSA', 'ML', 'Database']

function App() {

  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('All')
  const [showCart, setShowCart] = useState(false)

  function addToCart(course) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === course.id) {
        alert('Already in cart!')
        return
      }
    }
    setCart([...cart, course])
  }

  function removeFromCart(id) {
    let newCart = []
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id !== id) {
        newCart.push(cart[i])
      }
    }
    setCart(newCart)
  }

  // filter courses by selected category
  let filteredCourses = []
  for (let i = 0; i < courses.length; i++) {
    if (category === 'All' || courses[i].category === category) {
      filteredCourses.push(courses[i])
    }
  }

  return (
    <div>

      <Navbar
        cartCount={cart.length}
        onCartClick={function() { setShowCart(true) }}
      />

      <div className="main-content">

        <div className="filter-bar">
          {categories.map(function(cat) {
            return (
              <button
                key={cat}
                className={category === cat ? 'cat-btn active' : 'cat-btn'}
                onClick={function() { setCategory(cat) }}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div className="courses-grid">
          {filteredCourses.map(function(course) {

            let inCart = false
            for (let i = 0; i < cart.length; i++) {
              if (cart[i].id === course.id) {
                inCart = true
              }
            }

            return (
              <CourseCard
                key={course.id}
                course={course}
                onAdd={addToCart}
                inCart={inCart}
              />
            )
          })}
        </div>

      </div>

      {showCart && (
        <CartSidebar
          cart={cart}
          onClose={function() { setShowCart(false) }}
          onRemove={removeFromCart}
        />
      )}

    </div>
  )
}

export default App
