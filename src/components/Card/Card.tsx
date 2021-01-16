import { useEffect, useState } from 'react';
import { ProductDetail } from '../../model/ProductDetail';

export interface ICartProps {
  products: ProductDetail;
  addToCart: (item: ProductDetail) => void;
}

/**
 * 
 * Card - To show the product detail in card.
 */
export const Card = (props: ICartProps) => {
  const [cartDetail, setCartDetail] = useState<ProductDetail[] | any>();

  useEffect(() => {
    setCartDetail(props.products);
  }, [props.products]);
  return (
    <div className="flex flex-wrap">
      {cartDetail &&
        cartDetail.map((item: ProductDetail) => (
          <div className="py-10 flex min-w-80 md:w-1/4">
            <div className="bg-white shadow-lg rounded transform hover:scale-105 duration-300 ease-in-out mx-4 md:w-80">
              <img
                src={item.image}
                alt={`iamge-${item.id}`}
                className="w-full"
              />
              <div className="p-4 text-left">
                <div className="flex justify-between">
                  <h2 className="text-2xl capitalize">{item.name}</h2>
                  <p className="font-light text-gray-500 text-lg my-2">
                    {item.price} &euro;
                  </p>
                </div>
                <p className="h-30 overflow-hiiden">{item.description}</p>
                {item.isAdded ? (
                  <span className="block bg-gray-300 text-xs font-semibold  py-2 px-2 text-gray-600 text-center rounded shadow-lg uppercase font-light mt-6">
                    Added
                  </span>
                ) : (
                  <span
                    className="block cursor-pointer text-xs font-semibold bg-green-300 py-2 px-2 text-green-700 text-center rounded shadow-lg uppercase font-light mt-6 hover:bg-green-400 hover:text-white duration-300 ease-in-out"
                    onClick={() => props.addToCart(item)}
                  >
                    Add to cart
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
