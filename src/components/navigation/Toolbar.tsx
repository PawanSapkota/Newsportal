import React from 'react'
import Contact from './Contact'
import Ads from './Ads'
import Navbar from './Navbar'

type Props = {}

const Toolbar = (props: Props) => {
  return (
    <div>
        <Contact/>
        <Ads/>
        <Navbar/>
    </div>
  )
}
export default Toolbar