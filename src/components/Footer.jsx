import React from 'react'
import footer_links from "../assets/img/footer_link_img.svg"
import call_icon from "../assets/img/footer_call_icon.svg"
import message_icon from "../assets/img/footer_massage_icon.svg"
import home_icon from "../assets/img/footer_home_icon.svg"
import github from "../assets/img/github.svg"
import linkdin from "../assets/img/linkdin.svg"
import twitter from "../assets/img/twitter.svg"
import facebook from "../assets/img/facebook.svg"
import instagram from "../assets/img/instagram.svg"
import wikipedia from "../assets/img/wikipedia.svg"
import search from "../assets/img/footer_search.svg"
export const Footer = () => {
    return (
        <>  <section className='bg-black py-12'>
            <div className="container mx-auto px-3 pt-14">
                <div className="flex justify-end pb-14">
                    <div className='bg-white w-full md:w-6/12 lg:w-4/12 sm:py-5 py-3 sm:px-7 px-4 rounded-[80px] flex justify-between'><input className='bg-transparent w-full' type="text" placeholder='What do you need assistance with?' /><img src={search} alt="search_icon" /></div>
                </div>
                <div className="flex flex-wrap">
                    <div className="sm:w-6/12 w-full lg:w-3/12">
                        <h3 className='text-white text-base font-normal font-gilroyMedium pb-4'>Services</h3>
                        <ul>
                            <li className='flex font-gilroyMedium pb-3 text-sm font-normal text-white'><img className='me-1' src={footer_links} alt="arrow" />WordPress Development</li>
                            <li className='flex font-gilroyMedium pb-3 text-sm font-normal text-white'><img className='me-1' src={footer_links} alt="arrow" />WooCommerce Development</li>
                            <li className='flex font-gilroyMedium pb-3 text-sm font-normal text-white'><img className='me-1' src={footer_links} alt="arrow" />WordPress Maintenance</li>
                            <li className='flex font-gilroyMedium pb-3 text-sm font-normal text-white'><img className='me-1' src={footer_links} alt="arrow" />WSpeed Optimization</li>
                            <li className='flex font-gilroyMedium pb-3 text-sm font-normal text-white'><img className='me-1' src={footer_links} alt="arrow" />Dedicated WordPress Developer</li>
                            <li className='flex font-gilroyMedium pb-3 text-sm font-normal text-white'><img className='me-1' src={footer_links} alt="arrow" />WHeadless WordPress Development</li>
                            <li className='flex font-gilroyMedium text-sm font-normal text-white'><img className='me-1' src={footer_links} alt="arrow" />White Label Development</li>
                        </ul>
                    </div>
                    <div className="sm:w-6/12 w-full lg:w-3/12 px-2 mt-8 sm:mt-0">
                        <h3 className='text-white text-base font-normal font-gilroyMedium pb-4'>Services</h3>
                        <ul>
                            <li className='flex font-gilroyMedium pb-3 text-sm font-normal text-white'><img className='me-1' src={footer_links} alt="arrow" />WordPress Hosting</li>
                            <li className='flex font-gilroyMedium pb-3 text-sm font-normal text-white'><img className='me-1' src={footer_links} alt="arrow" />PSD, XD, Figma to WordPress Conversion</li>
                            <li className='flex font-gilroyMedium pb-3 text-sm font-normal text-white'><img className='me-1' src={footer_links} alt="arrow" />Custom WordPress Theme</li>
                            <li className='flex font-gilroyMedium pb-3 text-sm font-normal text-white'><img className='me-1' src={footer_links} alt="arrow" />Custom WordPress Plugins</li>
                            <li className='flex font-gilroyMedium pb-3 text-sm font-normal text-white'><img className='me-1' src={footer_links} alt="arrow" />CMS to WordPress</li>
                            <li className='flex font-gilroyMedium  text-sm font-normal text-white'><img className='me-1' src={footer_links} alt="arrow" />WordPress Malware Removal</li>

                        </ul>
                    </div>
                    <div className="sm:w-6/12 w-11/12 lg:w-3/12 px-2 mt-8 lg:mt-0">
                        <h3 className='text-white text-base font-normal font-gilroyMedium pb-4'>Latest Articles</h3>

                        <ul>
                            <li className='flex font-gilroyMedium pb-5 text-sm font-normal text-white'>
                                7 WordPress Plugins to Create an Effective Newsletter 03.01.2022
                            </li>
                            <li className='flex font-gilroyMedium pb-5 text-sm font-normal text-white'>What’s the Perfect Blog Post Length for Your WordPress Site’s SEO?
                                02.01.2022</li>
                            <li className='flex font-gilroyMedium pb-5 text-sm font-normal text-white'>
                                5 Reasons the Future of WordPress Is Headless 01.01.2022
                            </li>
                            <li className='flex font-gilroyMedium pb-5 text-sm font-normal text-white'>
                                Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the Amazingly Successful 2021 30.12.2021
                            </li>
                        </ul>
                    </div>
                    <div className="sm:w-6/12 w-full lg:w-3/12 px-2 mt-8 lg:mt-0">
                        <h3 className='text-white text-base font-normal font-gilroyMedium pb-4'>Latest Articles</h3>
                        <ul>
                            <li className='flex font-gilroyMedium mb-5 text-sm font-normal cursor-pointer text-white'><img className='me-2' src={call_icon} alt="call_icon" />EU: +359 988 993 128</li>
                            <li className='flex font-gilroyMedium mb-5 text-sm font-normal cursor-pointer text-white'><img className='me-2' src={call_icon} alt="call_icon" />US: +1 (1 888) 266-6917</li>
                            <li className='flex font-gilroyMedium mb-5 text-sm font-normal cursor-pointer text-white'><img className='me-2' src={message_icon} alt="call_icon" />office@vipestudio.com
                            </li>
                            <li className='flex font-gilroyMedium mb-5 text-sm font-normal cursor-pointer text-white'><img className='me-2' src={home_icon} alt="call_icon" />14 Srebarna, Sofia 1407, Bulgaria</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-wrap pt-20 items-center sm:justify-between'>
                    <div className="lg:w-3/12 w-full sm:w-5/12">
                        <p className='text-center sm:text-start font-gilroyMedium text-white text-sm font-normal'>© Vipe Studio 2016-2022</p>
                        <p className='text-center sm:text-start font-gilroyMedium text-white text-sm font-normal pt-[14px]'>Privacy | Careers |Media |Client Area</p>
                    </div>
                    <div className="lg:w-4/12 w-full sm:w-7/12">
                        <div className="flex flex-wrap gap-4 justify-center sm:justify-end mt-5 sm:mt-0">
                            <div className=' hover:scale-110 hover:opacity-70 transition-all duration-300'><a href="githu.com"><img src={github} alt="github" /></a></div>
                            <div className=' hover:scale-110 hover:opacity-70 transition-all duration-300'><a href="linkdin.com"><img src={linkdin} alt="linkdin" /></a></div>
                            <div className=' hover:scale-110 hover:opacity-70 transition-all duration-300'><a href="twitter.com"><img src={twitter} alt="twitter" /></a></div>
                            <div className=' hover:scale-110 hover:opacity-70 transition-all duration-300'><a href="facebook.com"><img src={facebook} alt="facebook" /></a></div>
                            <div className=' hover:scale-110 hover:opacity-70 transition-all duration-300'><a href="instagram.com"><img src={instagram} alt="instagram" /></a></div>
                            <div className=' hover:scale-110 hover:opacity-70 transition-all duration-300'><a href="wikipedia.com"><img src={wikipedia} alt="wikipidia" /></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative top-[-180px] sm:top-[-100px] border border-[#4C4C4C]-100 opacity-25'></div>
        </section>
        </>
    )
}