
import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components';
import Toast from '../../components/Toast/Toast';
import { ProductDetail } from '../../model/ProductDetail';
import { AddProduct, RemoveProduct } from '../../store/products/products.actions';

interface IHomeProps {
  products: ProductDetail;
  addToCart?: () => void;
}

/**
 * Description: Landing page.
 * 
 * @param props Products - contains the product details.
 *              addToCart - To add selected item into the cart.
 */
const Home: React.FunctionComponent<IHomeProps | any> = (props) => {

  /**
   * childRef - To access the child component methods/fun.
   */
  let childRef = useRef<any>(null);

  const onAddHandler = (item: ProductDetail) => {
    props.addToCart(item);
    childRef.current.notify(`Added ${item.name} Successfully ..!!`);
  }
  return (
    <div className="mt-20">
      <Card products={props.products} addToCart={(item) => onAddHandler(item)} />
      <Toast ref={childRef} />
    </div>
  );
};

const mapState2Props = (state: any) => {
  return {
    products: state.detail.products,
    error: state.detail.error,
  };
};

 const mapDispatch2Props = (dispatch: any) => {
  return {
    addToCart: (item: ProductDetail) => dispatch(AddProduct(item)),
    removeFromCart: (item: ProductDetail) => dispatch(RemoveProduct(item)),
  }
}
export default connect(mapState2Props, mapDispatch2Props)(Home);
