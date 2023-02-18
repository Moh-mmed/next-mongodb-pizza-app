import dbConnect from "../../../lib/dbConnect";
import Product from '../../../models/Product'
import { getSession } from "next-auth/react";

export default async function handler(req, res) {

    const { method, cookies } = req;
    // const token = cookies.token;
    await dbConnect();

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
        const session = await getSession({ req });

      if (!session) {
          console.log('Cannot make a post request')
          res.send({
            error: "You are not authorized for this action.",
          });
        }
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




    //  if (session) {
    //    res.send({
    //      content:
    //        "This is protected content. You can access this content because you are signed in.",
    //    });
    //  } else {
    //    res.send({
    //      error:
    //        "You must be signed in to view the protected content on this page.",
    //    });
    //  }
}
