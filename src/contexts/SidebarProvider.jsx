import { createContext, useState } from 'react';

export const SideBarContext = createContext();

export const SideBarProvide = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SideBarContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </SideBarContext.Provider>
    );
};
