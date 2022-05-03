import initDB from '../../../helper/initDB';
import User from '../../../models/addUser';

initDB()

export default async (req, res) => {
  (req.method)
  {
    "POST"
    await handler(req, res)
  }
}
const handler = async (req, res) => {
  if (req.method == 'POST') {
    console.log(req.body)
    const { uid } = req.query
    const user = await User.findByIdAndUpdate({ _id: uid })
    const { rsph, rcyl, raxis, lsph, lcyl, laxis, add, frame, lens } = req.body
    const order = { rsph, rcyl, raxis, lsph, lcyl, laxis, add, frame, lens };
    user.orders.push(order);
    await user.save()
    res.status(200).json({ success: "success" })
  }
  else {
    res.status(400).json({ error: "this method is not required" })
  }
}



