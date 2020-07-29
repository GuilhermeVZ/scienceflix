import styled from 'styled-components';

export const SpanTitle = styled.span`
  opacity: 0;
  background-color: rgba(0,0,0,.6);
  color: #ffffff;
  text-shadow: 1px 1px 3px #000000;
  width:100%;
  height:100%;
  transition: all 1s;
  padding-top: 40%;
  padding-left: 10%;
  &:hover {
    opacity: 1;
  }
`;

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 169px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: all 1s;

  &:hover,
  &:focus {
    margin: 0 50px;

    transform: scale(1.4);



  }


  &:not(:first-child) {
    margin-left: 20px;
  }
`;
