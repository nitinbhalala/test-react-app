import React from 'react'
import { useNavigate } from 'react-router-dom'

const cardData = [
    { index: 0, image: "item-image-1.jpg", title: "Monday Moves", location: "Key Night Club, Delhi", date: "Friday 11 July 06:00 PM" },
    { index: 1, image: "item-image-2.jpg", title: "Party Animal", location: "Key Night Club, Delhi", date: "Friday 11 July 06:00 PM" },
    { index: 2, image: "item-image-3.jpg", title: "Party All Night", location: "Key Night Club, Delhi", date: "Friday 11 July 06:00 PM" },
    { index: 3, image: "item-image-1.jpg", title: "Monday Moves", location: "Key Night Club, Delhi", date: "Friday 11 July 06:00 PM" },
    { index: 4, image: "item-image-2.jpg", title: "Monday Moves", location: "Key Night Club, Delhi", date: "Friday 11 July 06:00 PM" },
]
function HomePage() {
    const router = useNavigate();
    return (
        <div className="w-full h-screen md:max-w-lg bg-[#fefefe]">
            <div className="relative ">
                <img height={161} width={375} loading="lazy" src="/images/banner.jpg" alt="" className="mx-auto w-full max-w-full h-[161px] md:h-[250px]" />
            </div>
            <div className='w-full pb-5 -translate-y-8 flex flex-col px-4'>
                <div className='flex items-center h-full justify-between'>
                    <div className='self-start flex shrink-0 align-top'>
                        <img height={"130px"} width={"130px"} loading="lazy" src="/images/user.jpg" alt="" className="mx-auto  xs:max-w-full shrink-0 h-auto max-w-[100px] rounded-full p-2 xs:p-2.5 bg-[#fefefe] block" />
                    </div>
                    <div className="flex h-full pt-6 gap-[14px]">
                        <button className='bg-white shadow-btn h-[34px] w-[34px] rounded-full  flex justify-center items-center'>
                            <img height={"16px"} width={"16px"} loading="lazy" src="/images/icons/instagram-icon.svg" alt="" className="mx-auto max-w-full h-auto" />
                        </button>
                        <button className='bg-white shadow-btn h-[34px] w-[34px] rounded-full flex  justify-center items-center'>
                            <img height={"16px"} width={"16px"} loading="lazy" src="/images/icons/facebook-icon.svg" alt="" className="mx-auto max-w-full h-auto" />
                        </button>
                        <button className='bg-white shadow-btn h-[34px] w-[34px] rounded-full flex  justify-center items-center'>
                            <img height={"16px"} width={"16px"} loading="lazy" src="/images/icons/share-icon.svg" alt="" className="mx-auto max-w-full h-auto" />
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-[14px] pt-2.5'>
                    <h2 className="text-2xl font-bold text-[#131313]">Gouri Sharma</h2>
                    <p className="text-base font-[450] text-[#384853]">TEDx Speaker | Disc Jockey | Cabin Crew | Aviation & Grooming Instructor | Influencer</p>
                </div>
                <div className='my-5 flex flex-col md:flex-row md:flex-wrap gap-5 justify-center xs:mt-[59px]'>
                    {cardData.map((item, index) => {
                        const { image } = item
                        return <button onClick={() => { router("/post") }} key={index} className='rounded w-full'>
                            <img height='214px' width='354px' src={`images/${image}`} alt="poster-1" className='w-full rounded-t-[20px]' />
                            <div className='flex relative flex-col gap-2.5 text-[#384853] border-x pt-[54px] rounded-b-[20px] border-b p-5 border-black'>
                                <div className='bg-[#E6F4F9] top-2.5 rounded-r-3xl left-0 py-1.5 px-[17px] inline-block absolute'>
                                    <div className='flex gap-2.5'>
                                        <img height={"20px"} width={"20px"} loading="lazy" src="/images/icons/percentage-icon.png" alt="location" className="" />
                                        Ladies Entry Free
                                    </div>
                                </div>
                                <h2 className='text-[#131313] text-xl font-bold'>Monday Moves</h2>
                                <div className='flex gap-3'>
                                    <img height={"14px"} width={"14px"} loading="lazy" src="/images/icons/location-icon.svg" alt="location" className="" />
                                    <span className="block">Key Night Club, Delhi</span>
                                </div>
                                <div className='flex gap-3'>
                                    <img height={"14px"} width={"14px"} loading="lazy" src="/images/icons/calendar-icon.svg" alt="calendar-icon" className="" />
                                    <span className="block">Friday 11 July 06:00 PM </span>
                                </div>
                            </div>
                        </button>
                    })}

                </div>
                <div className="my-5">
                    <h2 className="text-sm font-medium text-center text-[#384853] px-8">Sign up to receive WhatsApp updates and offers from DJ Gouri</h2>
                </div>
                <button className="text text-base font-bold py-2.5 text-white rounded-[40px] bg-[#077F7F]">Subscribe</button>
            </div>

        </div>
    )
}

export default HomePage