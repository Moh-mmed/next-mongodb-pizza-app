import dbConnect from "../../../lib/dbConnect";
import Order from "../../../models/Order";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  const { method } = req;
  
  await dbConnect();

  if (method === "GET") {
    // const session = await getServerSession(req, res, authOptions);
    const session = await getSession({req});

    if (!session) {
      res.send({
        error: "You are not authorized for this action.",
      });
    }

    try {
      const orders = await Order.find();
      return res.status(200).json({
        status: "success",
        message: "All orders have been fetched successfully",
        data: orders,
      });
    } catch (error) {
      return res.status(500).json({ status: "fail", message: error });
    }
  }
  if (method === "POST") {
     try {
       const order = await Order.create(req.body);
       return res.status(201).json({
         status: "success",
         message: "Order created successfully!",
         data: order,
       });
     } catch (error) {
       return res.status(500).json({ status: "fail", message: error });
     }
  }
};

export default handler;
