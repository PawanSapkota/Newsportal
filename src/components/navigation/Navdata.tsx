
import { BiChevronDown } from "react-icons/bi"



export const NavData = [
    {
        path: '/',
        title: 'Home',
        
    },
    {
        path: '/archive',
        title: 'Archive',
       
       


    }, {
        path: '/category',
        title: 'Category ',
        

    },
    {
        path: '/posttype',
        title: 'Post Type',      
        icon: <BiChevronDown className="text-white  text-xl " />,

        sub: [
            {
                path: '/standard',
                title: "Standard Post"

            },
            {
                path: '/video',
                title: " Video Post"

            },
            {
                path: '/image',
                title: " Image Post"

            }
        ]



    },

    {
        path: '/about',
        title: 'About',
       

      
    },
    
    {
        path: '/contact',
        title: 'Contact',
    },
    
   

]