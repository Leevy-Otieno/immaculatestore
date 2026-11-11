import React, { useState } from 'react'
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import AdminEditProduct from './AdminEditProduct';
import displayINRCurrency from '../helpers/displayCurrency';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const AdminProductCard = ({
    data,
    fetchdata
}) => {
    const [editProduct, setEditProduct] = useState(false)

    const handleDelete = async () => {
        // Safe fallback URL if deleteProduct isn't in your SummaryApi file yet
        const url = SummaryApi.deleteProduct?.url || "http://localhost:8080/api/delete-product";
        const method = SummaryApi.deleteProduct?.method || "post";

        const response = await fetch(url, {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({ _id: data?._id })
        })

        const dataResponse = await response.json()

        if (dataResponse.success) {
            toast.success(dataResponse.message)
            fetchdata() // Refreshes the product list after deletion
        } else {
            toast.error(dataResponse.message)
        }
    }

  return (
    <div className='bg-white p-4 rounded '>
       <div className='w-40'>
            <div className='w-32 h-32 flex justify-center items-center'>
              <img src={data?.productImage[0]}  className='mx-auto object-fill h-full'/>   
            </div> 
            <h1 className='text-ellipsis line-clamp-2'>{data.productName}</h1>

            <div>
                <p className='font-semibold'>
                  {
                    displayINRCurrency(data.sellingPrice)
                  }
                </p>

                {/* Edit & Delete Action Buttons */}
                <div className='flex items-center justify-end gap-2 mt-2'>
                    <div className='p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer' onClick={()=>setEditProduct(true)}>
                        <MdModeEditOutline/>
                    </div>
                    <div className='p-2 bg-amber-100 hover:bg-amber-600 rounded-full hover:text-white cursor-pointer' onClick={handleDelete}>
                        <MdDelete/>
                    </div>
                </div>
            </div>
       </div>
        
        {
          editProduct && (
            <AdminEditProduct productData={data} onClose={()=>setEditProduct(false)} fetchdata={fetchdata}/>
          )
        }
    </div>
  )
}

export default AdminProductCard