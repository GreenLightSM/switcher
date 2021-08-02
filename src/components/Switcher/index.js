import React, {useState} from 'react';
import {Circle, Moon, Sun, Wrap} from "./style";
import moonIcon from '../../assets/images/moon.svg'
import sunIcon from '../../assets/images/sun.svg'

const Switcher = () => {
  const [active, setActive] = useState(false);

  return (
      <Wrap active={active} onClick={() => setActive(!active)}>
        <Moon src={moonIcon} alt={'moon-icon'}/>
        <Sun src={sunIcon} alt={'sun-icon'}/>
        <Circle />
      </Wrap>
  );
};

export default Switcher;
