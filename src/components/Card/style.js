import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  margin-top: 40px;
  :hover {
    .hover_site {
      display: flex !important;
    }
  }
`;
export const HoverSite = styled.div`
  /* display: none;
  position: absolute;
  width: 100%;
  max-height: 100%;
  height: 100%;
  color: #fff;
  background: #00b533;
  top: 0px;
  left: 0;
  padding: 65px 0px 65px 64px;
  border-right: 2px solid #fff; */
`;

HoverSite.Text = styled.div`
  display: none;
  font-size: 20px;
  line-height: 28px;
  color: #fff;
  font-family: 'Sfpro-Regular';
  line-height: 35px;
  padding-right: 20px;
`;
HoverSite.Image = styled.img`
  display: none;
  width: 201px;
  height: 204px;
  margin-top: auto;
`;

export const OffHover = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #f8f8f8;
  padding: 30px 30px 65px 64px;
  width: 100%;
  height: 400px;
  border-right: 2px solid #fff;
  overflow-y: hidden;
  :hover {
    .title,
    .clock,
    .comment {
      display: none;
    }
  }
`;

OffHover.ArrowIcon = styled.img`
  position: absolute;
  z-index: 100;
  top: 25px;
  right: 25px;
  width: 60px;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  padding: 16px;
`;

OffHover.Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

OffHover.ClockIcon = styled.img`
  width: 27px;
  height: 32px;
`;

OffHover.Title = styled.h3`
  font-size: 30px;
  line-height: 25px;
  font-family: 'Sfpro-Bold';
  letter-spacing: -0.12px;
  color: #000;
  margin-top: 30px;
`;

OffHover.Commnet = styled.span`
  font-family: 'Sfpro-Regular';
  font-size: 16px;
  line-height: 20px;
  margin-top: 12px;
  color: #898989;
  padding-right: 35px;
`;
