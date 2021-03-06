import styled, { keyframes } from 'styled-components';
import { theme, device } from '../theme';
import { Link } from 'react-router-dom';

const Scatter = keyframes`
  0% { top: 0; }
  50% { top: -10px; }
  100% { top: 0; }
`;

// export const Balloon = styled.div`
//   position: absolute;
//   animation: ${Scatter} 2.5s infinite;
//   margin: 2rem 1.5rem 0;
//   left: 0;
// `;

export const Balloon = styled(Link)`
  position: absolute;
  animation: ${Scatter} 2.5s infinite;
  margin: 2rem 1.5rem 0;
  left: 0;
  color: white;
  & p {
    position: absolute;
    top: 18%;
    left: 21%;
  }
  & img {
    width: 5.5rem;
  }
  ${device.laptop} {
    margin: 2rem 2.5rem 0;
    & p {
      font-size: 20px;
    }
    & img {
      width: 7rem;
    }
  }
`;

export const Contact = styled.a`
  align-self: flex-end;
  background-color: ${theme.color.sunnyYellow};
  width: fit-content;
  padding: 1rem;
  border-radius: 3rem;
  box-shadow: -1px 4px 6px ${theme.color.cloudShadow};
  color: rgba(0, 0, 0, 0.65);
  margin: 1.5rem;
  cursor: pointer;
`;

export const Content = styled.div`
  margin-top: 10%;
  font-family: ${theme.font.georgiaBold};
  padding: 0px 2.5rem;
  z-index: 1;
  max-width: 30rem;
`;

export const ImgWrapper = styled.div`
  position: relative;
  left: 25vw;
  ${device.tablet} {
    position: absolute;
    left: auto;
    right: 0;
    bottom: 40%;
  }
  ${device.laptop} {
    bottom: 30vh;
    margin-right: 8vw;
  }
`;

export const Img = styled.img`
  position: relative;
  animation: ${Scatter} 1.75s infinite;
  animation-delay: 0.22s;
  width: 10rem;
  ${device.tablet} {
    width: 18rem;
  }
`;

export const Cloud = styled.img`
  position: absolute;
  width: 100%;
  bottom: -6rem;
  ${device.tablet} {
    display: none;
  }
`;
export const CloudsWrapper = styled.div`
  display: none;
  ${device.tablet} {
    display: flex;
    position: absolute;
    width: 150%;
    justify-content: space-between;
    bottom: -5vh;
  }
  ${device.laptop} {
    width: 115%;
    bottom: -12vh;
  }
`;

export const Clouds = styled.img`
  max-width: 45%;
  ${device.laptop} {
    max-width: 36%;
  }
`;
