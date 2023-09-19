import React from 'react'
import team_start from "../assets/img/team_starts_img.png"
export const TeamStars = () => {
    return (
        <>
            <section className='bg-[#f6f6f6] py-12'>
                <div className="container mx-auto px-3">
                    <div className="flex flex-wrap items-center flex-col-reverse lg:flex-row">
                        <div className="lg:w-1/2 w-full">
                            <h2 className=' font-KonexyPersonalUse font-normal lg:text-5xl md:text-[38px] sm:text-4xl text-[34px] text-black pt-5 lg:pt-0'>Team Full of Stars</h2>
                            <p className='text-base font-gilroyMedium font-normal text-black pt-3 sm:pb-8 pb-5 xl:w-9/12'>Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in bibendum turpis. </p>
                            <button className='bg-[#6022EA] hover:bg-transparent border-[1px] border-transparent hover:border-[1px] hover:border-[#6022ea] transition-all duration-300 border-solid hover:text-[#6022ea] py-[10px] px-6 rounded-[80px] font-semibold text-white text-base'>Explore</button>
                        </div>
                        <div className="lg:w-1/2 w-full sm:w-10/12 sm:px-3">
                            <div className='xl:translate-y-[100px]'><img className='w-full' src={team_start} alt="team_members" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}