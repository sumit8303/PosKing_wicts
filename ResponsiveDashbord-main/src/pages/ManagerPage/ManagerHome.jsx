import React from 'react'
import Overview from '../posDashbord/Dashbord/Overview'
import Sales from '../posDashbord/Dashbord/Sales'
import Order from '../posDashbord/Dashbord/Order'
import TopProducts from '../posDashbord/Dashbord/TopProducts'
import Wish from '../posDashbord/Dashbord/Wish'



const ManagerHome = () => {

    return (
        <>

            <section className="container">
                <div>
                    <Wish />
                </div>
                <div className="">
                    <Overview/>
                </div>
<div className=' p-5 grid md:grid-cols-1   md:gap-5 xl:grid-cols-2  mx-auto text-black md:space-y-0 space-y-2 text-md antialiased font-normal  '>
    <Sales/>
<Order/>
</div>


<div className="   ">

<TopProducts/>
</div>
            </section>



        </>

    )
}

export default ManagerHome
