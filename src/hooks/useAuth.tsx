import * as React from "react";
import { AuthContext } from "../providers/Auth";

const useAuthContext = () => {
  return React.useContext(AuthContext);
};

export default useAuthContext;
