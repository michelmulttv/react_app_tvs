import logo from '../logo.svg';
import './Home.css';
import ReactPlayer from "react-player";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}


        <ReactPlayer
                            className='react-player'
                            // url={program ? program.url_channel: ""}
                            url='https://multtvcdn.multtv.tv.br:1443/TVGazeta.m3u8'
                            playing={true}
                            width='100%'
                            height='100%'
                            />

      </header>
    </div>
  );
}

export default Home;
