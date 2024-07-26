import { useEffect, useRef, useState } from 'react'
import { TiThMenuOutline } from 'react-icons/ti'
import SidebarNav from './SidebarNav'

function NavBottom() {
  const [sidebar, setSidebar] = useState(false)

  const handleSidebarClick = () => {
    setSidebar((prev) => {
      return !prev
    })
  }

  return (
    <div className="w-full px-4 md:h-[36px] bg-zinc-800 text-white flex items-center border-b-[1px] border-gray-500">
      <ul className="flex flex-wrap flex-row p-2 items-center w-full gap-2 text-sm tracking-wide ml-2">
        <li
          className="headerHover flex items-center gap-1 text-white"
          onClick={handleSidebarClick}
        >
          <TiThMenuOutline className="text-lg" />
          All
        </li>

        <li className="headerHover">Today's Deals</li>
        <li className="headerHover">Customer Service</li>
        <li className="headerHover hidden md:block">Gift Cards</li>
        <li className="headerHover hidden md:block">Registry</li>
        <li className="headerHover ">Sell</li>
      </ul>
      {sidebar && <SidebarNav handleSidebarClick={handleSidebarClick} />}
    </div>
  )
}

export default NavBottom
