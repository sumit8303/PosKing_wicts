import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'


const SignUpFrom = () => {


    return (
        <>

            <section>
                <div className="relative  bg-purple-100 backdrop-blur flex justify-center items-center bg-texture bg-cover">


                    <div className="my-5 rounded-3xl  bg-red-400  ">
                        <div className="  m-auto ">
                            <div className="    mx-auto">
                                <div className=" relative bg-white w-full">


                                    <Link to="/" className="absolute m-2 right-0 bg-white transition hover:rotate-180">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-current text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </Link>
                                </div>

                                <div className="px-10  rounded-3xl shadow-xl bg-white p-3">
                                    <div className="mx-auto text-center">
                                        <h1 className="text-4xl text-success text-gray-800">Register</h1>
                                        <p className="mt-4">How do you want to sign up ?</p>
                                    </div>
                                    <div className="flex items-center my-6">
                                        <hr className="flex-1" />
                                        <span className="px-4 text-sm text-gray-400">Or countinue with</span>
                                        <hr className="flex-1" />
                                    </div>
                                    <form action="" method="POST">

                                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">

                                            <div className="mb-4">
                                                <label for="name" className="text-base font-medium text-gray-900">User Name</label>
                                                <input type="text" id="name" name="name" className="flex h-10 w-full rounded-md border border-red-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                            </div>

                                            <div className="mb-4">
                                                <label for="name" className="text-base font-medium text-gray-900">Company Name</label>
                                                <input type="text" id="name" name="name" className="flex h-10 w-full rounded-md border border-red-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">

                                            <div className="mb-4">
                                                <label for="name" className="text-base font-medium text-gray-900">Contact Number</label>
                                                <input type="number" id="name" name="name" className="flex h-10 w-full rounded-md border border-red-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                            </div>

                                            <div className="mb-4">
                                                <label for="email" className="text-base font-medium text-gray-900">Email</label>
                                                <input type="email" id="email" name="email" className="flex h-10 w-full rounded-md border border-red-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">

                                            <div className="mb-6">
                                                <label for="password" className="text-base font-medium text-gray-900">Password</label>
                                                <input type="password" id="password" name="password" className="flex h-10 w-full rounded-md border border-red-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                            </div>

                                            <div className="mb-6">
                                                <label for="password" className="text-base font-medium text-gray-900">Confirm Password</label>
                                                <input type="password" id="password" name="password" className="flex h-10 w-full rounded-md border border-red-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                            </div>

                                        </div>


                                        <div className="grid grid-cols-1 gap-4">
                                            <div className="mb-6 ">
                                                <label for="profile" className="text-base  font-medium text-gray-900">User Profile</label>
                                                <input type="file" id="profile" name="profile" className="flex h-fit w-full rounded-md border border-red-300 bg-transparent px-3  py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                            </div>
                                        </div>

                                        <div className="text-center text-sm text-gray-400 my-2">
                                            <input
                                                className="text-base font-medium text-gray-900 border border-success"
                                                type="checkbox"
                                                id='checkbox'
                                            ></input>
                                            <label htmlFor="checkbox" className="text-md font-medium text-gray-900 ">
                                                {' '}
                                                Licence Required{' '}
                                            </label>
                                        </div>

                                        <div>
                                            <Link
                                                type="button"
                                                to="/"
                                                className="inline-flex text-md uppercase w-full items-center justify-center rounded-full bg-success px-3.5 py-2.5 font-semibold leading-7 text-white "
                                            >
                                                Sign Up
                                            </Link>
                                        </div>

                                        <p className="text-center text-sm text-gray-400 my-2">Have an account ? <Link to="/" className="font-semibold text-success hover:underline">Log in</Link></p>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}

export default SignUpFrom
