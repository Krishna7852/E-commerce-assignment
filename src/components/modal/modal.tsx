import React, { useEffect, useState } from 'react';
import { ProductDetail } from '../../model/ProductDetail';

export type ModalProps = {
  isOpen: boolean;
  data: ProductDetail[];
  onCloseModal: (flag: boolean) => void;
  deleteHandler: (item: ProductDetail) => void;
};

/**
 *
 * Modal - Show the shopping cart detail in popup.
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onCloseModal,
  data,
  deleteHandler,
}) => {
  /**
   * Preserve shopping cart detail.
   */
  const [shoppingDetail, setShoppingDetail] = useState<ProductDetail[]>();

  /**
   * Total amount of all selected cart.
   */
  const [totalAmount, setTotalAmount] = useState<number>(0);

  /**
   * Initiate and update the page based on props change.
   */
  useEffect(() => {
    setShoppingDetail(data);
    if (!data) return;
    const amount = data.reduce((total, item) => {
      total += parseInt(item.price);
      return total;
    }, 0);
    setTotalAmount(amount);
  }, [data]);

  return (
    <div>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className=" min-h-screen pt-4 px-4 pb-20 block sm:p-0">
            <div className="fixed inset-0">
              <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-top sm:h-screen"></span>
            <div
              className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-top w-85w"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="w-full">
                    <div className="flex justify-between border-b -mx-4">
                      <h3
                        className="text-lg p-4 leading-6 font-medium text-gray-900"
                        id="modal-headline"
                      >
                        Shopping Cart
                      </h3>
                      <h3 className="text-lg p-4 md:pr-8 leading-6 font-medium text-gray-900">
                        Price
                      </h3>
                    </div>
                    <div className="mt-2 md:px-4 max-h-60h overflow-auto">
                      {shoppingDetail &&
                        shoppingDetail.map((item: ProductDetail) => (
                          <div className="md:flex py-2 border-b">
                            <img
                              className="px-2"
                              src={item.image}
                              alt={`shopping-cart-${item.id}`}
                            />
                            <div className="w-full">
                              <div className="w-full">
                                <div className="flex justify-between items-center pt-4 md:pt-0">
                                  <div
                                    className="text-green-700 pl-2 md:pl-4 text-2xl"
                                    key={item.id}
                                  >
                                    {item.name}
                                  </div>
                                  <h4 className="text-black">{item.price}</h4>
                                </div>
                              </div>
                              <p className="text-gray-600 p-4 w-full md:w-40w">
                                {item.description}
                              </p>
                              <div
                                className="text-green-700 p-4 align-left cursor-pointer w-20"
                                onClick={() => deleteHandler(item)}
                              >
                                Delete
                              </div>
                            </div>
                          </div>
                        ))}
                      {!shoppingDetail?.length && (
                        <div className="text-gray-600 text-xl px-4 py-8 w-full text-center">
                          Opps.. Your Shopping Basket is empty
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex justify-between items-center sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <p className="text-black font-semibold pr-4 text-center w-full">
                    Subtotal ({shoppingDetail?.length} item): {totalAmount}.00
                  </p>
                </span>
                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                  <button
                    type="button"
                    className="cursor-pointer inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white hover:bg-green-600 text-base leading-6 font-medium text-green-700 shadow-sm hover:text-white focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    onClick={() => onCloseModal(false)}
                  >
                    {data && data.length ? 'Proceed to Buy' : 'Close'}
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
