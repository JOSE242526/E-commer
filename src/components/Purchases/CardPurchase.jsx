import React from 'react'

const CardPurchase = ({purchase}) => {
  return (
    <article className=''>

        <header>{purchase.updatedAt}</header>
        <div>
            {
                purchase.cart.products.map(product => (
                    <section>
                        <h3>{product.title}</h3>
                        <div>{product.productsInCart.quantity}</div>
                        <div>${product.price}</div>
                    </section>
                ))
            }
        </div>
    </article>
  )
}

export default CardPurchase