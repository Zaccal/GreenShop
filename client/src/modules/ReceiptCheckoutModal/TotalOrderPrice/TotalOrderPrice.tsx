const TotalOrderPrice = () => {
    return (
        <>
            <div className="flex justify-between max-w-[321px] ml-auto w-full">
                <p className="">Shiping</p>
                <p className="font-bold">$16.00</p>
            </div>

            <div className="flex justify-between max-w-[321px] mt-6 ml-auto w-full mb-5">
                <p className="font-bold">Total</p>
                <p className="font-bold text-primary">$2,699.00</p>
            </div>
        </>
    );
};

export default TotalOrderPrice;
