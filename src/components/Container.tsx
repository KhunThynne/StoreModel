const ContainerT = (props: any) => {
    return (<div style={{ minHeight: "100vh" }} className=" lg:mx-40 md:mx-8  xl:mx-96  mt-3 mx-auto px-4  " >

        {props.children}
    </div>)
}

export default ContainerT;