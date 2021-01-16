import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ShopingCart from '../../images/shopping-cart.svg';
import { ProductDetail } from '../../model/ProductDetail';
import { RemoveProduct } from '../../store/products/products.actions';
import Modal from '../modal/modal';

interface IHeaderProps {
  products?: ProductDetail[] | any;
  shoppingCartHandler?: () => void;
  removeItem?: (item: ProductDetail) => void;
}

/**
 *
 * Header - Fixed header for the page.
 * @param props
 *  Products - contains the product details.
 * shoppingCartHandler - Props to pass product into the cart.
 * removeItem - Remove the item from cart.
 */
export const Header: React.FunctionComponent<IHeaderProps | any> = (props) => {
  /**
   * Notify the seleted item count
   */
  const [count, setCount] = useState<number | any>(0);

  /**
   * Shopping cart details
   */
  const [cartDetail, setCartDetail] = useState<ProductDetail[] | any>();

  /**
   * Modal toggle state.
   */
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  /**
   * Initiate and update the page based on props change.
   */
  useEffect(() => {
    const addedItem = (props.products || []).filter(
      (el: ProductDetail) => el.isAdded
    );
    setCartDetail(addedItem);
    setCount(addedItem.length);
  }, [props.products]);
  return (
    <header className="text-gray-100 bg-gray-900 body-font shadow fixed top-0 z-10 w-full">
      <nav className="flex flex-wrap items-center justify-between text-base">
        <div className=" px-4 py-3 my-auto">
          <div className="flex items-center">
            <img
              className="rounded-full h-12 w-12 mx-auto"
              alt="company-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDnpoy3P0jzpsWtm4omh6teFU4M1q1Z4RDDBvRseZacenKIHh6"
            />
            <span className="pl-4 capitalize text-2xl">E - commerce</span>
          </div>
        </div>
        <div className=" px-4 py-3 my-auto cursor-pointer relative">
          <span
            className="absolute bg-red-500 rounded-full px-2 py-1 text-xs"
            onClick={() => setModalOpen(true)}
          >
            {count}
          </span>
          <img src={ShopingCart} alt="shoping-cart" />
        </div>
      </nav>
      <Modal
        isOpen={modalOpen}
        data={cartDetail}
        deleteHandler={(item) => props.removeItem(item)}
        onCloseModal={(flag) => setModalOpen(flag)}
      />
    </header>
  );
};
const mapState2Props = (state: any) => {
  return {
    products: state.detail.products,
  };
};
const mapDispatch2Props = (dispatch: any) => {
  return {
    removeItem: (item: ProductDetail) => dispatch(RemoveProduct(item)),
  };
};
export default connect(mapState2Props, mapDispatch2Props)(Header);
