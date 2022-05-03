import User from "../../../models/addUser";
import initDB from "../../../helper/initDB";

initDB()
export default async (req, res) => {
   switch (req.method) {
      case "GET":
         await getUser(req, res)
         break;
   }

}

const getUser = async (req, res) => {
   const { uid } = req.query
   const user = await User.findOne({ _id: uid })
   res.status(200).json(user)
}