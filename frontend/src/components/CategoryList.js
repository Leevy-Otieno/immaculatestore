import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { Link } from 'react-router-dom'

const CategoryList = () => {
    const [categoryProduct, setCategoryProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const categoryLoading = new Array(13).fill(null)

    const fetchCategoryProduct = async () => {
        setLoading(true)

        try {
            const response = await fetch(
                SummaryApi.categoryProduct.url,
                {
                    method: SummaryApi.categoryProduct.method || 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            const dataResponse = await response.json()

            console.log('Category API Status:', response.status)
            console.log('Category API Response:', dataResponse)

            if (!response.ok) {
                console.error(
                    'Category API Error:',
                    dataResponse?.message || 'Something went wrong'
                )

                setCategoryProduct([])
                return
            }

            setCategoryProduct(dataResponse?.data || [])

        } catch (error) {
            console.error('Error fetching categories:', error)
            setCategoryProduct([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCategoryProduct()
    }, [])

    return (
        <div className="container mx-auto p-4">

            <div className="flex items-center gap-4 justify-between overflow-x-auto scrollbar-none">

                {loading ? (

                    categoryLoading.map((el, index) => (
                        <div
                            key={'categoryLoading' + index}
                            className="h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse flex-shrink-0"
                        >
                        </div>
                    ))

                ) : categoryProduct.length > 0 ? (

                    categoryProduct.map((product, index) => {

                        const category = product?.category
                        const image = product?.productImage?.[0]

                        return (
                            <Link
                                to={`/product-category?category=${encodeURIComponent(category || '')}`}
                                className="cursor-pointer flex-shrink-0"
                                key={category || index}
                            >

                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center">

                                    {image ? (
                                        <img
                                            src={image}
                                            alt={category || 'Category'}
                                            className="h-full w-full object-scale-down mix-blend-multiply hover:scale-125 transition-all"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none'
                                            }}
                                        />
                                    ) : (
                                        <span className="text-xs text-gray-400">
                                            No Image
                                        </span>
                                    )}

                                </div>

                                <p className="text-center text-sm md:text-base capitalize mt-2">
                                    {category}
                                </p>

                            </Link>
                        )
                    })

                ) : (

                    <div className="w-full text-center py-5 text-gray-500">
                        No categories found
                    </div>

                )}

            </div>
        </div>
    )
}

export default CategoryList