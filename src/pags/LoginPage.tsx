import ContainerT from "../components/Container";

import { useState } from 'react';

import "../assets/LoginPage.css"

const LoginPage = () => {
    //const [count, setCount] = useState(0)

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // ทำสิ่งที่คุณต้องการเมื่อกด Submit
        console.log('Submitted!', formData);
    };

    return (<ContainerT>
        <div className=" lg:border-0 " >
            <h1 className=" text-3xl font-bold text-center mt-40  mb-10">Welcome </h1>
            <div className="  flex  justify-center   " style={{ minHeight: "100vh" }}>
                <form
                    className="bg-white h-fit rounded  pt-6 pb-8 mb-4 w-full xl:w-96 lg:shadow lg:shadow-dark"

                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <div className="flex xl:mr-5">
                            <span className="mr-1 inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Anonymous" />
                        </div>

                    </div>


                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <div className="relative mb-6">

                        <input
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" />
                    </div>



                    <div className="my-10 flex gap-1">

                        <button
                                id="facebook"
                            style={{ backgroundColor: "#3B5998" }}
                            className="w-full  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:border-white "
                            type="submit"
                        >
                            Facebook
                        </button>
                        <button
                          id="google"
                            style={{ backgroundColor: "#EA4335" }}
                            className="w-full bg-dark hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:border-white "
                            type="submit"
                        >
                            Google
                        </button>
                    </div>


                    <div className="">
                        <button
                            className=" w-full  bg-dark hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:border-white "
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </ContainerT >)
}


export default LoginPage;
