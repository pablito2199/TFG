import React from 'react';
import styles from '../style/button.module.css';

export const ButtonAceptar = ({link, text}) => {
    return(
        <a className={styles.buttonAceptar} href={link} target="_blank" rel="noreferrer">{text}</a>
    )
}

export const ButtonPrevisualizar = ({link, text}) => {
    return(
        <a className={styles.buttonPrevisualizar} href={link} target="_blank" rel="noreferrer">{text}</a>
    )
}

export const ButtonRexeitar = ({link, text}) => {
    return(
        <a className={styles.buttonRexeitar} href={link} target="_blank" rel="noreferrer">{text}</a>
    )
}