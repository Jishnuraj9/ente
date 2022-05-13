import React from 'react';
import styled, { css } from 'styled-components';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export enum SCROLL_DIRECTION {
    LEFT = -1,
    RIGHT = +1,
}

const Wrapper = styled.button<{ direction: SCROLL_DIRECTION }>`
    position: absolute;
    top: 7px;
    height: 50px;
    width: 50px;
    border: none;
    padding: 0;
    margin: 0;

    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.background.paper};
    color: ${({ theme }) => theme.palette.text.primary};

    ${(props) =>
        props.direction === SCROLL_DIRECTION.LEFT
            ? css`
                  left: 0;
                  text-align: right;
                  transform: translate(-50%, 0%);
              `
            : css`
                  right: 0;
                  text-align: left;
                  transform: translate(50%, 0%);
              `}

    & > svg {
        ${(props) =>
            props.direction === SCROLL_DIRECTION.LEFT &&
            'transform:rotate(180deg);'}
        border-radius: 50%;
        height: 30px;
        width: 30px;
    }
`;

const NavigationButton = ({ scrollDirection, ...rest }) => (
    <Wrapper direction={scrollDirection} {...rest}>
        <NavigateNextIcon />
    </Wrapper>
);
export default NavigationButton;
