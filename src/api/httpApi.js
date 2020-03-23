import url from "./url";
import { GET } from "./apiFn";

export default {
  /**
   @method doLoginAdmin
   @param {String,String} 参数名:{userName,password}
   @description 账号,密码
 */
  doLoginAdmin: params => GET(url.doLoginAdmin, params), // 登录
};
