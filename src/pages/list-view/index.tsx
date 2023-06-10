import { Header } from "@/components/Header";

export default function ListView() {
  return (
    <>
      <Header/>
      <main id="main-page" role="main">
        <div className="container">
          <div className="w-[35rem] h-[35rem] relative mx-auto">
            <div className="w-full h-full relative p-[11.7%] cursor-pointer rounded-full border border-primary-blue shadow shadow-primary-blue mx-auto">
              <div className="w-full h-full relative p-[15.4%] cursor-pointer rounded-full border border-primary-yellow shadow shadow-primary-yellow mx-auto">
                <div className="w-full h-full relative p-[22.6%] cursor-pointer rounded-full border border-primary-green shadow shadow-primary-green mx-auto">
                  <div className="w-full h-full relative p-[42%] cursor-pointer rounded-full border border-primary-pink shadow shadow-primary-pink mx-auto">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="m-auto absolute top-0 bottom-0 left-0 right-0 z-10 border border-gray-blue-50 cursor-pointer w-full h-full rounded-full max-w-[11%] max-h-[11%]">
              <img src="https://salesiq.zoho.com/web/v2/migueai/downloads/1680390546778_800585000000002002?purpose=operator_image" alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}