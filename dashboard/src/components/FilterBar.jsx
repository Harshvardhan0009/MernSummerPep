// all category options - 'All' shows everything
const categories = ['All', 'Web Dev', 'Python', 'DSA', 'ML', 'Database']

// FilterBar gets 4 things from App.jsx via props:
// props.category = current selected category
// props.setCategory = function to change category
// props.maxPrice = current max price value
// props.setMaxPrice = function to change max price

function FilterBar(props) {
    return (
        <div className="filter-bar">

            {/* Category buttons */}
            <div className="category-filters">
                <strong>Category: </strong>
                {categories.map(function(cat) {
                    // if this button's category matches the selected one, add 'active' class
                    let btnClass = 'cat-btn'
                    if (props.category === cat) {
                        btnClass = 'cat-btn active'
                    }
                    return (
                        <button
                            key={cat}
                            className={btnClass}
                            onClick={function() { props.setCategory(cat) }}
                        >
                            {cat}
                        </button>
                    )
                })}
            </div>

            {/* Price slider */}
            <div className="price-filter">
                <strong>Max Price: ₹{props.maxPrice}</strong>
                <input
                    type="range"
                    min="500"
                    max="3000"
                    step="100"
                    value={props.maxPrice}
                    onChange={function(e) { props.setMaxPrice(Number(e.target.value)) }}
                    className="price-slider"
                />
                <div className="price-range-labels">
                    <span>₹500</span>
                    <span>₹3000</span>
                </div>
            </div>

        </div>
    )
}

export default FilterBar
