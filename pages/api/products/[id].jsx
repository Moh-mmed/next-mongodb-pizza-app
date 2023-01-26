import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method, query } = req;
    
  dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(query.id)
      return res.status(200).json({
        status: "success",
        message: "The product has been fetched successfully",
        data: product
      });
    } catch (error) {
      return res.status(500).json({ status: "fail", message: error });
    }
  }

  if (method === "POST") {
    try {
      return res.status(201).json({
        status: "success",
        message: "Product updated successfully!",
      });
    } catch (error) {
      return res.status(500).json({ status: "fail", message: error });
    }
  }
  
  if (method === "DELETE") {
    try {

      await Product.findOneAndDelete(query.id);

      return res.status(204).json({
        status: "success",
        message: "Product deleted successfully!",
      });
    } catch (error) {
      return res.status(500).json({ status: "fail", message: error });
    }
  }
}
