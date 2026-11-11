import SummaryApi from '../common'

const fetchCategoryWiseProduct = async (category) => {

    if (!category) {
        console.warn('No category provided:', category)

        return {
            success: false,
            data: []
        }
    }

    try {

        console.log('Category being sent:', category)
        console.log(
            'Category API URL:',
            SummaryApi.categoryWiseProduct.url
        )

        const response = await fetch(
            SummaryApi.categoryWiseProduct.url,
            {
                method: SummaryApi.categoryWiseProduct.method || 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                credentials: 'include',

                body: JSON.stringify({
                    category: category
                })
            }
        )

        const dataResponse = await response.json()

        console.log('Category Product Status:', response.status)
        console.log('Category Product Response:', dataResponse)

        if (!response.ok) {
            console.error(
                'Category Product API Error:',
                dataResponse?.message || 'Bad Request'
            )

            return {
                success: false,
                data: []
            }
        }

        return dataResponse

    } catch (error) {

        console.error(
            'Error fetching category-wise product:',
            error
        )

        return {
            success: false,
            data: []
        }
    }
}

export default fetchCategoryWiseProduct