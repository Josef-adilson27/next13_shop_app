"use client";
import styled from "styled-components";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title?: string;
  style?: string;
  w?: string;
  h?: string;
  m?: string;
  radius?: string;
  color?: string;
  bgColor:string
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export const BaseButton = styled.button<CustomButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.w + "px"};
  height: ${(props) => props.h + "px"};
  background-color: ${(props) => props.bgColor};
  font-size: 20px;
  color:${(props) => props.color + "px"};

  margin-left: ${(props) => props.m?.split(" ")[0] + "px"};
  margin-right: ${(props) => props.m?.split(" ")[3] + "px"};
  margin-top: ${(props) => props.m?.split(" ")[1] + "px"};
  margin-bottom: ${(props) => props.m?.split(" ")[2] + "px"};

  border-top-right-radius: ${(props) => props.radius?.split(" ")[2] + "px"};
  border-top-left-radius: ${(props) => props.radius?.split(" ")[1] + "px"};
  border-bottom-right-radius: ${(props) => props.radius?.split(" ")[0] + "px"};
  border-bottom-left-radius: ${(props) => props.radius?.split(" ")[3] + "px"};
`;
