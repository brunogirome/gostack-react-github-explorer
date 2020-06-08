import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  display: flex;

  margin-top: 40px;
  max-width: 700px;

  input {
    flex: 1;

    padding: 0 24px;
    height: 70px;

    border: 0;
    border-radius: 5px 0 0 5px;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;

    font-weight: bold;
    color: #fff;

    border: 0;
    border-radius: 0 5px 5px 0;

    background: #04d361;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;

  margin-top: 30px;

  color: #c53030;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  img {
    width: 64px;
    height: 64px;

    border-radius: 50%;
  }

  a {
    background: #fff;
    border-radius: 5px;

    width: 100%;
    padding: 24px;

    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;

    & + a {
      margin-top: 16px;
    }

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    div {
      flex: 1;
      margin: 0 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
