const Card = () => {
    // Demo data (replace with props or dynamic data as needed)
    const product = {
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        name: "Demo Product",
        price: "$49.99",
        owner: "J. Doe",
    };

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-xl"
                />
            </figure>
            <div className="card-body items-center text-center px-6 py-4 w-full">
                <div className="flex justify-between items-center w-full mb-1">
                    <span className="font-semibold text-lg text-left">{product.name}</span>
                    <span className="font-bold text-blue-600 text-right">{product.price}</span>
                </div>
                <div className="flex justify-between items-center w-full text-sm text-gray-500 border-t pt-2">
                    <span className="text-left">{product.owner}</span>
                    <span></span>
                </div>
                <div className="card-actions mt-4">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;