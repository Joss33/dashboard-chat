import { Header } from "@/components/Header";

//Externals
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowRight, faPhone, faVideo, faUpRightAndDownLeftFromCenter, faGrid3, faCirclePlus, faPaperclip, faImage, faPaperPlaneTop } from '@fortawesome/pro-solid-svg-icons';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-page" role="main">
        <div className="container">
          <div className="bg-white rounded-xs">
            <div className="flex">
              <div className="w-1/3 ">
                <div className="flex flex-col h-auto">
                  <header className="navigate  border-r border-gray-blue-95">
                    <div className="navigate-content">
                      <div className="flex flex-wrap -mx-xs">
                        <div className="flex-shrink-0 w-auto px-xs">
                          <button  type='button' className="btn-icon btn-icon--medium bg-white text-gray-blue-85">
                            <FontAwesomeIcon icon={faSearch} />
                          </button>
                        </div>
                        <div className="flex-grow w-auto px-xs flex items-center">
                          <h1 className='text-gray-blue-70 font-bold text-sm'>Search in Messages</h1>
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-xs">
                        <div className="flex-shrink-0 w-auto px-xs">
                          <button  type='button' className="btn-icon btn-icon--medium bg-white text-gray-blue-85">
                            <FontAwesomeIcon icon={faArrowRight} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </header>
                  <div className="border-r border-b border-gray-blue-95 flex-grow">
                    <nav role="navigation" className="navigate">
                      <header className="navigate-content mb-md" role="heading">
                        <div className="flex flex-wrap -mx-xs">
                          <div className="flex-grow w-auto px-xs flex items-center">
                            <h1 className='text-gray-blue-70 font-bold text-sm'>Active</h1>
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-xs">
                          <div className="flex-shrink-0 w-auto px-xs">
                            <button  type='button' className="btn-icon btn-icon--medium bg-white text-gray-blue-85">
                              <FontAwesomeIcon icon={faCirclePlus} />
                            </button>
                          </div>
                        </div>
                      </header>

                      <ul className="section-content">
                        <li className="mb-sm">
                          <a href="">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div className="w-[1.875rem] h-[1.875rem] rounded-xs mr-md">
                                  <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="avatar" className="rounded-xs " />
                                </div>
                                <span className="text-xs font-bold text-gray-blue-50 ">
                                  Ina Perry
                                </span>
                              </div>
                              <div className="flex items-center ml-auto">
                                <span className="text-sm font-bold text-primary-green mr-md">
                                  Online
                                </span>
                                <span className="text-sm font-bold text-gray-blue-70 ">
                                  12:45
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="mb-sm">
                          <a href="">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div className="w-[1.875rem] h-[1.875rem] rounded-xs mr-md">
                                  <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="avatar" className="rounded-xs " />
                                </div>
                                <span className="text-xs font-bold text-gray-blue-50 ">
                                  Wesley Ray
                                </span>
                              </div>
                              <div className="flex items-center ml-auto">
                                <span className="text-sm font-bold text-primary-green mr-md">
                                  Online
                                </span>
                                <span className="text-sm font-bold text-gray-blue-70 ">
                                  12:45
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="mb-sm">
                          <a href="">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div className="w-[1.875rem] h-[1.875rem] rounded-xs mr-md">
                                  <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="avatar" className="rounded-xs " />
                                </div>
                                <span className="text-xs font-bold text-gray-blue-50 ">
                                  Eula Burton
                                </span>
                              </div>
                              <div className="flex items-center ml-auto">
                                <span className="text-sm font-bold text-primary-yellow mr-md">
                                  Work
                                </span>
                                <span className="text-sm font-bold text-gray-blue-70 ">
                                  12:45
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="mb-sm">
                          <a href="">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div className="w-[1.875rem] h-[1.875rem] rounded-xs mr-md">
                                  <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="avatar" className="rounded-xs " />
                                </div>
                                <span className="text-xs font-bold text-gray-blue-50 ">
                                  Viola Morales
                                </span>
                              </div>
                              <div className="flex items-center ml-auto">
                                <span className="text-sm font-bold text-gray-blue-70 mr-md">
                                  Offline
                                </span>
                                <span className="text-sm font-bold text-gray-blue-70 ">
                                  12:45
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="mb-sm">
                          <a href="">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div className="w-[1.875rem] h-[1.875rem] rounded-xs mr-md">
                                  <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="avatar" className="rounded-xs " />
                                </div>
                                <span className="text-xs font-bold text-gray-blue-50 ">
                                  Vicent Terry
                                </span>
                              </div>
                              <div className="flex items-center ml-auto">
                                <span className="text-sm font-bold text-primary-green mr-md">
                                  Online
                                </span>
                                <span className="text-sm font-bold text-gray-blue-70 ">
                                  12:45
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="mb-sm">
                          <button className="btn">Show More Channels</button>
                        </li>
                      </ul>

                    </nav>
                    <nav role="navigation" className="navigate">
                      <header className="navigate-content mb-md" role="heading">
                        <div className="flex flex-wrap -mx-xs">
                          <div className="flex-grow w-auto px-xs flex items-center">
                            <h1 className='text-gray-blue-70 font-bold text-sm'>Missed</h1>
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-xs">
                          <div className="flex-shrink-0 w-auto px-xs">
                            <button  type='button' className="btn-icon btn-icon--medium bg-white text-gray-blue-85">
                              <FontAwesomeIcon icon={faCirclePlus} />
                            </button>
                          </div>
                        </div>
                      </header>

                      <ul className="section-content">
                        <li className="mb-sm">
                          <a href="">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div className="w-[1.875rem] h-[1.875rem] flex justify-center items-center rounded-xs mr-md">
                                  <div className="w-2 h-2 rounded-full bg-gray-blue-85"></div>
                                </div>
                                <span className="text-xs font-bold text-gray-blue-50 ">
                                  How To Frontend
                                </span>
                              </div>
                              <div className="flex items-center ml-auto">
                                <span className="text-sm font-bold text-primary-green mr-md">
                                  +12
                                </span>
                                <span className="text-sm font-bold text-gray-blue-70 ">
                                  564
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="mb-sm">
                          <a href="">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div className="w-[1.875rem] h-[1.875rem] flex justify-center items-center rounded-xs mr-md">
                                  <div className="w-2 h-2 rounded-full bg-gray-blue-85"></div>
                                </div>
                                <span className="text-xs font-bold text-gray-blue-50 ">
                                  Payment Workers
                                </span>
                              </div>
                              <div className="flex items-center ml-auto">
                                <span className="text-sm font-bold text-primary-green mr-md">
                                  +12
                                </span>
                                <span className="text-sm font-bold text-gray-blue-70 ">
                                  564
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="mb-sm">
                          <a href="">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div className="w-[1.875rem] h-[1.875rem] flex justify-center items-center rounded-xs mr-md">
                                  <div className="w-2 h-2 rounded-full bg-gray-blue-85"></div>
                                </div>
                                <span className="text-xs font-bold text-gray-blue-50 ">
                                  Web Designer
                                </span>
                              </div>
                              <div className="flex items-center ml-auto">
                                <span className="text-sm font-bold text-primary-green mr-md">
                                  +12
                                </span>
                                <span className="text-sm font-bold text-gray-blue-70 ">
                                  564
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="mb-sm">
                          <a href="">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div className="w-[1.875rem] h-[1.875rem] flex justify-center items-center rounded-xs mr-md">
                                  <div className="w-2 h-2 rounded-full bg-gray-blue-85"></div>
                                </div>
                                <span className="text-xs font-bold text-gray-blue-50 ">
                                  President of Sales
                                </span>
                              </div>
                              <div className="flex items-center ml-auto">
                                <span className="text-sm font-bold text-primary-green mr-md">
                                  +12
                                </span>
                                <span className="text-sm font-bold text-gray-blue-70 ">
                                  564
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="mb-sm">
                          <a href="">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div className="w-[1.875rem] h-[1.875rem] flex justify-center items-center rounded-xs mr-md">
                                  <div className="w-2 h-2 rounded-full bg-gray-blue-85"></div>
                                </div>
                                <span className="text-xs font-bold text-gray-blue-50 ">
                                  Marketing Coodinator
                                </span>
                              </div>
                              <div className="flex items-center ml-auto">
                                <span className="text-sm font-bold text-primary-green mr-md">
                                  +12
                                </span>
                                <span className="text-sm font-bold text-gray-blue-70 ">
                                  564
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="mb-sm">
                          <button className="btn">Show More Channels</button>
                        </li>
                      </ul>

                    </nav>
                    <nav role="navigation" className="navigate">
                      <header className="navigate-content mb-md" role="heading">
                        <div className="flex flex-wrap -mx-xs">
                          <div className="flex-grow w-auto px-xs flex items-center">
                            <h1 className='text-gray-blue-70 font-bold text-sm'>Closed</h1>
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-xs">
                          <div className="flex-shrink-0 w-auto px-xs">
                            <button  type='button' className="btn-icon btn-icon--medium bg-white text-gray-blue-85">
                              <FontAwesomeIcon icon={faCirclePlus} />
                            </button>
                          </div>
                        </div>
                      </header>

                      <ul className="section-content">
                        <li className="mb-sm">
                          <a href="">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div className="w-[1.875rem] h-[1.875rem] flex justify-center items-center rounded-xs mr-md">
                                  <div className="w-2 h-2 rounded-full bg-gray-blue-85"></div>
                                </div>
                                <span className="text-xs font-bold text-gray-blue-50 ">
                                  How To Frontend
                                </span>
                              </div>
                              <div className="flex items-center ml-auto">
                                <span className="text-sm font-bold text-primary-green mr-md">
                                  +12
                                </span>
                                <span className="text-sm font-bold text-gray-blue-70 ">
                                  564
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="mb-sm">
                          <a href="">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div className="w-[1.875rem] h-[1.875rem] flex justify-center items-center rounded-xs mr-md">
                                  <div className="w-2 h-2 rounded-full bg-gray-blue-85"></div>
                                </div>
                                <span className="text-xs font-bold text-gray-blue-50 ">
                                  Payment Workers
                                </span>
                              </div>
                              <div className="flex items-center ml-auto">
                                <span className="text-sm font-bold text-primary-green mr-md">
                                  +12
                                </span>
                                <span className="text-sm font-bold text-gray-blue-70 ">
                                  564
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="mb-sm">
                          <a href="">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div className="w-[1.875rem] h-[1.875rem] flex justify-center items-center rounded-xs mr-md">
                                  <div className="w-2 h-2 rounded-full bg-gray-blue-85"></div>
                                </div>
                                <span className="text-xs font-bold text-gray-blue-50 ">
                                  Web Designer
                                </span>
                              </div>
                              <div className="flex items-center ml-auto">
                                <span className="text-sm font-bold text-primary-green mr-md">
                                  +12
                                </span>
                                <span className="text-sm font-bold text-gray-blue-70 ">
                                  564
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="mb-sm">
                          <a href="">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div className="w-[1.875rem] h-[1.875rem] flex justify-center items-center rounded-xs mr-md">
                                  <div className="w-2 h-2 rounded-full bg-gray-blue-85"></div>
                                </div>
                                <span className="text-xs font-bold text-gray-blue-50 ">
                                  President of Sales
                                </span>
                              </div>
                              <div className="flex items-center ml-auto">
                                <span className="text-sm font-bold text-primary-green mr-md">
                                  +12
                                </span>
                                <span className="text-sm font-bold text-gray-blue-70 ">
                                  564
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="mb-sm">
                          <a href="">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div className="w-[1.875rem] h-[1.875rem] flex justify-center items-center rounded-xs mr-md">
                                  <div className="w-2 h-2 rounded-full bg-gray-blue-85"></div>
                                </div>
                                <span className="text-xs font-bold text-gray-blue-50 ">
                                  Marketing Coodinator
                                </span>
                              </div>
                              <div className="flex items-center ml-auto">
                                <span className="text-sm font-bold text-primary-green mr-md">
                                  +12
                                </span>
                                <span className="text-sm font-bold text-gray-blue-70 ">
                                  564
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="mb-sm">
                          <button className="btn">Show More Channels</button>
                        </li>
                      </ul>

                    </nav>
                  </div>
                </div>
              </div>
              <div className="flex-grow w-auto">
                <div className="flex flex-col h-full">
                  <header className="navigate border-l border-gray-blue-95">
                    <div className="navigate-content">
                      <div className="flex flex-wrap -mx-sm">
                        <div className="flex-shrink-0 w-auto px-sm">
                          <div className="flex flex-wrap -mx-sm">
                            <div className="flex-shrink-0 w-auto px-sm">
                              <button  type='button' className="btn-icon btn-icon--medium bg-white text-gray-blue-85">
                                <FontAwesomeIcon icon={faPhone} />
                              </button>
                            </div>
                            <div className="flex-shrink-0 w-auto px-sm">
                              <button  type='button' className="btn-icon btn-icon--medium bg-white text-gray-blue-85">
                                <FontAwesomeIcon icon={faVideo} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-sm">
                        <div className="flex-grow mx-auto px-sm">
                          <div className="flex items-center">
                            <div className="w-[1.875rem] h-[1.875rem] flex justify-center items-center rounded-xs mr-md">
                              <div className="w-2 h-2 rounded-full bg-primary-green"></div>
                            </div>
                            <h1 className='text-gray-blue-70 font-bold text-sm'>Dennis Smith</h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-sm">
                        <div className="flex-shrink-0 w-auto px-sm">
                          <div className="flex flex-wrap -mx-sm">
                            <div className="flex-shrink-0 w-auto px-sm">
                              <button  type='button' className="btn-icon btn-icon--medium bg-white text-gray-blue-85">
                                <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                              </button>
                            </div>
                            <div className="flex-shrink-0 w-auto px-sm">
                              <button  type='button' className="btn-icon btn-icon--medium bg-white text-gray-blue-85">
                                <FontAwesomeIcon icon={faGrid3} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                  <div className="flex-grow relative border-b border-l border-gray-blue-95 overflow-y-auto max-h-">
                    <div className="post p-3xl">
                        <div className="post-content">
                          <div className="post-header">
                            <div className="w-10 h-10 rounded me-5">
                              <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="rounded"/>
                            </div>
                            <span className="text-xs text-gray-blue-50 font-bold">
                              Kyle Peters
                            </span>
                            <span className="text-xs text-gray-blue-70 font-bold mx-2.5">
                              Web Designer
                            </span>
                            <span className="text-xs text-gray-blue-70 font-bold">
                              12:45 PM
                            </span>
                          </div>
                          <div className="post-body">
                            When you starting a company you are thinking on how to cut expenses. One of such options to cut the startup costs is a company logo design. But is it good idea to order a cheap logo or work without company logo at all?
                          </div>
                        </div>
                    </div>
                    <div className="post p-3xl">
                      <div className="post-content">
                        <div className="post-header">
                          <div className="w-10 h-10 rounded me-5">
                            <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="rounded"/>
                          </div>
                          <span className="text-xs text-gray-blue-50 font-bold">
                            Susan Lane
                          </span>
                          <span className="text-xs text-gray-blue-70 font-bold mx-2.5">
                            Web Designer
                          </span>
                          <span className="text-xs text-gray-blue-70 font-bold">
                            12:45 PM
                          </span>
                        </div>
                        <div className="post-body">
                          When you starting a company you are thinking on how to cut expenses. One of such options to cut the startup costs is a company logo design.
                        </div>
                      </div>
                    </div>
                    <div className="line-chat">
                      <div className="line-chat-line"></div>
                      <div className="line-chat-button">Today</div>
                    </div>
                    <div className="post p-3xl">
                      <div className="post-content">
                        <div className="post-header">
                          <div className="w-10 h-10 rounded me-5">
                            <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="rounded"/>
                          </div>
                          <span className="text-xs text-gray-blue-50 font-bold">
                            Kyle Peters
                          </span>
                          <span className="text-xs text-gray-blue-70 font-bold mx-2.5">
                            Web Designer
                          </span>
                          <span className="text-xs text-gray-blue-70 font-bold">
                            12:45 PM
                          </span>
                        </div>
                        <div className="post-body">
                          When you starting a company you are thinking on how to cut expenses. One of such options to cut the startup costs is a company logo design. But is it good idea to order a cheap logo or work without company logo at all?
                        </div>
                      </div>
                    </div>
                    <div className="post p-3xl">
                      <div className="post-content">
                        <div className="post-header">
                          <div className="w-10 h-10 rounded me-5">
                            <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="rounded"/>
                          </div>
                          <span className="text-xs text-gray-blue-50 font-bold">
                            Susan Lane
                          </span>
                          <span className="text-xs text-gray-blue-70 font-bold mx-2.5">
                            Web Designer
                          </span>
                          <span className="text-xs text-gray-blue-70 font-bold">
                            12:45 PM
                          </span>
                        </div>
                        <div className="post-body">
                          When you starting a company you are thinking on how to cut expenses. One of such options to cut the startup costs is a company logo design.
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav className="navigate border-t border-l border-b-2  border-gray-blue-95" role="navigation">
                    <div className="flex flex-wrap -mx-sm">
                      <div className="flex-shrink-0 w-auto px-sm">
                        <div className="flex flex-wrap -mx-sm">
                          <div className="flex-shrink-0 w-auto px-sm">
                            <button  type='button' className="btn-icon btn-icon--medium bg-white text-gray-blue-85">
                              <FontAwesomeIcon icon={faPaperclip} />
                            </button>
                          </div>
                          <div className="flex-shrink-0 w-auto px-sm">
                            <button  type='button' className="btn-icon btn-icon--medium bg-white text-gray-blue-85">
                              <FontAwesomeIcon icon={faImage} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex-grow flex items-center px-sm">
                        <h1 className='text-gray-blue-70 font-bold text-sm'>Type Message</h1>
                      </div>
                      <div className="flex-shrink-0 w-auto px-sm">
                        <div className="flex flex-wrap -mx-sm">
                          <div className="flex-shrink-0 w-auto px-sm">
                            <button  type='button' className="btn-icon btn-icon--medium bg-white text-primary-blue">
                              <FontAwesomeIcon icon={faPaperPlaneTop} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
