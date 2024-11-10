import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
    const [rolId, setRolId] = useState(null);
    const [userId, setUserId] = useState(null);

    const setRole = (roleId) => {
        setRolId(roleId);
    }

    const setUser = (id) => {
        setUserId(id);
    }

    return (
        <AuthContext.Provider value={{ rolId, userId, setRole, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook para acceder al contexto
export const useAuth = () => {
    return useContext(AuthContext);
};
