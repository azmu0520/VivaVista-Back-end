import React, { useState } from 'react';
import { Wrap, AntModal } from './style';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Wrap>
      <Wrap.Lines>
        <Wrap.Line className='line-1' />
        <Wrap.Line className='line-2' />
        <Wrap.Line className='line-3' />
      </Wrap.Lines>
      <Wrap.Title>
        DASTURLASHNI QULAY <span> MUHITDA </span>O‘RGANING
      </Wrap.Title>
      <Wrap.Image
        src='https://online.pdp.uz/assets/newPdp/bg-home.svg'
        alt='image'
      />
      <Wrap.Video>
        <img
          onClick={() => setIsModalOpen(true)}
          src='https://online.pdp.uz/assets/icons/play-video.svg'
          alt='play'
        />
      </Wrap.Video>
      <AntModal open={isModalOpen} onCancel={handleCancel} footer={null}>
        <iframe
          width='730'
          height='410'
          src='https://www.youtube.com/embed/IlVpkBf3McU?autoplay=1'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </AntModal>
    </Wrap>
  );
};

export default Home;
