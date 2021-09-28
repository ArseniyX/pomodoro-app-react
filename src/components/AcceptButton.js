import React from 'react'
import styled from 'styled-components';

const ApplyButton = styled.input`
  position: absolute;
  top: 93%;
  left: 40%;
  border: none;
  width: 140px;
  height: 53px;
  border-radius: 26.5px;
  background-color: #f87070;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  /* identical to box height */
  text-align: center;

  color: #ffffff;

  &:hover {
    cursor: pointer;
    background-color: #f98d8d;
  }
`;

const AcceptButton = () => {
    return <ApplyButton type="submit" value="Apply"/>;
}

export default AcceptButton
