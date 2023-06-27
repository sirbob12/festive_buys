import React, { useEffect, useState } from 'react'
import { fetchSingleProduct } from '../../store/productsSlice'
import  { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/shoppingCart'

const ProductDetails = ({itemId, name, price}) => {


    

  const navigate = useNavigate();
  const [quantity, setQty] = useState(1);

  //const { data: product } = useSelector(state => state.shoppingCart);

  const increaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty + 1;
      return newQty;
    })
  }

  const decreaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty - 1;
      if(newQty < 1){
        newQty = 1;
      }
      return newQty;
    })
  }

  const addToCartHandler = (singleProduct) => {
    let totalPrice = quantity * singleProduct.price;
    const tempProduct = {
      ...singleProduct,
      quantity: quantity,
      totalPrice
    }
    dispatch(addToCart(tempProduct));
    //dispatch(setIsModalVisible(false));
   // navigate('/cart');
  };
    
  const {id} = useParams();
  console.log(id)
  const dispatch = useDispatch();
  const { singleProduct, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch]);

console.log(singleProduct)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!singleProduct || singleProduct.length === 0) {
    return <div>Cart is empty.</div>;
  }

  return (
    <div>productDetails</div>
  )
}

export default ProductDetails
