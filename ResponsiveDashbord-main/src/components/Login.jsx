import React from 'react'
import { ArrowRight } from 'lucide-react'
import loginImage from '../images/login/auth.jpg'
import { Link } from 'react-router-dom'



const Login = () => {
  return (
    <>
      <section>
        <div className="container m-auto my-3">
          <div className="grid grid-cols-1  rounded-md  lg:grid-cols-2 w-[50rem]  m-auto shadow-[rgba(0, 0, 0, 0.16) 0px 1px 4px] ">
            <div className="">
              <img
                className="mx-auto lg:h-full lg:w-full sm:h-40 sm:w-20 rounded-md object-cover"
                src={loginImage}
                alt=""
              />
            </div>

            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <h2 className="text-title-lg font-bold leading-tight text-success text-center sm:title-sm">Sign in</h2>
                <p className="mt-2 text-title-sm text-gray-600 text-center">
                  Sign in to continue shopping     </p>
                <form action="#" method="POST" className="mt-8">
                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="" className="text-base font-medium text-gray-900">
                          {' '}
                          Email<span className='text-success px-1'>*</span>
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
                          type="email"
                          placeholder="Email"
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
                        className="inline-flex w-full items-center justify-center rounded-full bg-success px-3.5 py-2.5 font-semibold leading-7 text-white "
                      >
                        Sign In
                      </Link>
                    </div>


                    <p className="mt-2 text-title-sm text-gray-600 text-center">
                      For quick demo login click below     </p>


                    <div className="grid grid-cols-2 ">

                      <div>
                        <Link to="/admin"
                          type="button"
                          className="inline-flex w-[10rem] mb-2 items-center justify-center rounded-[.5rem] bg-loginAdmin px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                        >
                          Admin
                        </Link>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="inline-flex w-[10rem] mb-2 items-center justify-center rounded-[.5rem] bg-loginManager px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                        >
                          Manager
                        </button>
                      </div>
                      
                      <div>
                        <button
                          type="button"
                          className="inline-flex w-[10rem] mb-2 items-center justify-center rounded-[.5rem] bg-loginPos px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                        >
                          POS Operator
                        </button>
                      </div>


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
