import React,{useState} from 'react'
import './Content.css'
import info from '../../assets/info.svg'
import earth from '../../assets/earth.svg'
import chevronleft from '../../assets/chevron-left-solid.svg'
import chevronright from '../../assets/chevron-right-solid.svg'
import star from '../../assets/star-regular.svg'
import calender from '../../assets/calendar.svg'
import ticket from '../../assets/ticket.svg'
import userGroup from '../../assets/user-group.svg'
import clock from '../../assets/clock.svg'
import add from '../../assets/plus-solid.svg'
import lock from '../../assets/lock.svg'
import rupay from '../../assets/rupay.png'
import mastercard from '../../assets/mastercard.jpg'
import visa from '../../assets/visa.jpg'
import amex from '../../assets/amex.png'
import circle from '../../assets/circle-dot-solid.svg'
import googlepay from '../../assets/googlepay.png'
import applepay from '../../assets/applepay.png'


import nature3 from '../../assets/nature3.png'
import nature4 from '../../assets/nature4.png'
import nature5 from '../../assets/nature5.png'
import nature6 from '../../assets/nature6.png'
import nature7 from '../../assets/nature7.png'
import nature8 from '../../assets/nature8.png'


const Content = () => {
    const [count, setCount] = useState(0);
    const [expandIndex, setExpandIndex] = useState(-1);

    const handleExpand = (index) => {
        setExpandIndex(expandIndex === index ? -1 : index);
    };

    
    const photos = [
        {   image: nature3,
            number: 0
        },
        {   image: nature4,
            number: 1   
        },
        {   image: nature5,
            number: 2   
        },
        {   image: nature8,
            number: 3   
        },
        {   image: nature6,
            number: 4   
        },
        {   image: nature7,
            number: 5   
        }
    ]
    

    const content = [
        {
            heading: "What should I do on my first trip to Rome?",
            hidden: "Alternatively, if you are a solo traveller, budget traveller or enjoy staying in hostels, I recommend Freedom Traveller Hostel. I stayed here for 3 nights and had a wonderful stay. The free croissants at breakfast are incredible! I also made some friends for life while staying here."
        },
        {
            heading: "What are some hidden gems to see in Rome?",
            hidden: "Rome is packed with hidden gems. If you love art, do not miss the Galleria Doria Pamphilj or Palazzo Barberini. Rome is packed with hidden gems. If you love art, do not miss the Galleria Doria Pamphilj or Palazzo Barberini. Rome is packed with hidden gems. If you love art, do not miss the Galleria Doria Pamphilj or Palazzo Barberini."
        },
        {
            heading: "How much time should I spent in Rome?",
            hidden: "The eternal city offers incredible history, picture-perfect sites and delicious food. Try to spend at least 3 or 4 days there but, even if you only have a very short trip, Rome is still worth a visit. There is so much to see and eat in Rome you're sure to have an incredible vacation."
        },
        {
            heading: "What food is Rome known for?",
            hidden: "Perhaps it was first invented in Tuscany, perhaps in Rome. Either way, bruschetta today is a staple on the menu of most Roman restaurants. A very simple dish, it’s said that it came about when 15th-century olive oil makers would toast their bread over a fire that they used to keep warm in the winter, then would taste-test their own olive oil on it. Today, the recipe is pretty much the same: A good bread, rubbed with only a bit of garlic."
        },
        {
            heading: "What is the best way to get around Rome?",
            hidden: "Metro. Taking the metro is usually the quickest way to cut across the city. Rome's metro system consists of three lines (or two and a half, if we're being honest) – A, B, and to a certain extent C."
        }
    ];

    const handleCountUp = () => {
        setCount(count+1);
        if(count >= photos.length-1){
            setCount(0)
        }
    }

    const handleCountDown = () => {
        setCount(count-1);
        if(count == 0){
            setCount(photos.length-1)
        }
    }


    return (
    <div className='container'>
        <div className='w-full h-auto flex justify-between mobile'>

            <div className='boxr'>
                <div>
                    <div className='text-3xl font-semibold pb-12 font-serif'>
                        Confirm & pay
                    </div>
                    <div className='flex border rounded-lg px-3 py-3 justify-between'>
                        <div>
                            <h2 className='text-xs font-bold'>Free cancellation</h2>
                            <p className='text-gray-500 text-xs'>Tickets can be cancelled by 13th December, 2022.</p>
                        </div>
                        <div>
                            <img src={info} alt='info' className='w-3 h-3'/>
                        </div>
                    </div>
                </div>
                <div className='pt-12'>
                    <div>
                        <h3 className='font-semibold'>Enter your details</h3>
                        <p className='text-xs text-gray-500 pt-2'>We'll be sending your tickets to the details below. Booking for a friend? Add details.</p>
                    </div>
                    <div className='pt-8'>
                        <form>
                            <div>
                                <div className='relative'>
                                    <input placeholder="Full Name *" required class="w-full border px-2 py-2 rounded-lg" />
                                </div>
                                <div className='grid grid-cols-2 pt-4 gridmanage relative'>
                                    <select className='border rounded-lg mr-3 country'>
                                        <option><img src={earth} alt='earth'/> Country code *</option>
                                        <option>+91</option>
                                        <option>+00</option>
                                        <option>+45</option>
                                    </select>
                                    
                                    <input  placeholder='Phone No. *' className='border px-2 py-2 rounded-lg'/>
                                    
                                    <input  placeholder='Email *' className='border px-2 py-2 rounded-lg mt-4 mr-3 email'/>
                                    
                                    <input  placeholder='Confirm email *' className='border px-2 py-2 rounded-lg mt-4'/>
                                    
                                </div>
                                <hr className='mt-4'/>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <div className='pt-8'>
                        <h3 className='font-semibold'>Additional information</h3>
                        <p className='text-xs text-gray-500 pt-2'>We need a few more details to complete your reservation.</p>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 pt-4 gridmanage'>
                            <input placeholder='Input label *'
                                required
                                className='border px-2 py-2 rounded-lg mt-2 mr-3 email xyz'
                            />
                            <select className='border rounded-lg px-2 mt-2 country1' placeholder='Select *'>
                                <option><img src={earth} alt='earth'/>Select *</option>
                                <option>+91</option>
                                <option>+00</option>
                                <option>+45</option>
                            </select>
                        </div>
                        <div className='mt-3'>
                            <select className='w-full border rounded-lg px-2 py-2'>
                                <option>Multiselect *</option>
                                <option>+00</option>
                                <option>+44</option>
                                <option>+45</option>
                            </select>
                        </div>
                        
                    </div>
                    <hr  className='mt-4'/>
                </div>
                <div className='pt-8'>
                    <div>
                        <div className='text-lg font-semibold'>Select your mode of payment</div>
                        <div className='text-gray-500 text-xs mt-2'>Payments with Tickete are secure and encrypted.</div>
                    </div>
                    <div className='mt-8 w-full border rounded-lg h-auto'>
                        <div className='flex justify-between'>
                            <div className='pt-4 font-bold text-sm pl-2'><img src={calender} alt='calender' className='w-3 h-3 inline mb-1'/> Credit & debit card</div>
                            <div className='mt-3 mr-3'><img src={circle} alt='cirlce' className='w-3 h-3 inline'/></div>
                        </div>
                        <div className='flex justify-start pt-2 pl-2'>
                            <img src={visa} alt='visa' className='h-4 w-6 border rounded-md'/>
                            <img src={mastercard} alt='mastercard' className='h-4 w-6 border rounded-md'/>
                            <img src={amex} alt='rupay' className='h-4 w-6 border rounded-md'/>
                        </div>

                        <div className='grid grid-cols-2 pt-4 gridmanage'>
                            <input  placeholder='Name on card *' className='border px-2 py-2 rounded-lg mt-4 mr-3 ml-2 abd'/>
                            <input  placeholder='card number *' className='border px-2 py-2 rounded-lg mt-4 mr-2 abd'/>
                            <input  placeholder='Expiry date *' className='border px-2 py-2 rounded-lg mt-4 mr-3 ml-2 abd'/>
                            <input  placeholder='<CVV/CVC> *' className='border px-2 py-2 rounded-lg mt-4 mr-2 abd'/>
                        </div>
                        <hr className='mt-6 ml-2 mr-2'></hr>
                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <div className='text-md font-semibold ml-2'>Total payable : $XXX</div>
                                <div className='text-white text-xs mt-1 bg-green-600 w-[25%] mr-4 pl-2 border rounded-xl'>You save &lt;price&gt;</div>
                            </div>
                        </div>
                        <div className='text-gray-500 text-xs pl-2 mt-2'>You will be charged in AED <img src={info} className='h-3 w-3 inline ml-2 mb-1'/></div>
                        <div className='text-xs text-gray-500 px-2 mt-4'>By clicking "confirm & pay", you agree to <span className='text-blue-400 cursor-pointer'>Tickete's general terms and conditions</span> and <span className='text-blue-400 cursor-pointer'>cancellation policy.</span></div>

                        <div className='bg-black text-white text-sm py-2 pl-24 ml-[8%] mr-[8%] mb-2 mt-4 rounded-lg cursor-pointer'>
                        <svg className='inline' width="18" height="18" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.375 6.87512H15.625V4.81262C15.625 3.7186 15.1904 2.66939 14.4168 1.89581C13.6432 1.12222 12.594 0.687622 11.5 0.687622C10.406 0.687622 9.35677 1.12222 8.58318 1.89581C7.8096 2.66939 7.375 3.7186 7.375 4.81262V6.87512H4.625C4.26033 6.87512 3.91059 7.01999 3.65273 7.27785C3.39487 7.53571 3.25 7.88545 3.25 8.25012V17.8751C3.25 18.2398 3.39487 18.5895 3.65273 18.8474C3.91059 19.1053 4.26033 19.2501 4.625 19.2501H18.375C18.7397 19.2501 19.0894 19.1053 19.3473 18.8474C19.6051 18.5895 19.75 18.2398 19.75 17.8751V8.25012C19.75 7.88545 19.6051 7.53571 19.3473 7.27785C19.0894 7.01999 18.7397 6.87512 18.375 6.87512ZM11.5 14.0939C11.296 14.0939 11.0967 14.0334 10.9271 13.9201C10.7575 13.8068 10.6253 13.6457 10.5472 13.4573C10.4692 13.2688 10.4488 13.0615 10.4886 12.8614C10.5284 12.6614 10.6266 12.4776 10.7708 12.3334C10.915 12.1892 11.0988 12.091 11.2988 12.0512C11.4989 12.0114 11.7062 12.0318 11.8946 12.1099C12.0831 12.1879 12.2441 12.3201 12.3575 12.4897C12.4708 12.6593 12.5312 12.8587 12.5312 13.0626C12.5312 13.3361 12.4226 13.5984 12.2292 13.7918C12.0358 13.9852 11.7735 14.0939 11.5 14.0939ZM14.25 6.87512H8.75V4.81262C8.75 4.08328 9.03973 3.3838 9.55546 2.86808C10.0712 2.35235 10.7707 2.06262 11.5 2.06262C12.2293 2.06262 12.9288 2.35235 13.4445 2.86808C13.9603 3.3838 14.25 4.08328 14.25 4.81262V6.87512Z" fill="#EDEEF0"/>
                        </svg>

                        <button type='submit' className='ml-2'>Confirm & pay</button>
                    </div>
                    </div>
                    
                    <div className='mt-4'>
                        <div className='flex justify-between border rounded-md py-2'>
                            <div className='mx-2 text-sm text-gray-500 font-semibold'><img src={applepay} alt='apple-pay' className='w-5 h-5 inline border rounded-md'/> Coming Soon</div>
                            <div className='w-4 h-4 border rounded-2xl bg-gray-200 mt-1 mx-2'></div>
                        </div>
                        <div className='flex justify-between border rounded-md py-2 mt-2'>
                            <div className='mx-2 text-sm text-gray-500 font-semibold'><img src={googlepay} alt='google-pay' className='w-5 h-5 inline border rounded-md'/> Coming Soon</div>
                            <div className='w-4 h-4 border rounded-2xl bg-gray-200 mt-1 mx-2'></div>
                        </div>
                    </div>
                    <hr className='mt-4'></hr>
                    
                    <div className='mt-4'>
                        <div className='text-md font-semibold ml-2'>Total payable : $XXX</div>
                        {/* <hr className='mt-1'></hr> */}
                        <div className='border rounded-lg px-2 py-2 mt-4'>
                            <div className='text-gray-500 text-xs pl-2 mt-2'><img src={info} className='h-3 w-3 inline ml-2 mb-1'/> You will be charged in AED</div>
                            <div className='text-xs text-gray-500 pl-6'>The price shown here is in US Dollar (USD) as per the current conversion rate. You will be charged in United Arab Emirates (AED).</div>
                        </div>
                    </div>


                </div>
            </div>
            <div className='boxl'>
                {photos?.map((photo) => (
                    photo.number === count && 
                    <div className=''>
                        <div key={photo.image} className='logos'>
                            <img src={photo.image} alt='prithvi' className='border rounded-lg' />
                        </div>
                        <div className='arrow'>
                            <div className='w-5 h-5 bg-white flex justify-center border rounded-xl cursor-pointer'
                                onClick={handleCountDown}
                                ><img src={chevronleft} className='w-1.5'/></div>
                            <div className='w-5 h-5 bg-white flex justify-center border rounded-xl cursor-pointer'
                                onClick={handleCountUp}
                                ><img src={chevronright} className='w-1.5'/></div>
                        </div>
                    
                    </div>
                ))}
                <div className='pl-2'>
                    <div className='text-gray-500 text-sm'><img src={star} alt='star' className='w-3 h-3 inline pb-1'/> <b>4.9</b> (4.5k) . &lt;category&gt;</div>        
                    <div className='pl-1 font-bold text-sm mt-1'>Amsterdam open boat canal cruise Live <br></br> Guiye - from Anne Frank Housef </div>  
                    <div className='pl-1 font-semibold text-sm mt-2'><img src={ticket} alt='ticket' className='w-3 h-3 inline'/> &lt; ticket type - varient &gt;</div> 
                    <div className='pl-1 font-semibold text-sm mt-2'><img src={calender} alt='calender' className='w-3 h-3 inline'/> &lt; day &gt;, &lt; month &gt; &lt; date &gt;</div>     
                    <div className='pl-5 text-xs mt-2 text-gray-500'>Duration :  &lt;duration&gt; </div>
                    <div className='pl-2 font-semibold text-sm mt-2'><img src={clock} className='w-3 h-3 inline mb-0.5'/>  &lt;time&gt;</div>
                    <div className='text-gray-500 text-xs pl-5 mt-2'> Operating hours &lt;time&gt; to &lt;time&gt; </div>
                    <div className='pl-2 font-semibold text-sm'><img src={userGroup} alt='usergroup' className='w-3 h-3 inline mb-1'/> 5 guests</div>
                </div>
                <hr className='dashed-line'></hr>
                <div className='underline pl-4 text-light text-sm flex justify-between'>
                    <div>view payment summary</div>
                    <div className='pt-1 pr-4'><img src={add} alt='add' className='w-4 h-4'/></div>
                </div>
                <hr className='dashed1-line'></hr>
                <div>
                    <div className='flex justify-between mt-2'>
                        <div className='text-md font-semibold ml-2'>Total payable</div>
                        <div className='text-md font-semibold mr-2'>$XXX</div>
                    </div>
                    <div className='text-green-500 text-xs mt-1 bg-green-200 w-[35%] ml-4 pl-2 border rounded-xl'>You saved &lt;price&gt;</div>
                    <div className='text-gray-500 text-xs pl-2 mt-4'>You will be charged in AED <img src={info} className='h-3 w-3 inline ml-2 mb-1'/></div>
                    <div className='text-xs text-gray-500 px-2 mt-2'>By clicking "confirm & pay", you agree to <span className='text-blue-400 cursor-pointer'>Tickete's general terms and conditions</span> and <span className='text-blue-400 cursor-pointer'>cancellation policy.</span></div>
                    <div className='bg-black text-white text-sm py-2 pl-24 ml-[8%] mr-[8%] mb-2 mt-4 rounded-lg cursor-pointer'>
                        <svg className='inline' width="18" height="18" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.375 6.87512H15.625V4.81262C15.625 3.7186 15.1904 2.66939 14.4168 1.89581C13.6432 1.12222 12.594 0.687622 11.5 0.687622C10.406 0.687622 9.35677 1.12222 8.58318 1.89581C7.8096 2.66939 7.375 3.7186 7.375 4.81262V6.87512H4.625C4.26033 6.87512 3.91059 7.01999 3.65273 7.27785C3.39487 7.53571 3.25 7.88545 3.25 8.25012V17.8751C3.25 18.2398 3.39487 18.5895 3.65273 18.8474C3.91059 19.1053 4.26033 19.2501 4.625 19.2501H18.375C18.7397 19.2501 19.0894 19.1053 19.3473 18.8474C19.6051 18.5895 19.75 18.2398 19.75 17.8751V8.25012C19.75 7.88545 19.6051 7.53571 19.3473 7.27785C19.0894 7.01999 18.7397 6.87512 18.375 6.87512ZM11.5 14.0939C11.296 14.0939 11.0967 14.0334 10.9271 13.9201C10.7575 13.8068 10.6253 13.6457 10.5472 13.4573C10.4692 13.2688 10.4488 13.0615 10.4886 12.8614C10.5284 12.6614 10.6266 12.4776 10.7708 12.3334C10.915 12.1892 11.0988 12.091 11.2988 12.0512C11.4989 12.0114 11.7062 12.0318 11.8946 12.1099C12.0831 12.1879 12.2441 12.3201 12.3575 12.4897C12.4708 12.6593 12.5312 12.8587 12.5312 13.0626C12.5312 13.3361 12.4226 13.5984 12.2292 13.7918C12.0358 13.9852 11.7735 14.0939 11.5 14.0939ZM14.25 6.87512H8.75V4.81262C8.75 4.08328 9.03973 3.3838 9.55546 2.86808C10.0712 2.35235 10.7707 2.06262 11.5 2.06262C12.2293 2.06262 12.9288 2.35235 13.4445 2.86808C13.9603 3.3838 14.25 4.08328 14.25 4.81262V6.87512Z" fill="#EDEEF0"/>
                        </svg>

                        <button type='submit' className='ml-2'>Confirm & pay</button>
                    </div>
                </div>
            </div>
        </div>
        <hr className='mt-4 ml-[10%] mr-[10%]'></hr>
        <div className='h-auto w-full flex justify-around bigbox'>
            <div className='boxdl'>
                <div className='text-lg font-semibold pt-2'>Frequently asked questions</div>
                <div className='text-sm text-gray-500'>Here are some of our most added questions.</div>
                <div className='box-cartoon flex justify-between'>
                    <div className='font-semibold pl-2 pt-2'>
                        <div>Still need help?</div>
                        <div>We are here for you.</div>
                        <div className='bg-black border rounded-lg py-1 mt-1 px-1 w-[104px] cursor-pointer text-white'>Chat with us</div>
                    </div>
                    <div className='pt-2 pr-4'>
                        <svg width="158" height="100" viewBox="0 0 158 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M105.765 62.2215L108.743 61.6963L110.166 67.5876L106.443 68.2441L105.765 62.2215Z" fill="black"/>
                            <rect x="73.3073" y="74.0867" width="71.0741" height="27.2199" rx="10.7143" transform="rotate(-10 73.3073 74.0867)" fill="black"/>
                            <path d="M101.686 69.0829L108.305 67.9159L105.326 72.1701C104.413 73.4732 102.381 73.0226 102.104 71.4559L101.686 69.0829Z" fill="white"/>
                            <path d="M114.923 66.7489L108.305 67.9159L112.559 70.8947C113.862 71.8072 115.618 70.6886 115.342 69.1219L114.923 66.7489Z" fill="white"/>
                            <path d="M130.356 82.4227C130.564 82.3861 130.763 82.3295 130.951 82.2535C131.144 82.1767 131.333 82.089 131.517 81.9922L131.767 83.4111C131.578 83.5383 131.339 83.658 131.044 83.7711C130.755 83.8864 130.432 83.9762 130.074 84.0393C129.659 84.1126 129.271 84.1117 128.915 84.0375C128.562 83.958 128.261 83.7685 128.011 83.4696C127.764 83.1651 127.587 82.713 127.482 82.1132L126.887 78.7428L126.007 79.0762L125.754 77.6446L126.637 77.3223L126.373 75.8251L128.218 75.1535L128.482 76.6523L130.376 75.9621L130.628 77.3938L128.734 78.084L129.385 81.7759C129.432 82.043 129.543 82.2297 129.716 82.336C129.893 82.4385 130.107 82.4667 130.356 82.4227Z" fill="white" stroke="white" stroke-width="0.892857" stroke-linejoin="round"/>
                            <ellipse cx="80.8025" cy="40.1349" rx="12.0977" ry="15.1222" transform="rotate(-10 80.8025 40.1349)" fill="black"/>
                            <path d="M126.186 24.4548C123.648 10.0613 111.414 0.187631 98.8592 2.40132C86.3048 4.615 78.1849 18.0778 80.7228 32.4713" stroke="black" stroke-width="3.57143"/>
                            <circle cx="102.724" cy="36.2695" r="26.4638" transform="rotate(-10 102.724 36.2695)" fill="#08E8DE"/>
                            <ellipse cx="128.786" cy="31.6742" rx="12.0977" ry="15.1222" transform="rotate(-10 128.786 31.6742)" fill="black"/>
                            <path d="M109.391 45.3146C108.238 42.9508 105.387 41.9692 103.023 43.1221C100.659 44.275 99.6777 47.1258 100.831 49.4896C101.984 51.8533 104.834 52.8349 107.198 51.6821C109.562 50.5292 110.543 47.6784 109.391 45.3146ZM122.301 38.0243L104.719 46.5996L105.502 48.2046L123.084 39.6293L122.301 38.0243Z" fill="black"/>
                            <path d="M88.1893 26.8034C88.1893 26.8034 88.4672 40.4562 96.384 39.0602C104.301 37.6643 100.237 24.6791 100.237 24.6791" stroke="black" stroke-width="3.57143"/>
                            <circle cx="49.4787" cy="33.1229" r="11.5512" transform="rotate(37.6789 49.4787 33.1229)" fill="#FF7DF3"/>
                            <path d="M36.5414 24.1405C36.2217 23.4779 36.7957 22.7346 37.5177 22.8765L43.0068 23.9548L38.9723 29.1788L36.5414 24.1405Z" fill="#FF7DF3"/>
                            <path d="M8.92384 69.0059L22.1653 55.4847L67.5372 51.5152C71.4671 51.1714 74.9316 54.0785 75.2754 58.0083L77.1789 79.7653C77.5228 83.6952 74.6157 87.1597 70.6858 87.5035L18.1147 92.1029C14.1848 92.4467 10.7203 89.5397 10.3765 85.6098L8.92384 69.0059Z" fill="#FFF000"/>
                            <path d="M20.1192 55.6637L20.57 60.8168C20.9139 64.7467 18.0068 68.2112 14.0769 68.555L8.92384 69.0059L20.1192 55.6637Z" fill="#FFAA1D"/>
                            <path d="M80.3617 62.0659C81.046 62.3363 81.1278 63.2718 80.5009 63.657L75.7653 66.5664L75.1929 60.023L80.3617 62.0659Z" fill="#FFF000"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='boxdr'>
                <div>
                    {content.map((contentItem, index) => (
                        <div key={index} className='flex border rounded-lg px-2 py-2 mt-2'>
                            <svg onClick={() => handleExpand(index)} className='mt-1 ml-2' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d={expandIndex === index ? "M19.546 17.9543C19.7573 18.1656 19.876 18.4523 19.876 18.7512C19.876 19.05 19.7573 19.3367 19.546 19.548C19.3346 19.7594 19.048 19.8781 18.7491 19.8781C18.4502 19.8781 18.1636 19.7594 17.9522 19.548L12 13.594L6.04596 19.5462C5.83461 19.7575 5.54797 19.8762 5.24908 19.8762C4.9502 19.8762 4.66355 19.7575 4.45221 19.5462C4.24086 19.3348 4.12213 19.0482 4.12213 18.7493C4.12213 18.4504 4.24086 18.1638 4.45221 17.9524L10.4063 12.0002L4.45408 6.04616C4.24274 5.83482 4.12401 5.54817 4.12401 5.24929C4.12401 4.9504 4.24274 4.66376 4.45408 4.45241C4.66543 4.24107 4.95207 4.12234 5.25096 4.12234C5.54984 4.12234 5.83649 4.24107 6.04783 4.45241L12 10.4065L17.9541 4.45148C18.1654 4.24013 18.4521 4.1214 18.751 4.1214C19.0498 4.1214 19.3365 4.24013 19.5478 4.45148C19.7592 4.66282 19.8779 4.94946 19.8779 5.24835C19.8779 5.54724 19.7592 5.83388 19.5478 6.04523L13.5938 12.0002L19.546 17.9543Z" : "M21.375 12.0002C21.375 12.2986 21.2565 12.5848 21.0455 12.7957C20.8345 13.0067 20.5484 13.1252 20.25 13.1252H13.125V20.2502C13.125 20.5486 13.0065 20.8348 12.7955 21.0457C12.5845 21.2567 12.2984 21.3752 12 21.3752C11.7016 21.3752 11.4155 21.2567 11.2045 21.0457C10.9935 20.8348 10.875 20.5486 10.875 20.2502V13.1252H3.75C3.45163 13.1252 3.16548 13.0067 2.9545 12.7957C2.74353 12.5848 2.625 12.2986 2.625 12.0002C2.625 11.7019 2.74353 11.4157 2.9545 11.2047C3.16548 10.9938 3.45163 10.8752 3.75 10.8752H10.875V3.75024C10.875 3.45188 10.9935 3.16573 11.2045 2.95475C11.4155 2.74377 11.7016 2.62524 12 2.62524C12.2984 2.62524 12.5845 2.74377 12.7955 2.95475C13.0065 3.16573 13.125 3.45188 13.125 3.75024V10.8752H20.25C20.5484 10.8752 20.8345 10.9938 21.0455 11.2047C21.2565 11.4157 21.375 11.7019 21.375 12.0002Z"} fill="#60646C"/>
                            </svg>
                            <div className='flex flex-col'>
                                <div className='pl-4 text-md font-semibold'>{contentItem.heading}</div>
                                <div className='text-sm text-gray-500'>
                                    {expandIndex === index && <div className='pl-4 pt-4'>{contentItem.hidden}</div>}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <hr className='mt-8'></hr>
        <footer className='w-full h-40 bg-black mt-8'>
            <div className='flex flex-col'>
                <div className='text-white font-bold text-2xl pl-6 pt-10'>Tickete</div>
                
                <div className='pt-10'>
                    <hr></hr>
                    <div className='text-white flex justify-start text-xs items-center pt-3'>
                        <div className='pl-6'>&middot; Made with love</div>
                        <div className='pl-2'>&middot; Privacy policy</div>
                        <div className='pl-2'>&middot; Terms of usage</div>
                        <div className='pl-2'>&middot; Cancellation policy</div>
                        <div className='pl-2'>&middot; Sitemap</div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Content