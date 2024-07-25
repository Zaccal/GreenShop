// interface IOrderDetails {
//     orders: IOrderCard[];
// }

const OrderDetails = () => {
    return (
        <>
            <p className="font-bold mb-3">Order Details</p>
            <div className="border-b grid grid-cols-12 pb-[11px]">
                <p className="font-bold col-start-1 col-end-8">Products</p>
                <p className="font-bold col-start-8 col-end-10 pl-4">Qty</p>
                <p className="font-bold col-start-11 col-end-12">Subtotal</p>
            </div>

            <div className="overflow-y-auto max-h-[246px] mb-5">
                {/* <OrderCard /> */}
                {/* <OrderCard /> */}
                {/* <OrderCard /> */}
            </div>
        </>
    );
};

export default OrderDetails;
