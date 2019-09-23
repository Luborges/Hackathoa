import React, { useState, useEffect } from "react";
import { Circle, Check, Label } from "./styles";

const CircularBox = checked => {
  return (
    <Circle>
      <Check type={"checkbox"} checked={checked.checked} />
      <Label />
    </Circle>
  );
};

export default CircularBox;
