import styled, { css } from 'styled-components';

const good = {
  bgProgres: css`
    background: #444 linear-gradient(to right, transparent 50%, #06d6a0 0);
  `,
  bgProgressBefore: css`
    background: #06d6a0;
  `,
};
const fair = {
  bgProgres: css`
    background: #444 linear-gradient(to right, transparent 50%, #ffd166 0);
  `,
  bgProgressBefore: css`
    background: #ffd166;
  `,
};
const bad = {
  bgProgres: css`
    background: #444 linear-gradient(to right, transparent 50%, #ef476f 0);
  `,
  bgProgressBefore: css`
    background: #ef476f;
  `,
};

const colorVoteAverage = (value: number) => {
  if (value < 40) {
    return bad;
  } else if (value > 39 && value < 70) {
    return fair;
  } else {
    return good;
  }
};

export const Progress = styled.div<{ value: number }>`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: #fff;
  ${({ value }) => colorVoteAverage(value).bgProgres}
  /* background: #444 linear-gradient(to right, transparent 50%, blue 0); */

  & > h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    z-index: 1;
    font-weight: 500;

    & > span {
      font-size: 12px;
      font-weight: 400;
    }
  }

  &::before {
    content: '';
    display: block;
    height: 100%;
    margin-left: 50%;
    transform-origin: left;
    border-radius: 0 100% 100% 0/50%;

    ${({ value }) =>
      value < 50
        ? css`
            background: #444;
            transform: rotate(calc((${value - 0} * 0.01turn)));
          `
        : css`
            ${colorVoteAverage(value).bgProgressBefore}
            transform: rotate(calc((${value - 50} * 0.01turn)));
          `}
  }

  &::after {
    content: '';
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    background: #222;
  }
`;
