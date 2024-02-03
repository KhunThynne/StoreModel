import { CiShoppingCart } from "react-icons/ci";

const CartSlot = (props: any) => {
    return (

        <div>

            <div  >

                {props.children}
            </div>

            <div className="" >
                <div className="relative ">

                    <div className="absolute   grid content-center h-6 w-7 justify-center z-0" style={{ fontSize: '8px' }} >0 </div>
                    <CiShoppingCart style={{ fontSize: "26px" }} className="z-1 " />









                </div>

            </div>


            <div className="hidden border-2 absolute z-10 bg-white left-0 my-8 " style={{ minHeight: "20rem", width: "100%" }}>


            </div>




        </div>
    )
}

export default CartSlot;