import styled from "styled-components";

const StyledNavbar = styled.div`
    background-color: #F72585;
    padding: 1rem;
    color: #fff;

    div h1 {
        margin-bottom: 1rem;
    }

    div ul {
        list-style: none;
    }

    div ul li {
        margin-bottom: 1rem;
    }

    div ul li a {
        text-decoration: none;
        color: #fff;
    }

    @media screen and (min-width: 768px){
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        div h1{
            margin: 0;
        }

        div ul {
            list-style: flex;
        }

        div ul li {
            margin: 0 1rem;
            display: inline;
        }
    }
`

export default StyledNavbar;