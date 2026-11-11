const productModel = require("../../models/productModel")

const deleteProductController = async (req, res) => {
    try {
        const { _id } = req.body

        const deleteProduct = await productModel.findByIdAndDelete(_id)

        res.json({
            message: "Product deleted successfully",
            success: true,
            error: false,
            data: deleteProduct
        })

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = deleteProductController