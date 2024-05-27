'use client'
import styled from "styled-components";
import { Button, Flex } from 'antd';

export const PrimaryBtn = styled(Button)`
 background-color: #4CAF50;
  border-color: #4CAF50;
  color: white;

  &:hover,
  &:focus {
    background-color: #45A049;
    border-color: #45A049;
  }
`;
