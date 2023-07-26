const ProductCard = (props) => {
    const products = props.data;

    return (
        <div className="container mx-10 mt-10">
            <div className="grid gap-x-8 gap-y-4 grid-cols-3">
            {
                products.map((product, index) => {
                    return (
                        <div key={index.toString()} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={product.image} alt={product.title} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.title}</h2>
                                <p>{product.short_desc}</p>
                                <div className="card-actions">
                                    <p className="justify-start font-bold">${product.price}</p>
                                    <button className="btn btn-primary btn-sm">Add to cart</button>
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

export default ProductCard