import styled from 'styled-components';

export const ModalOverlay = styled.div`
  background-color: #000000e4;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const ModalContainer = styled.section`
  width: 800px;
`;

export const ModalHeader = styled.header`
  background-color: #232323;
  color: #fff;
  padding: 20px 30px;
`;

export const ModalContent = styled.header`
  background-color: #fff;
  color: #000;
  padding: 20px 30px;
  margin: 0;
  p {
    margin: 0;
  }
`;

export const ModalFooter = styled.footer`
  background-color: #232323;
  color: #fff;
  padding: 20px 30px;
`;
