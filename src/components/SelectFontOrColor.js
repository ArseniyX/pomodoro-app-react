import React from 'react'
import styled from 'styled-components';

const SetTimeTitle = styled.h2`
  font-size: 13px;
  padding-top: 2px;
  line-height: 16px;
  letter-spacing: 5px;

  color: #161932;
`;

const SelectContainer = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e3e1e1;
`;

const SelectElement = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

const FontRadioBtn = styled.input`
  position: absolute;
  visibility: hidden;
`;

const SelectFontLabel = styled.label`
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 10px;

  /* height: 48px; */

  background-color: #161932;
`;

const SelectColorLabel = styled.label`
  color: #000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 9px 14px;
  background-color: #f87070;
`;


const SelectFontOrColor = ({name, isFont = true}) => {
    return (
      <SelectContainer>
        <SetTimeTitle>{name}</SetTimeTitle>
        <SelectElement>
          <SelectColorLabel>
            🗸
            <FontRadioBtn type="radio" />
          </SelectColorLabel>
          <SelectColorLabel>
            🗸
            <FontRadioBtn type="radio" />
          </SelectColorLabel>
          <SelectColorLabel>
            🗸
            <FontRadioBtn type="radio" />
          </SelectColorLabel>
        </SelectElement>
      </SelectContainer>
    );
}

export default SelectFontOrColor
