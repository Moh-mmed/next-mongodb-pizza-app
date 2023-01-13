import dbConnect from "../../../lib/dbConnect";
import Order from "../../../models/Order";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
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
