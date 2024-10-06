import React from 'react'

function Showcase() {
  return (
    <div className='hero-container'>
      <video src='/videos/Railway.mp4' autoPlay loop muted />
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div> */}
    </div>
  );
}

export default Showcase;

