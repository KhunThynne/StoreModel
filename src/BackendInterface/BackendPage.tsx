
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react';

import './Backend.css'
import BDashboard from './BackendDashboard';
import BTables from './BackendTables';
const BackendApp = () => {
    const [buttonState, setButtonState] = useState<any>([]);
    const [CurentBT, setCurentBT] = useState<any>('BDashboard');
    const [tabs, setTabs] = useState<any>(<BDashboard />);
    const [TabName] = useState<any>([
        { 'BDashboard': <BDashboard /> },
        { 'BTables': <BTables /> },

    ]);


    useEffect(() => {
        setButtonState({ "BDashboard": !buttonState['BDashboard'] })
    }, [])
    const Active = (val: any, element: any) => {

        setTabs(element[0]);
        setCurentBT(val)
        CurentBT != val && setButtonState({ [val]: !buttonState[val] })

    }

    function tabMenu() {
        return (
            TabName.map((val: any, key: any) => {
                var name = Object.keys(val).toString();
                return (
                    <div key={key} className={buttonState[name] ? 'bg-dark py-2 border-2 text-white' : 'py-2 border-2'} onClick={() => {
                        Active(name, Object.values(val))
                    }}
                    >
                        {(name.slice(1))}</div>
                )
            })
        )
    }





    return (
        <div style={{ minHeight: "100vh" }} className='lg:pt-5'>
            <div className=" container-full mx-auto mt-8 flex ">

                <div className="flex w-full gap-3 ">

                    <div className="flex-auto w-96  space-y-4 hidden  lg:block  px-2" >
                        <h3 className='bg-gray py-2 mb-8 text-white rounded '> Manu </h3>
                        {tabMenu()}
                    </div>
                    <div className="flex-auto  w-full h-full border-2 p-5 mx-3" style={{ position: "relative" }} >
                        {tabs && tabs}
                    </div>
                </div>

            </div>
        </div >
    )

}


export default BackendApp
