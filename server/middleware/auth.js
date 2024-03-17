import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const auth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Authorization token missing" });
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    // todo wrap test in the .env file
    if (token) {
      let decodedData = jwt.verify(token, process.env.ACCESS_TOKEN);
      req.userId = decodedData?.id;
    }

    next();
  } catch (error) {
    console.log(error, "this is the error");
  }
};

export default auth;
