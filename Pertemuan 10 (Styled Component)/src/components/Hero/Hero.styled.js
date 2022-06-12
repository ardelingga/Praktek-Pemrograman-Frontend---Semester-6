import styled from "styled-components";

const StyledHero = styled.div`
    margin: 1rem;

    section {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    section .hero_left {
        margin-bottom: 1rem;
    }

    h2 {
        color: #4361ee;
        margin-bottom: 1rem;
        font-size: 2.44rem;
    }

    h3 {
        color: #b5179e;
        margin-bottom: 1rem;
        font-size: 1.59rem;
    }

    p {
        color: #64748b;
        margin-bottom: 1rem;
    }

    .hero_right img{
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }

    /* Large Screen */
    @media (min-width: 992px) {
        max-width: 1200px;
        margin: 3rem auto;

        section {
            margin: 0 1rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
        }
        
        section .hero_left {
            flex-basis: 40%;
        }

        section .hero__right {
            flex-basis: 60%;
        }
    }
`

export default StyledHero;