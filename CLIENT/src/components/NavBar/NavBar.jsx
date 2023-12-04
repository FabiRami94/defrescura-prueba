
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {

    const [activeButton, setActiveButton] = useState('button1');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return(
        <div style={{backgroundColor: 'rgb(151, 206, 76)'}}>
            <div style={{display: 'flex',
                flexDirection: 'Row',
                justifyContent: 'space-evenly',
                alignItems: 'center', 
                }}> 
                <img 
                    src="https://i.ibb.co/cLxsydg/Logo-Fruver.png" 
                    alt="nombre" 
                    className={styles.Logo} /> 
                <div>   
                    <NavLink to={"/inicio"} onClick={() => handleButtonClick("button1")}>
                        <button className={(
                            activeButton === "button1" ? 
                            styles.GeneralButtonActive : 
                            styles.GeneralButton)}>
                            Inicio
                        </button>
                    </NavLink>
                    <NavLink to={"/frutas"} onClick={() => handleButtonClick("button2")}>
                        <button className={(
                            activeButton === "button2" ? 
                            styles.GeneralButtonActive : 
                            styles.GeneralButton)}>
                            Frutas
                        </button>
                    </NavLink>
                    <NavLink to={"/verduras"} onClick={() => handleButtonClick("button3")}>
                        <button className={(
                            activeButton === "button3" ? 
                            styles.GeneralButtonActive : 
                            styles.GeneralButton)}>
                            Verduras
                        </button>
                    </NavLink>
                    <NavLink to={"/compras"} onClick={() => handleButtonClick("button4")}>
                        <button className={(
                            activeButton === "button4" ? 
                            styles.GeneralButtonActive : 
                            styles.GeneralButton)}>
                            Compras
                        </button>
                    </NavLink>
                </div>
            </div>
            <hr style={{ width: '100%', margin: 0 }} />
        </div>
    )
};

export default NavBar;

