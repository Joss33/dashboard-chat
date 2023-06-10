//React
import { useState } from "react";

//Components
import Accordion from '@/components/Accordion';

//Externals
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faSearch, faCircleXmark, faEllipsis, faCompass, faStar, faChartLine, faEarth, faArrowLeft, faCirclePlus, faGrid2, faUser, faGrid3, faCircleUser } from '@fortawesome/pro-solid-svg-icons';
import Link from "next/link";

export const Header = () => {

  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer)
  }

  return (
    <>
    
      <header id="site-header" role="heading" className="navigate">
        <div className="navigate-content">
          <div className="flex flex-wrap -mx-xl">
            <div className="basis-auto px-xl">
              <button onClick={toggleDrawer} type='button' className="btn-icon bg-white text-gray-blue-85">
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <div className="flex-grow px-xl flex items-center ml-7">
              <h1 className='text-gray-blue-50 font-bold text-lg'>Constructor</h1>
            </div>
          </div>
          <nav className='flex flex-wrap -mx-xl' role='navigation'>
            <ul className="flex items-center -mx-sm">
              <li className='flex-shrink-0 px-sm'>
                <a href="" className='text-gray-blue-70 font-bold text-xs'>Dashboard</a>
              </li>
              <li className='flex-shrink-0 px-sm'>
                <a href="" className='text-gray-blue-70 font-bold text-xs'>About Us</a>
              </li>
              <li className='flex-shrink-0 px-sm'>
                <a href="" className='text-gray-blue-70 font-bold text-xs'>News</a>
              </li>
              <li className='flex-shrink-0 px-sm'>
                <a href="" className='text-gray-blue-70 font-bold text-xs'>User Policy</a>
              </li>
              <li className='flex-shrink-0 px-sm'>
                <a href="" className='text-gray-blue-70 font-bold text-xs'>Contacts</a>
              </li>
              <li className='flex-shrink-0 px-sm'>
                <button type='button' className='text-gray-blue-70 font-bold text-xs'>
                  <FontAwesomeIcon icon={faEllipsis} />
                </button>
              </li>
            </ul>
          </nav>
          <div className="flex flex-wrap -mx-xs">
            <div className="flex-shrink-0 flex items-center w-auto px-xs mr-6">
              <button className="flex items-center ">
                <div className="w-5 h-5 text-gray-blue-85 mr-5">
                  <FontAwesomeIcon icon={faCircleUser} />
                </div>
                <span className="text-xs text-gray-blue-60 font-bold">Clayton Santos</span>
              </button>
            </div>
            <div className="flex-shrink-0 w-auto px-xs">
              <button type='button' className="btn-icon bg-white text-gray-blue-85">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <div className="flex-shrink-0 w-auto px-xs">
              <button type='button' className="btn-icon bg-white text-gray-blue-85 badged-notification">
                <FontAwesomeIcon icon={faBell} />
              </button>
            </div>
            <div className="flex-shrink-0 w-auto px-xs">
              <Link href={'/auth/sign-in'}  className="btn-icon bg-white text-gray-blue-85 ">
                <FontAwesomeIcon icon={faCircleXmark} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="relative">
        <div id="drawer-example" className={classNames("drawer flex flex-col", {'active': drawer, 'inactive': !drawer})} tabIndex={-1} aria-labelledby="drawer-label">
          <header id="site-header" role="heading" className="navigate">
            <div className="navigate-content">
              <div className="flex flex-wrap -mx-xs">
                <div className="flex-shrink-0 w-auto px-xs">
                  <button  type='button' className="btn-icon bg-white text-gray-blue-85 border-2 border-gray-blue-97">
                    <FontAwesomeIcon icon={faBars} />
                  </button>
                </div>
                <div className="flex-grow px-xs flex items-center ml-7">
                  <h1 className='text-gray-blue-50 font-bold text-lg'>Constructor</h1>
                </div>
              </div>
              <div className="flex flex-wrap -mx-xs">
                <div className="flex-shrink-0 w-auto px-xs">
                  <button onClick={toggleDrawer} type='button' className="btn-icon bg-white text-gray-blue-85 border-2 border-gray-blue-97">
                    <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                </div>
              </div>
            </div>
          </header>
          <div className="flex h-full">
            <div className="flex-grow h-full">
              <div className="w-[6.25rem] h-full flex flex-col justify-between bg-white border-r-2 border-gray-blue-97 py-2xl">
                <nav role="navigation">
                  <ul className="flex flex-col">
                    <li className="mb-5">
                      <button type='button' className="btn-icon mx-auto bg-white text-primary-blue border-2 border-gray-blue-97">
                        <FontAwesomeIcon icon={faCompass} />
                      </button>
                    </li>
                    <li className="mb-5">
                      <button type='button' className="btn-icon mx-auto bg-white text-gray-blue-85 border-2 border-gray-blue-97">
                        <FontAwesomeIcon icon={faStar} />
                      </button>
                    </li>
                    <li className="mb-5">
                      <button type='button' className="btn-icon mx-auto bg-white text-gray-blue-85 border-2 border-gray-blue-97">
                        <FontAwesomeIcon icon={faChartLine} />
                      </button>
                    </li>
                    <li className="mb-5">
                      <button type='button' className="btn-icon mx-auto bg-white text-gray-blue-85 border-2 border-gray-blue-97">
                        <FontAwesomeIcon icon={faEarth} />
                      </button>
                    </li>
                  </ul>
                </nav>
                <nav role="navigation">
                  <ul className="flex flex-col">
                    <li className="mb-5">
                      <button onClick={toggleDrawer} type='button' className="btn-icon mx-auto bg-white text-gray-blue-85 border-2 border-gray-blue-97">
                        <FontAwesomeIcon icon={faArrowLeft} />
                      </button>
                    </li>
                  </ul>
                </nav>
                <nav role="navigation">
                  <ul className="flex flex-col">
                    <li className="mb-5">
                      <div className="btn-icon mx-auto bg-white text-gray-blue-85 border-2 border-gray-blue-97 badged-notification">
                        <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="rounded-full"/>
                      </div>
                    </li>
                    <li className="mb-5">
                      <button type='button' className="btn-icon mx-auto bg-white text-gray-blue-85 border-2 border-gray-blue-97">
                        <FontAwesomeIcon icon={faCirclePlus} />
                      </button>
                    </li>
                    
                  </ul>
                </nav>
              </div>
            </div>
            <div className="flex-grow w-full h-full">
              <div className="p-2xl">
                <nav role="navigation">
                  <ul>
                    <h5 className="text-xs font-bold text-gray-blue-70 mb-5">
                      Main menu
                    </h5>
                    <ul >
                      <li >
                        <Link href="visitors" className="px-md py-md inline-block w-full rounded-sm bg-white text-primary-blue shadow text-xs font-normal">
                          <div className="flex items-center">
                            <div className="w-7 h-7 text-base flex justify-center items-center mr-5">
                              <FontAwesomeIcon icon={faGrid2} />
                            </div>
                            <span>Visitors</span>
                          </div>
                        </Link>
                      </li>
                      <li >
                        <Link href="list-view" className="px-md py-sm inline-block w-full rounded-xs text-gray-blue-70 text-xs font-bold">
                          <div className="flex items-center">
                            <div className="w-7 h-7 text-base flex justify-center items-center mr-5">
                              <FontAwesomeIcon icon={faGrid3} />
                            </div>
                            <span>List View</span>
                          </div>
                        </Link>
                      </li>
                      <li >
                        <Link href="/" className="px-md py-sm inline-block w-full rounded-xs text-gray-blue-70 text-xs font-bold">
                          <div className="flex items-center">
                            <div className="w-7 h-7 text-base flex justify-center items-center mr-5">
                              <FontAwesomeIcon icon={faGrid3} />
                            </div>
                            <span>Chats</span>
                          </div>
                        </Link>
                      </li>
                      <li >
                        <a href="#" className="px-md py-sm inline-block w-full rounded-xs text-gray-blue-70 text-xs font-bold">
                          <div className="flex items-center">
                            <div className="w-7 h-7 text-base flex justify-center items-center mr-5">
                              <FontAwesomeIcon icon={faUser} />
                            </div>
                            <span>Contacts</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}