import React from 'react'
import managment_img from "../assets/img/managment_img.png"
export const Managment = () => {
    return (
        <>
            <section className='py-12'>
                <div className="container mx-auto px-3 xl:py-12">
                    <div className="flex items-center flex-wrap justify-center xl:justify-start">
                        <div className="lg:w-1/2">
                            <div><img className='w-full' src={managment_img} alt="img" /></div>
                        </div>
                        <div className="lg:w-1/2 pt-6 xl:pt-0">
                            <h2 className='font-KonexyPersonalUse font-normal lg:text-5xl md:text-[38px] sm:text-4xl text-[34px] text-black'><span className='text-[#6022EA] xl:block'>Agile WordPress </span>Development Project management
                            </h2>
                            <p className='text-base font-gilroyMedium font-normal text-black opacity-70 pt-3'>Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in bibendum turpis. </p>
                            <button className='bg-[#6022EA] hover:bg-transparent border-[1px] border-transparent hover:border-[1px] hover:border-[#6022ea] transition-all duration-300 border-solid hover:text-[#6022ea] py-[10px] px-6 rounded-[80px] font-semibold text-white text-base sm:mt-10 mt-5'>Explore</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}