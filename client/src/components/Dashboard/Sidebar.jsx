import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import MenuItem from './MenuItem'
import useAuth from '../../Hooks/useAuth'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const { logOut } = useAuth()
  const [isActive, setActive] = useState(false)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-200 text-gray-800 flex justify-between md:hidden shadow-md">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              Smart Campus
            </Link>
          </div>
        </div>
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-purple-100 rounded-full transition-colors duration-200"
        >
          <AiOutlineBars className="h-6 w-6 text-purple-700" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-20 md:fixed flex flex-col justify-between overflow-x-hidden bg-white/90 backdrop-blur-lg w-64 space-y-6 px-4 py-6 absolute inset-y-0 left-0 transform ${
          isActive ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out shadow-2xl rounded-r-3xl border-r-2 border-purple-100`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-2xl justify-center items-center bg-gradient-to-r from-lime-100 to-yellow-100 mx-auto">
              <Link to="/">
                Smart Campus
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-8">
            <nav>
              {/* Menu Items */}
              {/* {role === 'customer' && <CustomerMenu />} */}
              {/* {role === 'seller' && <SellerMenu />} */}
              {/* {role === 'admin' && <AdminMenu />} */}
            </nav>
          </div>
        </div>

        <div>
          <hr className="my-4 border-purple-200" />
          <MenuItem
            icon={FcSettings}
            label="Profile"
            address="/dashboard/profile"
          />
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 hover:text-purple-700 transition-all duration-300 transform rounded-xl"
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
