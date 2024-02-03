import InfiniteScroll from "react-infinite-scroll-component";
import ContainerT from "../components/Container"
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";




const generateRandomString = (length: any) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

const getRandomInt = (min: any, max: any) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const list = ["Red", "Black", "Green", "Yellow"];

const getRandomItem = (arr: any) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}






const MarketPage: React.FC = () => {




    const generateRandomData = (page: number, itemsPerPage: number) => {
        const newData = [];
        for (let i = 0; i < itemsPerPage; i++) {
            const newItem = {
                id: page * itemsPerPage + i,
                name: generateRandomString(10),
                price: getRandomInt(10, 1000),
                type: getRandomItem(list),
            };
            newData.push(newItem);
        }
        return newData;
    };

    const [box, setBox] = useState(Array);
    const [page, setPage] = useState(1);
    const [hasMore, SethasMore] = useState(true);

    const fetchMoreData = () => {

        if (box.length > 100) {
            SethasMore(false);
        } else {

            setTimeout(() => {
                const newData = generateRandomData(page, 8);
                setPage(page + 1);
                setBox((prevItems: any) => [...prevItems, ...newData]);
            }, 1500)

        }


    };

    useEffect(() => {


        const newData = generateRandomData(page, 12); // Adjust the parameters as needed

        setBox((prevItems: any) => [...prevItems, ...newData]);


    }, []);

    const [selectStyle, SetselectStyle] = useState("Colume");

    const Columes = () => {
        return (
            <InfiniteScroll
                dataLength={box.length}
                next={fetchMoreData}
                hasMore={hasMore}

                loader={<>Load....</>}
                endMessage={<p>No more data to load.</p>}
            >
                <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" >

                    {box.map((item: any, i: any) => <div key={i}>
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ">

                            <Link id={i} className="nav-link hover:dark" to={`product/${item.name + item.price.toString()}`} >
                                <div className="border" style={{ height: "150px" }}> </div>
                            </Link>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">

                                        <span aria-hidden="true" className=""></span>
                                        {item.name}

                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{item.type}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900"> {item.price} ฿</p>


                            </div>

                        </div>
                        <button className="btn border-gray w-full py-2 hover:border-dark">Add to cart </button>
                    </div>)}

                </div>
            </InfiniteScroll>


        )
    }


    const Lists = () => {
        return (
            <InfiniteScroll
                dataLength={box.length}
                next={fetchMoreData}
                hasMore={hasMore}

                loader={<>Load....</>}
                endMessage={<p>No more data to load.</p>}
            >
                <div className="my-5" >

                    {box.map((item: any, i: any) => <div key={i}><Link id={i} className="nav-link" to={`product/${item.name + item.price.toString()}`} >

                        <div>
                            {item.name}

                        </div>

                    </Link></div>)}


                </div>
            </InfiniteScroll>


        )
    }







    return (
        <>

            <ContainerT >
                <div className="text-left py-2 gap-2 flex" style={{ fontSize: "12px" }}>
                    <button className="btn btn-secondary border-secondary bg-white" onClick={() => {
                        SetselectStyle("List")
                    }}> List </button>
                    <button className="btn btn-secondary border-secondary bg-white" onClick={() => {
                        SetselectStyle("Colume")
                    }}>  Colume </button>

                </div>

                <div className="text-left py-2 gap-1 flex" style={{ fontSize: "10px" }}>
                    <div> Home </div>
                    <div> {'>'} </div>
                    <div> Name </div>
                </div>
                <div className="border-4 border-double">
                    <h4 className="pt-5 text-start px-5 ">ตัวอย่างระบบ <p className="text-dark" style={{ fontSize: "16px" }}>Ecommerce Web Application </p>

                    </h4>


                    <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 md:py-6">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Your products layout. </h2>

                        {selectStyle === "Colume" ? Columes() : Lists()}
                    </div>


                </div>
            </ContainerT>

        </>
    )
}

export default MarketPage

