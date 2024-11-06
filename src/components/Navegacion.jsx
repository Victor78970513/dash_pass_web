import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Navegacion.css';

const Navegacion = ({ title, actions }) => {
  const navigate = useNavigate();

  return (
    <div className="sub-navigation">
      <h2 className="sub-navigation-title">{title}</h2>
      <div className="sub-navigation-actions">
        {actions?.map((action, index) => (
          <button
            key={index}
            className="sub-navigation-button"
            onClick={() => navigate(action.path)}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navegacion;