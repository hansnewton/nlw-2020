import styled from 'styled-components';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const PageLandingContent = styled.div`
  width: 100vw;
  max-width: 700px;
  @media (min-width: 900px) {
    max-width: 900px;

    display: grid;

    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;

    grid-template-areas: 
      "logo hero hero"
      "buttons buttons total";
  }
`;

export const LogoContainer = styled.div`
  height: 10rem;

  text-align: left;
  margin-bottom: 3.2rem;

  grid-area: logo;
  align-self: center;

  img {
    height: 100%;
    
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media(min-width: 1100px){
    img {
      height: 10rem;
    }

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }
  }
`;


export const HeroImage = styled.img`
  width: 100%;

  grid-area: hero;
  justify-self: end;

  margin-top: 3.2rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  
  margin: 3.2rem 0;

  grid-area: buttons;
  justify-content: flex-start;
  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    margin-right: 1.6rem;
    font: 700 2.0rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;
  }

  a:first-child {
    margin-right: 1.6rem;
  }

  a img {
    width: 4rem;
  }

  a.study {
    background: var(--color-primary-lighter);
  }

  a.give-classes {
    background: var(--color-secundary);
  }

  a.study:hover {
    background: var(--color-primary-light);
  }

  a.give-classes:hover {
    background: var(--color-secundary-dark);
  }

  a img {
    margin-right: 2.4rem;
  }

  a {
    font-size: 2.4rem;
  }
`;

export const TotalConnections = styled.span`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;  

  img {
    margin-left: 0.8rem;
  }

  grid-area: total;
`;

export const Logo = styled.img`
  height: 100%;
`;