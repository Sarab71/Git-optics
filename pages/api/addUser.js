import initDB from '../../helper/initDB';
import User from '../../models/addUser';

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
    const { name,phone,address } = req.body
    let u = new User( {name,phone,address } )
    await u.save()
    res.status(200).json({ success: "success" })
  }
  else {
    res.status(400).json({ error: "this method is not required" })
  }
}

