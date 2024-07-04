import { FaRegArrowAltCircleRight } from "react-icons/fa";

function SidebarContent({title, one, two, three}) {
  return (
    <div className="px-4 py-2">
    <h3 className="font-semibold border border-transparent border-b-gray-500 text-mdl tracking-wide">{title}</h3>
    <ul className="flex flex-col gap-2 pt-2">
      <li className="flex justify-between items-center text-sm headerHover hover:bg-zinc-800">{one} <span><FaRegArrowAltCircleRight className="text-lg "/></span></li>
      <li className="flex justify-between items-center text-sm headerHover hover:bg-zinc-800">{two} <span><FaRegArrowAltCircleRight className="text-lg "/></span></li>
      <li className="flex justify-between items-center text-sm headerHover hover:bg-zinc-800">{three} <span><FaRegArrowAltCircleRight className="text-lg "/></span></li>
    </ul>
  </div>
  )
}

export default SidebarContent