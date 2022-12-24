import { GLOBALTYPES } from "./globalTypes";
import { postDataAPI } from "../../utils/fetchData";
import valid from "../../utils/valid";
export const login = (data) => async (dispatch) => {
  try {
    console.log(data);
    const res = await postDataAPI("login", data);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
