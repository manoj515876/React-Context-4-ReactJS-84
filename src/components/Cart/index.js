import Header from '../Header'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'
import CartContext from '../../context/CartContext'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const ShowEmptyView = cartList.length === 0
      return (
        <>
          <Header />
          {ShowEmptyView ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <CartListView />
              </div>
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
