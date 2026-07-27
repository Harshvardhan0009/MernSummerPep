function CourseCard(props) {
  let course = props.course

  return (
    <div className="course-card">
      <span className="category-badge">{course.category}</span>
      <h3 className="course-title">{course.title}</h3>
      <p className="course-info">By {course.instructor}</p>
      <p className="course-info">{course.level} &nbsp;|&nbsp; Rating: {course.rating}</p>
      <div className="card-footer">
        <span className="price">Rs. {course.price}</span>
        <button
          className={props.inCart ? 'add-btn added' : 'add-btn'}
          onClick={function() { props.onAdd(course) }}
          disabled={props.inCart}
        >
          {props.inCart ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}

export default CourseCard
