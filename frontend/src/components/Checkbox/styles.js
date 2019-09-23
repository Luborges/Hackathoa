import styled from "styled-components";

export const Circle = styled.div`
  position: absolute;
  margin-left: 3px;
`;

export const Check = styled.input`
  visibility: hidden;
  &:checked {
    background-color: #66bb6a;
    border-color: #66bb6a;
  }
  &:checked + label {
    background-color: #66bb6a;
    border-color: #66bb6a;
  }
  &:checked + label:after {
    opacity: 1;
  }
`;

export const Label = styled.label`
  position: absolute;
  background-color: #eeeeee;
  border: 1px solid #eeeeee;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  top: 0;
  width: 28px;
  &:after {
    position: absolute;
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 7px;
    opacity: 0;
    top: 8px;
    transform: rotate(-45deg);
    width: 12px;
  }
`;
