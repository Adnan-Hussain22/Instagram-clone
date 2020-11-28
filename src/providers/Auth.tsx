import * as React from "react";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [user, setUser] = React.useState(null);

  const contextValues = { user, setUser };

  return (
    <AuthContext.Provider value={contextValues}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
