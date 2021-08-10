import styled from 'styled-components';

export const Button = styled.div`
position: absolute;
width: 10%;
left: 90%;
bottom: 5vh;
//height: 13vh;
font-size: 3rem;
z-index: 1;
cursor: pointer;
color: #006bf8;
@media (max-width: 700px){
    left: 89%;
    bottom: 98px;
  }
@media (max-width: 600px){
    left: 83%;
    bottom: 98px;
  }
  @media (max-width: 530px){
    left: 83%;
    bottom: 85px;
  }
  @media (max-width: 500px){
    left: 81.5%;
    bottom: .5vh;
    font-size: 2.5rem;
  }
`
