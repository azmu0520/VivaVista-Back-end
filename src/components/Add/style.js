import styled from 'styled-components';
import { ReactComponent as Download } from '../../assets/icons/download.svg';

export const Wrap = styled.div`
  background-color: #f8fafc;
`;

Wrap.Header = styled.div`
  display: flex;
  align-items: center;
  padding: 32px;
`;

Wrap.Title = styled.h2`
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.02em;
  color: #303030;
`;

export const AddDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  background: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  padding: 24px;
  margin: 0 24px;
  margin-top: ${({ top }) => (top ? '24px' : '')};
`;

AddDetails.Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

AddDetails.Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: ${({ margin }) => (margin ? '48px' : '')};
`;

AddDetails.Title = styled.h3`
  font-family: 'Roboto-Medium';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
  margin-bottom: 8px;
  span {
    color: #fe346e;
  }
`;

AddDetails.Select = styled.select`
  width: ${({ width }) => (width ? '50%' : '100%')};
  margin-left: ${({ width }) => (width ? 'auto' : '0')};
  height: 48px;
  background: #ffffff;
  border: 0.5px solid #d9d9d9;
  border-radius: 8px;
  padding: 0 12px;
  outline: none;
`;

AddDetails.Input = styled.input`
  outline: none;
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 0.5px solid #d9d9d9;
  border-radius: 8px;
  padding: 12px;
`;

AddDetails.MainTitle = styled.h2`
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: #303030;
`;

AddDetails.AccountWrap = styled.div`
  display: flex;
  align-items: center;
`;

AddDetails.Swtich = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #8c8c8c;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-left: 12px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input[type='checkbox']:checked + .slider {
    background-color: #2196f3;
  }

  /* input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  } */

  input:checked + .slider:before {
    /* -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px); */
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export const Excell = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;

  margin: 24px 32px;
`;
Excell.Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

Excell.DownloadItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;

Excell.Download = styled(Download)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

Excell.Image = styled.img`
  width: 100%;
  height: 194px;
`;

export const Proxy = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  margin: 24px 32px;
  padding: 24px;
`;

Proxy.Btns = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 40px;
  div {
    margin-right: 10px;
  }
`;
