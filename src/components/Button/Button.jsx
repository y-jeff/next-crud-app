import React from 'react';
import styles from './Button.module.css'; // Asegúrate de tener un archivo CSS para los estilos.

const Button = ({ children, onClick, type = 'button', variant = 'primary', size = 'medium', disabled = false }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
