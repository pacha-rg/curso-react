import React, {useContext} from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addToCart from '@icons/add_to_cart.svg';
const producto = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const ProductItem = ({product}) => {
	const {addToCart} = useContext(AppContext);

	const handleClick = item => {
		addToCart([item]);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleClick(product)}>
					<img src={addTocart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;