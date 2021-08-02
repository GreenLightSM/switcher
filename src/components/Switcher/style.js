import styled from "styled-components";

export const Circle = styled('div')`
  width: 22px;
  height: 22px;
  border-radius: 100%;
  background-color: #EBF7FF;
  transition: all .4s ease-in-out;
  z-index: 3;
`

export const Sun = styled('img')`
  left: 11px;`

export const Moon = styled('img')`
  right: 11px;
`

export const Wrap = styled('div')`
  height: 30px;
  width: 60px;
  box-shadow: 0px 4px 4px rgba(222, 222, 222, 0.25);
  border-radius: 100px;
  cursor: pointer;
  background: linear-gradient(277.42deg, #7CD0FF 9.34%, #BEE4FF 101.2%);
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 4px;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    background: linear-gradient(262.65deg, #6F4B9E 26.51%, #462077 102.57%);
    left: 0;
    opacity: ${p => p.active ? 0 : 1};
    transition: all .2s ease-in-out;
  }
  ${Circle} {
    margin-left: ${p => p.active ? '60%' : 0};
  }
  ${Sun} {
    opacity: ${p => p.active ? 1 : 0};
  }
  ${Moon} {
    opacity: ${p => p.active ? 0 : 1};
  }
  img {
    position: absolute;
    height: 18px;
    transition: all .2s ease-in;
    &:first-child {
      right: 11px;
      opacity: ${p => p.active ? 0 : 1};
    }
    &:last-child {
      left: 11px;

    }
  }
`




