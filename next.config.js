/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports =  {
  env:{
    MONGO_URI:"mongodb+srv://sarab71:sarab71@cluster0.9ozjw.mongodb.net/Optics?authSource=admin&replicaSet=atlas-mq2us5-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
  }
}
