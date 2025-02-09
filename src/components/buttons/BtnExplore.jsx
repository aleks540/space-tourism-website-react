import React, { useState } from 'react';
import styled from 'styled-components';

const BtnExplore = () => {
  const [isActive, setIsActive] = useState(true);

  const Button = styled.button`
        width: 272px;
  height: 272px;
  border-radius: 50%;
  background-color: white;
  color: var(--blue900);
  border: none; 
  outline: 88px solid transparent; 
  cursor: pointer;
  position: relative;
  transition: all 0.4s ease-in-out;
padding:0;
  &:hover {
   box-shadow: 0px 0px 0px 50px rgba(255, 255, 255, 0.1);
   /*  outline: 88px solid  rgba(255, 255, 255, 0.1); */
  }
   `;

  return (
    <Button className='text-preset-4 '>EXPLORE</Button>

  )
}

export default BtnExplore