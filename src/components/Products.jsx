import { useState } from 'react'
import { MdStar } from 'react-icons/md'
import { FaCodeCompare } from 'react-icons/fa6'
import { IoMdCart } from 'react-icons/io'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/twelvvySlice'

function Products() {
  const dispatch = useDispatch()
  const data = useLoaderData()
  const products = data.data
  return (
    <div className="bg-gray-100 max-w-screen-2xl mx-auto grid grid-cols-4 max-lg:grid-cols-1 gap-10 px-4 mt-5">
      {products.map((product) => {
        const { image, title, id, category, description, price, rating } =
          product
        return (
          <div
            key={id}
            className="bg-white h-auto border-[1px] border-gray-200 py-6 z-40 hover:border-transparent shadow-none hover:shadow-2xl duration-200 relative flex flex-col gap-4"
          >
            <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
              {category}
            </span>
            <div className="w-full h-auto flex items-center justify-center relative group">
              <img
                src={image}
                alt="productImg"
                className=" w-56 h-64 object-contain"
              />
              <ul className="w-full h-28 bg-gray-200 absolute bottom-[-150px] duration-700 flex flex-col justify-center items-center grap-2 font-semibold px-2 border-1 border-r z-20 group-hover:bottom-0">
                <li className="productLi">
                  Compare
                  <span>
                    <FaCodeCompare />
                  </span>
                </li>
                <li className="productLi">
                  Add to Cart{' '}
                  <span>
                    <IoMdCart />
                  </span>
                </li>
                <li className="productLi">
                  View Details{' '}
                  <span>
                    <FaArrowAltCircleRight />
                  </span>
                </li>
                <li className="productLi">
                  Add to Wish List{' '}
                  <span>
                    <FaHeart />
                  </span>
                </li>
              </ul>
            </div>
            <div className="px-4 mt-[-15px]  flex flex-col h-full justify-between z-30 bg-white">
              <div>
                <div className="flex items-center justify-between ">
                  <h2 className="font-bold tracking-wide text-lg ">
                    {title.substring(0, 20)}
                  </h2>
                  <p>
                    R <span>{(price * 13).toFixed(2)}</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm">{description.substring(0, 100)}...</p>
                  <div className="flex text-red-500">
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                  </div>
                </div>
              </div>

              <div className="flex justify-end ">
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: id,
                        title: title,
                        description: description,
                        price: (price * 13).toFixed(2),
                        category: category,
                        image: image,
                        quantity: 1,
                      })
                    )
                  }
                  className="w-full  text-white font-medium text-base bg-gradient-to-tr from-zinc-800 to-zinc-600 border hover:from-zinc-600 hover:to-zinc-800 active:bg-black duration-200 py-2 rounded-md mt-3"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Products
