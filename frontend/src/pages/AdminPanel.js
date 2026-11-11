import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import ROLE from '../common/role';

const AdminPanel = () => {
    const user = useSelector(state => state?.user?.user)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (user && user?.role !== ROLE.ADMIN) {
            navigate("/")
        }
    }, [user, navigate])

  return (
    /* FIXED: Removed 'md:flex hidden' so the entire dashboard renders beautifully on all viewports */
    <div className='min-h-[calc(100vh-120px)] flex flex-col md:flex-row bg-slate-50/50 pt-2 lg:pt-6'>

        {/* ─── DASHBOARD SIDEBAR (DESKTOP) / TOP BAR (MOBILE) ─── */}
        <aside className='bg-white w-full md:w-60 md:min-h-[calc(100vh-140px)] shadow-sm md:shadow-md border-b md:border-b-0 md:border-r border-slate-100 flex flex-col shrink-0'>
                
                {/* Admin Profile Details */}
                <div className='p-4 flex flex-row md:flex-col items-center justify-center gap-3 border-b border-slate-100 bg-slate-50/30'>
                    <div className='text-3xl md:text-5xl cursor-pointer relative flex justify-center shrink-0'>
                        {
                        user?.profilePic ? (
                            <img src={user?.profilePic} className='w-12 h-12 md:w-20 md:h-20 rounded-full object-cover border border-slate-200 shadow-sm' alt={user?.name} />
                        ) : (
                            <FaRegCircleUser className='text-slate-400' />
                        )
                        }
                    </div>
                    <div className='text-left md:text-center min-w-0'>
                        <p className='capitalize text-sm md:text-base font-bold text-slate-800 truncate'>{user?.name || "Admin Account"}</p>
                        <p className='text-[10px] md:text-xs font-medium uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full inline-block mt-0.5 md:mt-1'>{user?.role || "Staff"}</p>
                    </div>
                </div>

                {/* Dashboard Nav Items (Flexes horizontally on mobile, stacks vertically on desktop) */}       
                <div className='w-full'>   
                    <nav className='flex flex-row md:flex-col p-2 md:p-4 gap-1.5 md:gap-1 justify-center md:justify-start w-full overflow-x-auto scrollbar-none'>
                        <Link 
                            to={"all-users"} 
                            className={`flex-1 md:flex-none text-center md:text-left text-xs md:text-sm font-semibold tracking-wide uppercase px-4 py-2.5 rounded-lg transition-all duration-200 ${
                                location.pathname.includes("all-users") 
                                ? "bg-amber-600 text-white shadow-sm" 
                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            }`}
                        >
                            👥 All Users
                        </Link>
                        <Link 
                            to={"all-products"} 
                            className={`flex-1 md:flex-none text-center md:text-left text-xs md:text-sm font-semibold tracking-wide uppercase px-4 py-2.5 rounded-lg transition-all duration-200 ${
                                location.pathname.includes("all-products") 
                                ? "bg-amber-600 text-white shadow-sm" 
                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            }`}
                        >
                            📦 All Products
                        </Link>
                    </nav>
                </div>  
        </aside>

        {/* ─── DYNAMIC SUB-ROUTE VIEWS TREE CONTAINER ─── */}
        <main className='w-full flex-1 p-4 md:p-6 overflow-y-auto max-h-[calc(100vh-140px)]'>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminPanel
