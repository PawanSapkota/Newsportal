import React from 'react'
import Relevantstories from './Relevantstories'
import Popularpost from './Popularpost'
import Latestnews from './Latestnews'
import Smallergrid from './Smallergrid'

const Section = () => {
  return (
    <div className="grid grid-cols-12 gap-4 w-10/12 mx-auto mt-4">
      <div className="col-span-8">
        <Latestnews/>
        <Popularpost />
        <Relevantstories />
      </div>
      <div className="col-span-4 ">
        <Smallergrid />
      </div>
    </div>
  )
}

export default Section