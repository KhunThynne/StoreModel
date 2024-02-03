export default function ListC(props: any) {
    return (
        <>





            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
                <div className="border" style={{ height: "150px" }}> </div>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href="#">
                            <span aria-hidden="true" className=""></span>
                            {props.name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{props.type}</p>
                </div>
                <p className="text-sm font-medium text-gray-900"> {props.price} ฿</p>
            </div>





        </>
    );
};
