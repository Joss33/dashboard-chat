
//Externals
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/pro-solid-svg-icons';
import Link from 'next/link';

export default function SignIn() {
  return (
    <>
      <main id="main-page" role="main" className="h-full bg-gray-blue-95">
        <div className="container">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 flex">
              <div className="flex-shrink-0 mx-auto py-2 px-10 rounded-full bg-primary-blue/10">
                <h3 className="text-xl text-primary-blue font-bold">Sign In</h3>
              </div>
            </div>
            <div className="w-full px-3">
              <div className="relative">
                <div className="absolute w-full h-full left-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
                  <h2 className="text-5xl text-center font-bold text-gray-blue-50 relative z-10">Get It Touch Now</h2>
                </div>
                <h2 className="text-[11.25rem] text-center font-bold text-gray-blue-92">In Touch</h2>
              </div>
            </div>
            
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-2/3 px-3 mx-auto">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3 ">
                  <div className="relative mb-4">
                    <input type="text" id="input-group-1" className="bg-gray-50 shadow text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 p-5 " placeholder="name@flowbite.com"/>
                    <div className="absolute inset-y-0 right-6 flex items-center pl-3 pointer-events-none">
                      <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-gray-blue-80" />
                    </div>
                  </div>
                </div>
                <div className="w-full px-3 ">
                  <div className="relative mb-6">
                    <input type="password" id="input-group-1" className="bg-gray-50 shadow text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 p-5 " placeholder="password"/>
                    <div className="absolute inset-y-0 right-6 flex items-center pl-3 pointer-events-none">
                      <FontAwesomeIcon icon={faLock} className="w-5 h-5 text-gray-blue-80" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 mx-auto mb-4 px-3">
                  <Link href={'/list-view'} className="text-white flex justify-center items-center w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-5 mr-2 mb-2 focus:outline-none ">Go!</Link>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </main>
    </>
  )
}