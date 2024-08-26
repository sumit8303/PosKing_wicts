import React from 'react'
import Wish from '../pages/posDashbord/Dashbord/Wish'
import Overview from '../pages/posDashbord/Dashbord/Overview'
import Sales from '../pages/posDashbord/Dashbord/Sales'
import Order from '../pages/posDashbord/Dashbord/Order'
import TopProducts from '../pages/posDashbord/Dashbord/TopProducts'



const Home = () => {

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

export default Home
