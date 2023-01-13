import dbConnect from "../../../lib/dbConnect";
import Order from "../../../models/Order";

const handler = async (req, res) => {
  const {
    method,
    query,
  } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const order = await Order.findById(query.id);
      return res.status(200).json({
        status: "success",
        message: "The order has been fetched successfully",
        data: order,
      });
    } catch (error) {
      return res.status(500).json({ status: "fail", message: error });
    }
  }

  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(query.id, req.body, {
        new: true,
      });
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "DELETE") {
  }
};

export default handler;
