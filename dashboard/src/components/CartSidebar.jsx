function CartSidebar(props) {

  let total = 0
  for (let i = 0; i < props.cart.length; i++) {
    total = total + props.cart[i].price
  }

  return (
    <div className="cart-overlay" onClick={props.onClose}>

      {/* stopPropagation stops click from closing the sidebar */}
      <div className="cart-sidebar" onClick={function(e) { e.stopPropagation() }}>

        <div className="cart-header">
          <h2>My Cart ({props.cart.length})</h2>
          <button className="close-btn" onClick={props.onClose}>X</button>
        </div>

        {props.cart.length === 0 && <p className="empty-cart">Cart is empty</p>}

        <div className="cart-items">
          {props.cart.map(function(item) {
            return (
              <div key={item.id} className="cart-item">
                <div>
                  <p>{item.title}</p>
                  <p className="cart-item-price">Rs. {item.price}</p>
                </div>
                <button
                  className="remove-btn"
                  onClick={function() { props.onRemove(item.id) }}
                >
                  Remove
                </button>
              </div>
            )
          })}
        </div>

        {props.cart.length > 0 && (
          <div>
            <p className="cart-total"><strong>Total: Rs. {total}</strong></p>
            <button
              className="checkout-btn"
              onClick={function() { alert('Order placed! Total: Rs. ' + total) }}
            >
              Checkout
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default CartSidebar
