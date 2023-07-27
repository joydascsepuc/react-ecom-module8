const CartProduct = (props) => {
    const products = props.products;

    return (
        <div className="container mx-10 mt-10">
            <div className="grid gap-x-8 gap-y-4 grid-cols-3">
            {
                products.map((item, index) => {
                    return (
                        <div key={index.toString()} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={item.product.image} alt={item.product.title} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.product.title}</h2>
                                <p>{item.product.short_desc}</p>
                                <div className="card-actions">
                                    <p className="justify-start font-bold">${item.product.price}</p>
                                    <button className="btn btn-primary btn-sm" onClick={() => deleteFromCart(item.product.id)}>Remove Item</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }  
            </div>
        </div>
    )
}

export default CartProduct