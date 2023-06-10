
//Components
import { Header } from "@/components/Header";

//Externals
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faChevronDown, faGauge } from '@fortawesome/pro-solid-svg-icons';

export default function Visitors() {
  return (
    <>
      <Header/>
      <main id="main-page" role="main">
        <div className="container"> 
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-4">
              <div className="bg-white w-full rounded-sm  p-5">
                <div className="rounded-sm border border-gray-blue-92 bg-gray-blue-98 mb-4 p-5">
                  <div className="flex flex-wrap -mx-3">
                    <div className="flex-shrink-0 px-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-yellow text-white flex justify-center items-center">
                        1
                      </div>
                    </div>
                    <div className="flex-grow px-3 mb-4 flex items-center">
                      <h3 className="text-base text-gray-blue-60 font-bold">
                        Visitors 38875
                      </h3>
                    </div>
                    <div className="flex-grow px-3 mb-4 flex items-center">
                      <FontAwesomeIcon icon={faGauge} className="w-5 h-5 text-primary-green me-3" />
                      <div className="w-full bg-gray-200 rounded-full h-1.5 ">
                        <div className="bg-primary-green w-1/3 h-1.5 rounded-full " ></div>
                      </div>
                      <span className="text-base text-gray-blue-60 font-bold ms-4">33%</span>
                    </div>
                    <div className="flex-shrink-0 px-3 mb-4 flex items-center">
                      <FontAwesomeIcon icon={faChartSimple} className="w-4 h-4 text-gray-blue-80 me-3" />
                      <span className="text-base text-gray-blue-60 font-bold">Lead score: 0</span>
                    </div>
                    <div className="flex-shrink-0 px-3 mb-4 w-auto ">
                      <button type='button' className="btn-icon bg-white text-gray-blue-85 border-2 border-gray-blue-97">
                        <FontAwesomeIcon icon={faChevronDown} />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <div className="bg-white rounded p-5">
                        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                          <ul className="flex flex-wrap -mb-px">
                              <li className="mr-2">
                                  <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Profile</a>
                              </li>
                              <li className="mr-2">
                                  <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Conversations</a>
                              </li>
                              <li className="mr-2">
                                  <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Calls</a>
                              </li>
                              <li className="mr-2">
                                  <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Activities</a>
                              </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-sm border border-gray-blue-92 bg-gray-blue-98 mb-4 p-5">
                  <div className="flex flex-wrap -mx-3">
                    <div className="flex-shrink-0 px-3">
                      <div className="w-12 h-12 rounded-full bg-primary-green text-white flex justify-center items-center">
                        2
                      </div>
                    </div>
                    <div className="flex-grow px-3 flex items-center">
                      <h3 className="text-base text-gray-blue-60 font-bold">
                        Visitors 38875
                      </h3>
                    </div>
                    <div className="flex-grow px-3 flex items-center">
                      <FontAwesomeIcon icon={faGauge} className="w-5 h-5 text-primary-green me-3" />
                      <div className="w-full bg-gray-200 rounded-full h-1.5 ">
                        <div className="bg-primary-green w-1/3 h-1.5 rounded-full " ></div>
                      </div>
                      <span className="text-base text-gray-blue-60 font-bold ms-4">33%</span>
                    </div>
                    <div className="flex-shrink-0 px-3 flex items-center">
                      <FontAwesomeIcon icon={faChartSimple} className="w-4 h-4 text-gray-blue-80 me-3" />
                      <span className="text-base text-gray-blue-60 font-bold">Lead score: 0</span>
                    </div>
                    <div className="flex-shrink-0 w-auto px-xs">
                      <button type='button' className="btn-icon bg-white text-gray-blue-85 border-2 border-gray-blue-97">
                        <FontAwesomeIcon icon={faChevronDown} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </>
  )
}