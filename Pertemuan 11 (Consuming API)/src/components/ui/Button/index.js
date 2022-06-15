// import styled
import styled, { css } from "styled-components";

// Buat component button
const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: #4361ee;
    cursor: pointer;

    // Akses props variant
    // CARA 1
    /* background-color: ${({variant}) => {
        // Jika variant ada, maka akses object berdasarkan nilai variant
        // if(variant){
        //     return colors[variant];
        // }else{
        //     return colors.primary;
        // }


        // jika primary, beri warna biru
        // if(props.variant === "primary"){
        //     return "#4361ee"
        // }else if(props.variant === "secondary"){
        //     return "#b5179e"
        // }else{
        //     return "#4361ee"
        // }
    }}; */

    // CARA 2
    background-color: ${({variant, theme}) => theme.colors[variant] || theme.colors.primary};

    // PROPS FULL
    ${(props) => props.full && css`
        display: block;
        width: 100%;
    `}
    
    // PROPS FONT SIZE
    ${(props) => {
        if(props.sm){
            return css`
                font-size: 0.8rem;
                padding: 0.2rem 0.5rem;
            `
        }else if(props.md){
            return css`
                font-size: 1rem;
                padding: 0.5rem 1rem;
            `
        }else if(props.lg){
            return css`
                font-size: 1.3rem;
                padding: 0.5rem 1rem;
            `
        }else{
            return css`
                font-size: 1rem;
                padding: 0.5rem 1rem;
            `
        }
    }}
`

export default Button;