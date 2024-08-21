import { data } from "@/types/data"
import { Button } from "react-day-picker"
import { ResetIcon } from "@radix-ui/react-icons"
import { SearchIcon } from "lucide-react"

export default function Upcoming() {
  return (
    <>
      <div className="flex items-center justify-center my-10 ">
        <div className="relative flex text-sm text-gray-500 items-center focus-within:text-gray-300">
          <SearchIcon className="ml-3 h-5 w-5 absolute pointer-events-none" />
          <input type="text" className="w-96 py-3 px-5 rounded-full bg-[#0e0e0e] border-gray-700 border-[0.5px] pl-10" placeholder="Search" />
        </div>
      </div>
      <div className="z-10 grid grid-cols-3 p-5 gap-8 text-[#fafafa]">
        {data.map((data) => {
          return (
            <div className="bg-gradient-to-br from-[#0e0e0e] to-[#0a0a0a] border-[0.5px] border-gray-500 flex flex-col p-5 rounded-md ">
              <div className="flex justify-between">
                <div>
              <h2 className="flex items-center gap-1 "><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.62129 1.13607C9.81656 0.940808 10.1331 0.940809 10.3284 1.13607L11.3891 2.19673L12.8033 3.61094L13.8639 4.6716C14.0592 4.86687 14.0592 5.18345 13.8639 5.37871C13.6687 5.57397 13.3521 5.57397 13.1568 5.37871L12.5038 4.7257L8.86727 9.57443L9.97485 10.682C10.1701 10.8773 10.1701 11.1939 9.97485 11.3891C9.77959 11.5844 9.463 11.5844 9.26774 11.3891L7.85353 9.97491L6.79287 8.91425L3.5225 12.1846C3.32724 12.3799 3.01065 12.3799 2.81539 12.1846C2.62013 11.9894 2.62013 11.6728 2.81539 11.4775L6.08576 8.20714L5.0251 7.14648L3.61089 5.73226C3.41563 5.537 3.41562 5.22042 3.61089 5.02516C3.80615 4.8299 4.12273 4.8299 4.31799 5.02516L5.42557 6.13274L10.2743 2.49619L9.62129 1.84318C9.42603 1.64792 9.42603 1.33133 9.62129 1.13607Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M9.62129 1.13607C9.81656 0.940808 10.1331 0.940809 10.3284 1.13607L11.3891 2.19673L12.8033 3.61094L13.8639 4.6716C14.0592 4.86687 14.0592 5.18345 13.8639 5.37871C13.6687 5.57397 13.3521 5.57397 13.1568 5.37871L12.5038 4.7257L8.86727 9.57443L9.97485 10.682C10.1701 10.8773 10.1701 11.1939 9.97485 11.3891C9.77959 11.5844 9.463 11.5844 9.26774 11.3891L7.85353 9.97491L6.79287 8.91425L3.5225 12.1846C3.32724 12.3799 3.01065 12.3799 2.81539 12.1846C2.62013 11.9894 2.62013 11.6728 2.81539 11.4775L6.08576 8.20714L5.0251 7.14648L3.61089 5.73226C3.41563 5.537 3.41562 5.22042 3.61089 5.02516C3.80615 4.8299 4.12273 4.8299 4.31799 5.02516L5.42557 6.13274L10.2743 2.49619L9.62129 1.84318C9.42603 1.64792 9.42603 1.33133 9.62129 1.13607Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                <div className="flex items-center justify-around">
                  <div className="bg-gradient-to-br from-red-500 to-orange-500 text-transparent bg-clip-text"><b>{data.name}</b></div>
                </div>
              </h2>
              </div>
              <div>
                <h2 className="text-sm text-[#64748b] opacity-70">{data.type}</h2>
              </div>
              </div>
              <h2 className="text-sm mt-5 ml-5 text-[#64748b]"> {data.description}</h2>
              <img src="https://placehold.co/1920x1080" className="p-5" alt="" />
              <div className="flex gap-2 ml-5 mt-2"> {data.tags.map((tag) => {
                return (
                  <span className="text-xs bg-[#1a1a1a] border-gray-700 border-[0.5px] px-2 rounded-full ">{tag}</span>
                )
              })}
              </div>
              <h2 className="text-sm ml-5 mt-5 text-[#64748b]">{data.venue}</h2>
              <h2 className="text-xs ml-5 mt-2 flex gap-2 items-center" ><span className="flex flex-col">{data.startDate} <span>{data.startTime}</span></span> <span className="bg-gradient-to-br from-red-500 to-orange-500 text-transparent bg-clip-text"><b> - </b></span> <span className="flex flex-col">{data.endDate} <span>{data.endTime}</span></span> </h2>
              <button className="w-max ml-5 mt-5 bg-red-600 py-2 px-5 rounded-full text-sm">Register Now</button>
            </div>
          )
        })}
      </div>
    </>
  )
}