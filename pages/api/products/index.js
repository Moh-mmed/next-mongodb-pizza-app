import dbConnect from "../../../lib/dbConnect";
import Product from '../../../models/Product'

export default async function handler(req, res) {

    const { method, cookies } = req;
    // const token = cookies.token;
    dbConnect()

    if(method === "GET"){
        try {
            const products = await Product.find();
            
            return res.status(200).json({
                status: "success",
                message: "All products have been fetched successfully",
                data: products,
            });
        } catch (error) {
            return res.status(500).json({ status: "fail", message: error });
        }
    }

    if (method === "POST") {
        // if (!token || token !== process.env.token) {
        //     return res.status(401).json("Not authenticated!");
        // }
        try {
          const product = await Product.create(req.body)
          return res.status(201)
            .json({
              status: "success",
              message: "Product created successfully!",
              data: product,
            });  
        } catch (error) {
          return res.status(500).json({ status: "fail", message: error });  
        }
    }
}
