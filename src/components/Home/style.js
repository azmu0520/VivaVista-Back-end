import styled from 'styled-components';
import { Modal } from 'antd';
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 200px;
  position: relative;
`;

export const AntModal = styled(Modal)`
  width: 731px !important;
  .ant-modal-content {
    height: 411px !important;
    padding: 0 !important;
  }
  .ant-modal-close {
    right: -25px;
    color: white;
    /* width: 35px;
    height: 35px; */
    top: 0;
    right: -45px;
    .ant-modal-close-icon svg {
      font-size: 35px;
      font-weight: 300;
    }
  }
  .ant-modal-close:hover {
    background-color: transparent !important;
    color: white !important;
  }
`;

Wrap.Title = styled.h1`
  font-family: 'Sfpro-Bold';
  font-size: 75px;
  line-height: 85px;
  color: #000;
  letter-spacing: -0.3px;
  span {
    color: #00b533;
  }
`;

Wrap.Image = styled.img``;

Wrap.Lines = styled.div`
  .line-1 {
    left: 25%;
  }
  .line-2 {
    left: 59.6%;
  }
  .line-3 {
    right: 0;
  }
`;

Wrap.Line = styled.div`
  position: absolute;
  height: 750px;
  width: 1px !important;
  z-index: -1;
  top: -250px;
  background-color: #e6e6e6;
`;

Wrap.Video = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;
  right: -75px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  /* 
  position: relative; */
  cursor: pointer;
  background-image: url('https://img.youtube.com/vi/IlVpkBf3McU/hqdefault.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  img {
    width: 61px;
    height: 61px;
  }
`;
