import React from 'react'
import { footerBottomItem } from '../constants'

function FooterBot() {
  return (
    <div className="w-full bg-black text-gray-400 py-8">
      <div className="max-w-7xl mx-auto p-2">
        <div className="w-full grid grid-cols-7 gap-4 place-content-center max-lg:grid-cols-3 max-lg:p-2 ">
          {footerBottomItem.map((item) => {
            return (
              <div
                key={item._id}
                className="tracking-wide w-full overflow-hidden"
              >
                <h3 className="font-bold text-sml ">{item.title}</h3>
                <p className="text-sm cursor-pointer">{item.des}</p>
              </div>
            )
          })}
        </div>
      </div>
      <p className="text-center border-2 border-gray-500 p-2">
        Developed by Tumelo Khanye
      </p>
    </div>
  )
}

export default FooterBot
