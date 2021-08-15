import React from 'react'
import { Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const FavCities = () => {

  const cities = useSelector(state => state.cities.cities)
  const cityLoading = useSelector(state => state.cities.loading)
   if (cityLoading) return <Spinner/>

    return (
      
        <div className="card flex bg-card  ">

             <h3 className=" ml-16  my-8 "  >Recommended Cities</h3>
            
            <div className="flex flex-row ml-16 space-x-32">
                {/* card */}
                <div class="rounded overflow-hidden shadow-lg w-96">
      <img className=" w-96 h-56 " src="https://www.bmc-switzerland.com/media/catalog/category/BMC_Parent_Category_Header_Image_Mountain_All_Mountain_1.jpg" alt="Mountain"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Mountain</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>

      </div>
    </div>



    
                {/* card */}
                <div class="rounded overflow-hidden shadow-lg w-96">
      <img className=" w-96 h-56 " src="https://www.bmc-switzerland.com/media/catalog/category/BMC_Parent_Category_Header_Image_Mountain_All_Mountain_1.jpg" alt="Mountain"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Mountain</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>

      </div>
    </div>

                {/* card */}
                <div class="rounded overflow-hidden shadow-lg w-96">
      <img className=" w-96 h-56 " src="https://www.bmc-switzerland.com/media/catalog/category/BMC_Parent_Category_Header_Image_Mountain_All_Mountain_1.jpg" alt="Mountain"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Mountain</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>

      </div>
    </div>
    </div>   
    
        </div>
    )
}

export default FavCities
