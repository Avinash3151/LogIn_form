
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const LoginForm = () => {
    return (

        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white shadow-md rounded px-8 pt-6 md-4 w-full  max-w-md">

                <h2 className="text-3xl font-bold mb-6 text-center text-white ">
                    <span
                        className="bg-gradient-to-r text-transparent from-blue-600 to-red-500 bg-clip-text">Login</span>

                </h2>
                <form>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-800 text-sm font-bold mb-2">

                            <FontAwesomeIcon icon={faEnvelope}
                                className="mr-2 inline-block w-3" />
                            Email
                        </label>
                        <div>

                            <input id="email" type='email' autoComplete="off" className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight 
                             focus:outline-none focus:shadow-background"
                                placeholder="Enter Your Email" />

                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="Password" className="block text-gray-800 text-sm font-bold mb-2">

                            <FontAwesomeIcon icon={faLock}
                                className="mr-2 inline-block w-3" />
                            Password
                        </label>
                        <div>
                            <input id="Password" type='text' autoComplete="off" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight 
                             focus:outline-none focus:shadow-background"
                                placeholder='Enter Your Password' />

                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="bg-gradient-to-l from-blue-700 to-purple-600 hover:to-purple-800 text-white font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline w-full shadow-md">
                            Login
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <link href="/" className="text-gray-600 hover:underline"></link>
                        Forget Password?

                    </div>

                </form>
                <p className="text-center text-gray-400 mt-6">

                    Don't have an Account?
                    <Link href="/" className="text-blue-500 hover:underline">
                        Sign up </Link>
                </p>
                <div className="mt-4">
                    <p className="text-gray-500 text-center mt-3">
                        or login with  </p>
                        <div className="flex justify-center mt-2">
                        <Link href="/" className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mx-2">
                        
                        <FontAwesomeIcon icon={faFacebook}
                                className="w-3" />

                         </Link>
                         <Link href="/" className="bg-gradient-to-l from-blue-700 to-purple-600 hover:to-purple-800 text-white font-bold py-2 px-4 rounded mx-2">
                        
                        <FontAwesomeIcon icon={faInstagram}
                                className="w-4" />
                         </Link>
                         <Link href="/" className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mx-2">
                        
                        <FontAwesomeIcon icon={faTwitter}
                                className="w-3" />
                         </Link>
                        
                        
                        
                        </div>
                          </div>

            </div>
        </div>

    )

}


export default LoginForm