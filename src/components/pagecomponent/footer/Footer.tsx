import React from 'react'
import { AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { BiGlobe, BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='bg-bgprimary mt-4 relative'>
    <div className='w-10/12 mx-auto h-screen grid grid-cols-4 gap-4 items-center justify-center'>
        <div className="flex flex-col  h-fit gap-4 ">
            <h1 className="text-white text-xl">Top Products</h1>
            <div className="mt-4 flex flex-col gap-4">
              <p className="text-sm font-thin text-gray-400">Manage Website</p>
              <p className="text-sm text-gray-400">Manage Reputation</p>
              <p className="text-sm text-gray-400">Power Tools</p>
              <p className="text-sm text-gray-400">Marketing Services</p>
            </div>
        </div>

        <div className="flex flex-col   gap-4 ">
            <h1 className="text-white text-xl">Quick Links</h1>
            <div className="mt-4 flex flex-col gap-4">
              <p className="text-sm font-thin text-gray-400">Jobs</p>
              <p className="text-sm text-gray-400">Brand Assets</p>
              <p className="text-sm text-gray-400">Investor Relation</p>
              <p className="text-sm text-gray-400">Terms and Condition</p>
            </div>
          </div>

          <div className="flex flex-col   gap-4 ">
            <h1 className="text-white text-xl">Features</h1>
            <div className="mt-4 flex flex-col gap-4">
              <p className="text-sm font-thin text-gray-400">Jobs</p>
              <p className="text-sm text-gray-400">Brand Assets</p>
              <p className="text-sm text-gray-400">Investor Relation</p>
              <p className="text-sm text-gray-400">Terms and Condition</p>
            </div>
          </div>

          <div className="flex flex-col  gap-4 ">
            <h1 className="text-white text-xl">Resources</h1>
            <div className="mt-4 flex flex-col gap-4">
              <p className="text-sm font-thin text-gray-400">Guides </p>
              <p className="text-sm text-gray-400"> Research</p>
              <p className="text-sm text-gray-400">Experts</p>
              <p className="text-sm text-gray-400">Agencies</p>
            </div>
          </div>

    </div>
    <div className="w-10/12 mx-auto absolute left-20 bottom-20 flex justify-between">
          <h1 className="text-white text-sm">
            Copyright ©2023 All rights reserved | This template is made with by
            <span className='text-badge ml-1'>Colorlib</span>
            
          </h1>
          <div className='flex gap-4'>
            <BiLogoFacebook className='text-white bg-gray-600 w-8 h-8   p-2'/>
            <AiOutlineTwitter className='text-white bg-gray-600 w-8 h-8   p-2 '/>
            <BiGlobe className='text-white bg-gray-600 w-8 h-8   p-2 '/>
            <BiLogoInstagram className='text-white bg-gray-600 w-8 h-8   p-2 '/>


          </div>
    </div>


    </div>
  )
}

export default Footer