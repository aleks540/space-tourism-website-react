import React from 'react';
import './Home.scss';
import BtnExplore from '../../components/buttons/BtnExplore';


const Home = () => {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="left">
          <div className="text-preset-5">

            So, you want to travel to
          </div>
          <div className="text-preset-1">
            SPACE
          </div>

          <div className="text-preset-9">
            Let’s face it; if you want to go to space, you might as well genuinely go <br></br>
            to outer space and not hover kind of on the edge of it. Well sit back, <br></br>
            and relax because we’ll give you a truly out-of-this-world experience!
          </div>
        </div>
        <div className="right">
          <BtnExplore/>
        </div>
      </section>
    </main>
  )
}

export default Home