import React from 'react';
import { HoverSite, OffHover, Wrap } from './style';

const Card = ({ title, comment, hoverText, hoverImage }) => (
  <Wrap>
    <OffHover>
      <OffHover.ArrowIcon src='https://online.pdp.uz/assets/icons/top-right.svg' />
      <OffHover.Wrap>
        <OffHover.ClockIcon
          className='clock'
          src='https://online.pdp.uz/assets/newPdp/icons/usualEducation.svg'
        />
        <OffHover.Title className='title'>{title}</OffHover.Title>
        <OffHover.Commnet className='comment'>{comment}</OffHover.Commnet>
        <HoverSite.Text className='hoverText'>{hoverText}</HoverSite.Text>
        <HoverSite.Image className='hoverImage' src={hoverImage} />
      </OffHover.Wrap>
    </OffHover>
    {/* <HoverSite className='hover_site'></HoverSite> */}
  </Wrap>
);

export default Card;
