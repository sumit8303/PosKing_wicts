import React from 'react'
import { ArrowRight } from 'lucide-react'
import loginImage from '../images/login/auth.jpg'
import { Link } from 'react-router-dom'



const Login = () => {
  return (
    <>
      <section>
        <div className="container m-auto  my-3">
          <div className="grid grid-col-1  md:grid-cols-2 w-max  m-auto  ">
            <div className="">
              <img
                className="mx-auto hidden md:block md:h-full md:w-full rounded-l-3xl bg-cover"
                src={loginImage}
                alt=""
              />
            </div>


            <div className="flex items-center justify-center  py-4  w-full shadow-xl md:rounded-r-3xl  bg-white">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <h2 className="text-title-lg font-bold leading-tight text-success uppercase text-center sm:title-sm">Sign in</h2>
                <p className="mt-2 text-title-sm text-gray-600 text-center">
                  Sign in to continue shopping     </p>

                <Link to="/signup"
                  className="text-sm  w-full flex justify-center mt-2 font-semibold items-center text-md  hover:underline"
                >
                  {' '}
                  New User <span className='mx-1 uppercase text-success text-lg'>Sign up</span>{' '}
                </Link>
                <div className="flex items-center my-6">
                  <hr className="flex-1" />
                  <span className="px-4 text-sm text-gray-400">Or countinue with</span>
                  <hr className="flex-1" />
                </div>
                <form action="#" method="POST" className="mt-5">
                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="" className="text-base font-medium text-gray-900">
                          {' '}
                          User Id<span className='text-success px-1'>*</span>
                        </label>
                        <a
                          href="#"
                          title=""
                          className="text-sm font-semibold text-success hover:underline"
                        >
                          {' '}
                          Use Phone Instead{' '}
                        </a>
                      </div>

                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-red-300 bg-transparent px-3 py-2 text-sm  focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="user id"
                        ></input>
                      </div>
                    </div>

                    <div>
                      <div className="">
                        <label htmlFor="" className="text-base font-medium text-gray-900">
                          {' '}
                          Password<span className='text-success px-1'>*</span>
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-red-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          placeholder="Password"
                        ></input>
                      </div>
                    </div>

                    <div>
                      <div className="">
                        <label htmlFor="" className="text-base font-medium text-gray-900">
                          {' '}
                          Key License<span className='text-success px-1'>*</span>
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-red-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          placeholder="Enter your key license"
                        ></input>
                      </div>
                    </div>


                    <div className="flex items-center justify-between">

                      <div className="flex space-x-2">
                        <input
                          className="text-base font-medium text-gray-900"
                          type="checkbox"
                          id='checkbox'
                        ></input>
                        <label htmlFor="checkbox" className="text-base font-medium text-gray-900">
                          {' '}
                          Remember Me{' '}
                        </label>
                      </div>

                      <a
                        href="#"
                        title=""
                        className="text-sm font-semibold text-success hover:underline"
                      >
                        {' '}
                        Forgot Password{' '}
                      </a>
                    </div>




                    <div>
                      <Link
                        type="button"
                        to="/"
                        className="inline-flex w-full uppercase items-center justify-center rounded-3xl bg-success px-3.5 py-2.5 font-semibold leading-7 text-white "
                      >
                        Sign In
                      </Link>
                    </div>


                    <p className="mt-2 text-sm text-gray-600 text-center">
                      For quick demo login click below     </p>


                    <div className="grid md:grid-cols-2 gap-2 grid-cols-1">

                      <div>
                        <Link to="/admin"
                          type="button"
                          className="inline-flex md:w-[10rem] w-full mb-2 items-center justify-center rounded-[.5rem] bg-loginAdmin px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                        >
                          Admin
                        </Link>
                      </div>
                      <div>
                        <Link to="/Manager"
                          type="button"
                          className="inline-flex md:w-[10rem] w-full mb-2 items-center justify-center rounded-[.5rem] bg-loginManager px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                        >
                          Manager
                        </Link>
                      </div>

                      <div>
                        <button
                          type="button"
                          className="inline-flex md:w-[10rem] w-full mb-2 items-center justify-center rounded-[.5rem] bg-loginPos px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                        >
                          POS Operator
                        </button>
                      </div>

                      <Link to="/adminWicts">
                        <button
                          type="button"
                          className="inline-flex md:w-[10rem] w-full mb-2 items-center justify-center rounded-[.5rem] bg-lightsuccess px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                        >
Wicts User
                        </button>
                      </Link>



                    </div>






                  </div>
                </form>




              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Login
