import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import productCategory from '../helpers/productCategory'
import VerticalCard from '../components/VerticalCard'
import SummaryApi from '../common'
import { FaFilter, FaXmark } from 'react-icons/fa6'

const CategoryProduct = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const location = useLocation()
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false) // Handle filters on smartphone devices Safely
    
    const urlSearch = new URLSearchParams(location.search)
    const urlCategoryListinArray = urlSearch.getAll("category")

    const urlCategoryListObject = {}
    urlCategoryListinArray.forEach(el => {
      urlCategoryListObject[el] = true
    })

    const [selectCategory, setSelectCategory] = useState(urlCategoryListObject)
    const [filterCategoryList, setFilterCategoryList] = useState(urlCategoryListinArray)
    const [sortBy, setSortBy] = useState("")

    useEffect(() => {
        const currentParams = new URLSearchParams(location.search)
        const activeCategories = currentParams.getAll("category")
        setFilterCategoryList(activeCategories)
        
        const updatedObj = {}
        activeCategories.forEach(el => {
            updatedObj[el] = true
        })
        setSelectCategory(updatedObj)
    }, [location.search])

    const fetchData = async () => {
      setLoading(true)
      const response = await fetch(SummaryApi.filterProduct.url, {
        method : SummaryApi.filterProduct.method,
        headers : { "content-type" : "application/json" },
        body : JSON.stringify({ category : filterCategoryList })
      })
      const dataResponse = await response.json()
      setData(dataResponse?.data || [])
      setLoading(false)
    }

    const handleSelectCategory = (e) => {
      const { value, checked } = e.target
      setSelectCategory((preve) => {
        const nextState = { ...preve, [value] : checked }
        const arrayOfCategory = Object.keys(nextState).filter(key => nextState[key])
        const urlFormat = arrayOfCategory.map(el => `category=${el}`).join("&")
        navigate(`/product-category?${urlFormat}`)
        return nextState
      })
    }

    useEffect(() => {
      fetchData()
    }, [filterCategoryList])

    const handleOnChangeSortBy = (e) => {
      const { value } = e.target
      setSortBy(value)
      if(value === 'asc') setData(preve => [...preve].sort((a, b) => a.sellingPrice - b.sellingPrice))
      if(value === 'dsc') setData(preve => [...preve].sort((a, b) => b.sellingPrice - a.sellingPrice))
    }

    const renderFiltersForm = () => (
      <>
        <div className='mb-6'>
            <h3 className='text-xs uppercase font-bold tracking-wider text-slate-400 border-b pb-2 mb-3 border-slate-100'>Sort by</h3>
            <form className='text-sm flex flex-col gap-2'>
                <div className='flex items-center gap-3 cursor-pointer text-slate-700 hover:text-amber-600 transition-colors'>
                  <input type='radio' name='sortBy' id='sortAsc' checked={sortBy === 'asc'} onChange={handleOnChangeSortBy} value={"asc"} className='accent-amber-600'/>
                  <label htmlFor='sortAsc' className='cursor-pointer text-xs'>Price - Low to High</label>
                </div>
                <div className='flex items-center gap-3 cursor-pointer text-slate-700 hover:text-amber-600 transition-colors'>
                  <input type='radio' name='sortBy' id='sortDsc' checked={sortBy === 'dsc'} onChange={handleOnChangeSortBy} value={"dsc"} className='accent-amber-600'/>
                  <label htmlFor='sortDsc' className='cursor-pointer text-xs'>Price - High to Low</label>
                </div>
            </form>
        </div>

        <div>
            <h3 className='text-xs uppercase font-bold tracking-wider text-slate-400 border-b pb-2 mb-3 border-slate-100'>Category</h3>
            <form className='text-sm flex flex-col gap-2.5 max-h-[60vh] overflow-y-auto pr-1 scrollbar-thin'>
                {productCategory.map((categoryName, index) => (
                  <div key={categoryName?.value || index} className='flex items-center gap-3 text-slate-700 hover:text-amber-600 transition-colors'>
                   <input 
                     type='checkbox' 
                     name={"category"} 
                     checked={!!selectCategory[categoryName?.value]} 
                     value={categoryName?.value} 
                     id={categoryName?.value} 
                     onChange={handleSelectCategory} 
                     className='accent-amber-600 rounded cursor-pointer'
                   />
                   <label htmlFor={categoryName?.value} className='capitalize cursor-pointer select-none text-xs font-medium'>{categoryName?.label}</label>
                  </div>
                ))}
            </form>
        </div>
      </>
    )
    
  return (
    <div className='container mx-auto p-4 pt-20 lg:pt-28 max-w-6xl'>
       
       {/* MOBILE TOP CONTROLS DRAWER ACCESS BAR */}
       <div className='flex lg:hidden items-center justify-between bg-white p-3 rounded-lg shadow-sm mb-4'>
          <p className='text-xs font-semibold text-slate-600'>Results found: <span className='text-amber-600 font-bold ml-1'>{data.length}</span></p>
          <button 
            onClick={() => setMobileFilterOpen(true)}
            className='flex items-center gap-2 text-xs font-medium text-white bg-amber-600 px-4 py-2 rounded-full shadow-sm active:bg-amber-700 transition-colors'
          >
            <FaFilter size={11}/> Filters & Sort
          </button>
       </div>

       {/* RESPONSIBLE TWO-COLUMN MATRIX FRAMEWORK */}
       <div className='grid grid-cols-1 lg:grid-cols-[220px,1fr] gap-6'>
            
            {/* DESKTOP SIDEBAR DRAWER VIEW */}
            <div className='hidden lg:block bg-white p-5 min-h-[calc(100vh-160px)] shadow-sm rounded-xl overflow-y-auto h-fit border border-slate-100'>
                {renderFiltersForm()}
            </div>

            {/* MAIN CORE LIVE PRODUCTS DISPLAY PANELS */}
            <div className='px-0'>
              <div className='hidden lg:flex bg-white p-4 rounded-xl border border-slate-100 shadow-sm mb-4 items-center justify-between'>
                <p className='font-semibold text-slate-700 text-xs tracking-wide uppercase'>Catalog Matrix View</p>
                <p className='font-medium text-slate-600 text-sm'>Showing Results : <span className='text-amber-600 font-bold ml-1'>{data.length} items</span></p>
              </div>

              <div className='min-h-[calc(100vh-220px)]'>
              {
                  loading ? (
                    <div className='flex justify-center items-center h-48 text-slate-400 text-sm animate-pulse font-light'>Loading curated collection...</div>
                  ) : data.length !== 0 ? (
                    <div className='w-full'>
                      <VerticalCard data={data} loading={loading}/>
                    </div>
                  ) : (
                    <div className='bg-white rounded-xl p-12 text-center border border-slate-100 shadow-sm flex flex-col items-center justify-center min-h-[380px]'>
                       <p className='text-slate-400 text-sm font-light mb-1'>No products matched your active filters.</p>
                       <p className='text-slate-300 text-xs font-light'>Try clearing your filter preferences or choosing another collection tier row.</p>
                    </div>
                  )
              }
              </div>
            </div>
       </div>

       {/* MOBILE FLOATING FILTER SLIDEOUT OVERLAY DRAWER */}
       {mobileFilterOpen && (
          <div className='fixed inset-0 bg-black/50 z-50 flex justify-end lg:hidden animate-in fade-in duration-200'>
             <div className='bg-white w-72 h-full p-6 relative flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300'>
                <div>
                   <div className='flex items-center justify-between border-b pb-3 mb-5'>
                      <h2 className='font-serif font-bold text-slate-800 tracking-wide text-sm uppercase'>Filter Options</h2>
                      <button onClick={() => setMobileFilterOpen(false)} className='text-slate-400 hover:text-rose-600 transition-colors p-1'>
                         <FaXmark size={18}/>
                      </button>
                   </div>
                   {renderFiltersForm()}
                </div>
                <button 
                  onClick={() => setMobileFilterOpen(false)}
                  className='w-full py-2.5 text-center text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg tracking-wider uppercase mt-4'
                >
                  Apply & Close
                </button>
             </div>
          </div>
       )}
    </div>
  )
}

export default CategoryProduct