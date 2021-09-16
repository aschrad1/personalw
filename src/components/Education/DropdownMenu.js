import {AiOutlineMail} from "react-icons/ai";
import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import React, {useState} from 'react';
import swarthmore from './swarthmore.png';
import sfs from './sfs.png'
import udemy from './udemy.png'
import "./DropdownMenu.css";

const DropdownMenu = (props) => {
  const udemyHandler = () => {
    console.log('hello');
    props.onClickUdemy();
  }
  const swarthmoreHandler = () => {
    props.onClickSwarthmore()
  }
  const sfsHandler = () => {
    props.onClickSfs()
  }
  return (
    <CircleMenu
      startAngle={90}
      rotationAngle={-270}
      itemSize={6}
      radius={7}
      rotationAngleInclusive={false}
    >
      <CircleMenuItem
        onClick={udemyHandler}
        tooltip="Email"
        tooltipPlacement="right"
      >
        <img src={udemy} className = 'icon'/>
      </CircleMenuItem>
      <CircleMenuItem tooltip="Help" onClick={swarthmoreHandler}>
      <img src={swarthmore} className = 'icon'/>
      </CircleMenuItem>
      <CircleMenuItem tooltip="Location" onClick={sfsHandler}>
      <img src={sfs} className = 'icon'/>
      </CircleMenuItem>
    </CircleMenu>
  );
};

export default DropdownMenu