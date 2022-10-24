import React, { useContext, useState } from "react";

const LoginContext = React.createContext();

export function useLoginContext() {
    return useContext(LoginContext);
}

export function AppWrapper({ children }) {
    const [sharedState, setSharedState] = useState({
        token: "",
        isBusiness: undefined,
    });

    return (
        <LoginContext.Provider value={{ sharedState, setSharedState }}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginContext;
