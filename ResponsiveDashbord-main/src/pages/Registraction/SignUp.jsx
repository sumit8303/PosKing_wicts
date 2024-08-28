import React from 'react'

const SignUp = () => {


    return (
        <>
       
       
{/* <!-- Sign Up Form --> */}
    <div className="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Create an Account</h2>
        <form>
            <div className="mb-4">
                <label for="name" className="block text-sm font-medium text-gray-600">User Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md text-gray-800"/>
            </div>
            <div className="mb-4">
                <label for="name" className="block text-sm font-medium text-gray-600">Company Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md text-gray-800"/>
            </div>
            <div className="mb-4">
                <label for="email" className="block text-sm font-medium text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md text-gray-800"/>
            </div>
            <div className="mb-6">
                <label for="password" className="block text-sm font-medium text-gray-600">Password</label>
                <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md text-gray-800"/>
            </div>
            <div className="mb-6">
                <label for="password" className="block text-sm font-medium text-gray-600">Confirm Password</label>
                <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md text-gray-800"/>
            </div>
            <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Sign Up</button>
        </form>
    </div>

       
        </>
    )
}

export default SignUp
