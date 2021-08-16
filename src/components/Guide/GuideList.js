// still under work


import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import GuideItem from './GuideItem'

const GuideList = () => {
    const foundGuides  = useSelector(state => state.guides.foundguides)
    const guideList= foundGuides.map(guide=> <GuideItem guide={guide} key={guide._id} />)
    return (
        <div>
            {guideList}
   
        </div>
    )
}

export default GuideList

