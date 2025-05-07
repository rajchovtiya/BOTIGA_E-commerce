import React, { useEffect } from 'react';

const BlogDetails = () => {
    useEffect(() => {
        const deta = async () => {
            let detas = await fetch("./deta/Blog_DetailsDeta.json")
            let bolgDetel = await detas.json()
            console.log(bolgDetel)

        }
        deta()
    }, [])

    return (
        <div className='mt-36'>


            <div className='flex items-center justify-center flex-col'>
                <p className='text-gray-600'>July 18,2021 Vlad</p>
                <h1 className='text-4xl font-normal mt-3'>Desirable outcome that your customers get from using your product</h1>
                <div className='flex items-center justify-center flex-col mt-14 max-w-[900px]' >
                    <img src="/img/blogdetils1.webp" alt="" className='w-full' />
                    <div className='flex items-center justify-center w-[80%]'>
                        <p className='flex items-center justify-center w-full mt-8 text-[16px] text-gray-700 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit a porttitor mattis. Pellentesque sit amet fringilla mauris. Cras eu faucibus lorem. Integer mattis dolor eu feugiat finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ut metus ac nunc tristique pellentesque vel auctor libero.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center flex-col mt-14 max-w-[900px]'>
                    <img src="/img/blogdetils2.png" alt="" />
                    <div className='w-[80%] mt-8 '>
                        <h4 className='text-left text-3xl font-normal'>Just a regular heading</h4>
                        <p className='flex items-center justify-center mt-4 w-full text-[16px] text-gray-700 font-normal'>Maecenas in est at neque feugiat mattis. Praesent vel pellentesque lorem. Fusce sit amet sollicitudin metus. Nullam vitae purus imperdiet, consequat eros id, rhoncus orci. Sed facilisis convallis lectus a porta. Sed magna dui, dignissim id felis vitae, consectetur consectetur tellus. Vestibulum congue tellus eu ipsum finibus, id vulputate mi dignissim.</p>
                    </div>

                </div>
                <div className='flex items-center justify-center flex-col mt-14 max-w-[900px]' >
                    <div className='flex items-center justify-between gap-4'>
                        <img src="img/blogdetils3.png" alt="" className='max-w-[445px]' />
                        <img src="img/blogdetils4.png" alt="" className='max-w-[445px]' />
                    </div>
                    <div className='flex items-center justify-center w-[81%]'>
                        <p className='flex items-center justify-center w-full mt-8 text-[16px] text-gray-700 font-normal'>Nulla facilisi. Praesent diam leo, dapibus ultricies porta in, tincidunt eget augue. Curabitur rutrum maximus lacus, ut scelerisque ipsum porttitor et. In non fringilla justo. Pellentesque venenatis suscipit lacus. Sed non laoreet elit. Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi. Etiam elementum, massa et fermentum viverra, odio ipsum gravida metus, at interdum tellus est eget mi.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center flex-col mt-14 max-w-[900px]'>
                    <h2 className='w-[71%] text-3xl font-medium'>” Etiam convallis faucibus elit, a viverra elit pellentesque eu. Maecenas tincidunt diam eu efficitur tincidunt. Morbi semper ipsum sit amet nibh maximus, sit amet tincidunt odio pulvinar. </h2>
                    <p className='w-[71%] text-left mt-9 text-gray-600 tracking-[1.5px] text-[14px]'>ALBERT EINTSTEIN</p>
                </div>
                <div className='flex items-center justify-center flex-col mt-9 max-w-[900px]' >
                    <div className='flex items-center justify-center w-[80%]'>
                        <p className='flex items-center justify-center w-full  text-[16px] text-gray-700 font-normal'>Praesent nulla facilisi. Praesent diam leo, dapibus ultricies porta in, tincidunt eget augue. Curabitur rutrum maximus lacus, ut scelerisque ipsum porttitor et. In non fringilla justo. Pellentesque venenatis suscipit lacus. Sed non laoreet elit. Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi. Etiam elementum, massa et fermentum viverra, odio ipsum gravida metus, at interdum tellus est eget mi.</p>
                    </div>
                </div>
                <hr className=' mt-14 w-[100%] max-w-[1100px]' />
            </div>
            <div className='w-[100%]  flex  mt-10 items-center justify-center flex-col'>
                <div className='w-full h-full  max-w-[1100px] '>
                    <p className='text-left cursor-pointer hover:opacity-70 ease-in duration-300 text-gray-600 font-normal'><span>Previous : </span><span>Reason people use your product</span></p>
                    <form action="#" className=' w-full bg-[#f1f1f1] p-10 py-16 mt-14'>
                        <h1 className='text-3xl  font-light tracking-[1.5px] '>Leave a Reply</h1>
                        <p className='mt-5 font-light'>Your email address will not be published. Required fields are marked <span className='text-red-600'> *</span></p>
                        <p className="text-[16px] opacity-80 flex flex-col mt-7">
                            <label for="comment">Comment <span className='text-red-500'>*</span></label>
                            <textarea id="comment" name="comment" cols="45" rows="9" maxlength="65525" required="" className='bg-transparent p-5 border mt-2 border-black'></textarea>
                        </p>
                        <p className="text-[16px] opacity-80 flex flex-col mt-7">
                            <label for="comment">Name <span className='text-red-500'>*</span></label>
                            <input id='comment' type="text" className='w-full h-[55px] bg-transparent border border-black'/>
                        </p>
                        <p className="text-[16px] opacity-80 flex flex-col mt-7">
                            <label for="comment">Email <span className='text-red-500'>*</span></label>
                            <input id='comment' type="email" className='w-full h-[55px] bg-transparent border border-black'/>
                        </p>
                        <p className="text-[16px] opacity-80 flex flex-col mt-7">
                            <label for="comment">Website  <span className='text-red-500'>*</span></label>
                            <input id='comment' type="text" className='w-full h-[55px] bg-transparent border border-black'/>
                        </p>


                    </form>

                </div>
            </div>


        </div>
    );
}

export default BlogDetails;
