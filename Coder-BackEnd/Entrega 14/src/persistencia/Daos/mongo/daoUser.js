import { UserModel } from "../../../models/user.model.js";
import { logger } from "../../../utils/logger.js";


  export const signup = async (username, password,email,number) => {
    try {
        const response = new UserModel({username, password,email,number});
        return response;
    } catch (error) {
        logger.fatal(error);
    }
  };
  
  export const login = async (username) => {
    try {
        const response = await UserModel.findOne({username});
        return response;
    } catch (error) {
        logger.fatal(error);
    }
  };

  export const deserializeUser = async(userId)=>{
    try {
        const response =  await UserModel.findById(userId);
        return response;
    } catch (error) {
        logger.fatal(error);
    }
  };

  