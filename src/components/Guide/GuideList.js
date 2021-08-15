// still under work


import React from 'react'
import { useLocation } from 'react-router'
import GuideItem from './GuideItem'

const GuideList = () => {
    const location = useLocation()
    return (
        <div>
   <GuideItem/>
   
        </div>
    )
}

export default GuideList

