import React, { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  overflow: auto;
`;

const ModalContent = styled.div`
  margin: 15% auto;
  padding: 20px;
  width: 50%;
  background-color: yellow;
  color: black;
`;

export const Modal = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <>
    <button onClick={() => setShow(true)}>Show Modal</button>
    {
      show && (
        <ModalBackground onClick={() => setShow(false)}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setShow(false)}>Hide Modal</button>
          {children}
        </ModalContent>
      </ModalBackground>
      ) 
    }
    </>
  )
}  