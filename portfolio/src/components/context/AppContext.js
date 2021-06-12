import React, { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [preset, setPreset] = useState("roomToBottom");
    const [enterAnimation, setEnterAnimation] = useState("scaleUp");
    const [exitAnimation, setExitAnimation] = useState("moveToBottom");

    return (
        <AppContext.Provider
            value={{
                preset,
                enterAnimation,
                exitAnimation,
                setPreset,
                setEnterAnimation,
                setExitAnimation
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;
