import React from 'react'

const GuideDetail = () => {
    const guide = {
        user:{username:"amjad",
        firstname:"amjad",
        lastname:"amjad",
        email:"@c.com",
        phone:"00000000",
        gender:"male",
        image:
        "https://149351115.v2.pressablecdn.com/wp-content/uploads/2020/02/iStock-1163542789-945x630.jpg",
    },
    city: "madba",
    price: 5,
    maxsize: 5,
    rating: "⭐⭐⭐⭐⭐",
    // rating: 4,

    discription:
      "hghg khgbj k jhvd lllll knf cdsp imm mmfmuu ihfdkn jhvsuyd dhdwlksd dsldjnmb m powdmn dmjb  lllll knf cdsp imm mmfmuu ihfdkn lllll knf cdsp imm mmfmuu isp imm mmfmuu ihfdknugdyghdb m kwndjk  m mlm mmmml lllll knf cdsp imm mmfmuu ihfdkn  ihfdknugdyghdb m kwndjk  m mlm mmmml lllll knf cdsp imm mmfmuu  ihfdknugdyghdb m kwndjk  m mlm mmmml lllll knf cdsp imm mmfmuu",
    notAvailabeDates: [],
  
    }
    return (
        <>
             <div className="card  flex flex-row profile-card ">
        <div className="rounded overflow-hidden shadow-lg w-96 border-yellow-400  border-1 ml-4 mt-3 card1-p ">
          <img
            className=" w-96 h-56 rounded mx-auto "
            // src={guide ? guide.user.image:""}
            alt="Mountain"
          />
          <div className="px-6 py-4 text-center">
            <div>
              username:{" "}
              <p className=" font-semibold text-xl mb-3">
              @username
              </p>
            </div>

            <div>
              fullname:{" "}
              <p className=" font-semibold text-xl mb-3">{`${guide.user.firstname}  ${guide.user.lastname}`}</p>
            </div>
            <div>
              e-mail:{" "}
              <p className=" font-semibold text-xl mb-3">{guide.user.email}</p>
            </div>
            {guide.user.phone && (
              <div>
                phone:
                <p className=" font-semibold text-xl mb-3">
                  {guide.user.phone}
                </p>
              </div>
            )}
            {guide.user.gender && (
              <div>
                gender:
                <p className=" font-semibold text-xl mb-3">
                  {guide.user.gender}
                </p>
              </div>
            )}
          </div>
         
        </div>
          {/* card2 */}
          {(guide.city || guide.price || guide.maxsize || guide.rating) && (
          <div
            className="rounded overflow-hidden shadow-lg border-yellow-400  border-1 ml-4 mt-3 guide-card
     w-44 text-center  "
          >
            <div className="px-6 py-4 ">
              {guide.city && (
                <div>
                  city:
                  <p className=" font-semibold text-xl mb-2">{guide.city}</p>
                </div>
              )}

              {guide.price && (
                <div>
                  price/person:
                  <p className=" font-semibold text-xl mb-2">{guide.price} $</p>
                </div>
              )}

              {guide.maxsize && (
                <div>
                  max group size:
                  <p className=" font-semibold text-xl mb-2">{guide.maxsize}</p>
                </div>
              )}

              {guide.rating && (
                <div>
                  your rating:
                  <p className=" font-semibold text-xl mb-2">{guide.rating}</p>
                </div>
              )}
            </div>
          </div>
        )}

        </div>
        
        </>
    )
}

export default GuideDetail
