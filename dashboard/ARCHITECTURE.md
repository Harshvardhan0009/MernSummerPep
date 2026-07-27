# Dashboard — How It Works (Simple Version)

---

## Files

```
src/
├── main.jsx              ← starts the React app
├── App.jsx               ← main file, holds all state
├── App.css               ← all styles
├── data/courses.js       ← 10 course objects (dummy data)
└── components/
    ├── Navbar.jsx        ← top bar with cart button
    ├── CourseCard.jsx    ← one course box
    └── CartSidebar.jsx   ← sliding cart panel
```

---

## 3 States in App.jsx

| State | Default | What it stores |
|---|---|---|
| `cart` | `[]` | courses added to cart |
| `category` | `'All'` | which filter button is active |
| `showCart` | `false` | is the cart sidebar open |

---

## Workflow — What Happens Step by Step

### 1. Page Loads
- `App()` runs
- all states set to default
- for loop runs → all 10 courses stored in `filteredCourses`
- all components render on screen

### 2. User clicks a Category button (e.g. "DSA")
```
click → setCategory("DSA")
→ category state changes
→ App re-renders
→ for loop runs again: only DSA courses go into filteredCourses
→ only DSA cards show on screen
```

### 3. User clicks "Add to Cart"
```
click → addToCart(course) runs in App.jsx
→ for loop checks: is this course already in cart?
   → YES: show alert, stop
   → NO: setCart([...cart, course])
→ cart state updates
→ Navbar badge count goes up
→ button on that card changes to "Added ✓"
```

### 4. User clicks Cart button
```
click → setShowCart(true)
→ showCart state = true
→ {showCart && <CartSidebar />} → sidebar appears
→ CartSidebar loops through cart and shows each course
→ total price calculated with for loop
```

### 5. User clicks "Remove" in Cart
```
click → removeFromCart(id) runs
→ for loop builds newCart without that item
→ setCart(newCart)
→ cart updates → item disappears
→ that card's button goes back to "Add to Cart"
```

### 6. User clicks the dark overlay
```
click on overlay → props.onClose() → setShowCart(false)
→ {showCart && <CartSidebar />} → renders nothing → sidebar hides
```

---

## Props Passed to Each Component

```
App.jsx
  ↓
  ├── Navbar        → cartCount, onCartClick
  ├── CourseCard    → course, onAdd, inCart
  └── CartSidebar   → cart, onClose, onRemove
```

---

## Viva Answers

**Q: What is useState?**
A hook that creates a variable. When the variable changes, the page re-renders automatically.

**Q: What is a prop?**
Data passed from parent component (App.jsx) to child component (like CourseCard).

**Q: Why use `[...cart, course]`?**
In React we don't modify state directly. We create a new array with the old items plus the new one.

**Q: What does `{showCart && <CartSidebar />}` mean?**
If showCart is true, show CartSidebar. If false, show nothing. This is called conditional rendering.

**Q: Why `e.stopPropagation()` in CartSidebar?**
The overlay closes the cart when clicked. Without stopPropagation, clicking inside the sidebar would also trigger the overlay click and close it.

**Q: What is `key` prop?**
React needs a unique key for each item in a list so it knows which one changed.
