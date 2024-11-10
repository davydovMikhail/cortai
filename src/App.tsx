import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useActions } from './storeHooks/useActions';
import VectorsWrapper from './images/Vectors-Wrapper.svg';
import VectorsWrapper1 from './images/Vectors-Wrapper_1.svg';
import VectorsWrapper2 from './images/Vectors-Wrapper_2.svg';
import VectorsWrapper6 from './images/Vectors-Wrapper_6.svg';
import VectorsWrapper7 from './images/Vectors-Wrapper_7.svg';
import VectorsWrapper8 from './images/Vectors-Wrapper_8.svg';
import Girl from './images/Untitled1-1707x943-1.png';
import Chat from './components/chat';

function App() {
  

  return (
    <>
      <section className="section-2">
        <section className="frame-2072749925">
          <div className="frame-2072749926">
            <div className="_1-2">
              <div className="text-6">tokenomics</div>
              <div className="frame-2072749927">
                <div className="frame-2072749923">
                  <div className="text-7">
                    <div className="text-7 text-7"><span className="_84-liquidity-2">84%</span><span className="_84-liquidity-3"> Liquidity</span></div>
                  </div>
                  <div className="text-7">
                    <div className="text-7"><span className="_10-bank-2">10% </span><span className="_84-liquidity-3"> bank</span></div>
                  </div>
                </div>
                <div className="frame-2072749924">
                  <div className="text-7">
                    <div className="text-7"><span className="_10-bank-2">6% </span><span className="_84-liquidity-3">Team</span></div>
                  </div>
                  <a href="#" target="_blank" className="button-4">
                    <div className="text-8">buy</div>
                  </a>
                </div>
              </div><img src={ VectorsWrapper } loading="lazy" alt="" className="image-2" />
            </div>
            <div className="_2-2">
              <div className="text-9">contract</div>
              {/* <img src="placeholder.svg" loading="lazy" alt="" /> */}
              <div className="text-10">XXX...XXX</div>
              <a href="#" className="button-5">
                <div className="text-8">Copy</div>
              </a><img src={ VectorsWrapper } loading="lazy" alt="" className="image-2" />
            </div>
            <div className="_2-2 _3">
              <div className="text-9">links</div>
              <div className="tetx1">Unlock the potential of your projects with Generative GPU. </div>
              <div className="_123-2">
                <a href="#" className="button-6"><img src={VectorsWrapper6} loading="lazy" width="27.69230842590332" height="27.69230842590332" alt="" className="vectors-wrapper-8" /></a>
                <a href="#" className="button-6"><img src={VectorsWrapper7} loading="lazy" width="27.69230842590332" height="27.69230842590332" alt="" className="vectors-wrapper-8" /></a>
              </div><img src={ VectorsWrapper } loading="lazy" alt="" className="image-2" />
            </div>
          </div>
          <div className="_4">
            <div className="text-12">$CORT</div><img src={ Girl } loading="lazy" width="301" height="736" alt="" sizes="(max-width: 479px) 83vw, 301px" className="untitled-1-1707x943-1" />
            <div className="frame-2072749919">
              <div className="text-11">CORTANA AI</div>
              <div className="tetx1">Unlock the potential of your projects with Generative GPU. Gain unparalleled experience in GPU Computing, rent high-performance nodes, and utilize cutting-edge streaming servers.</div>
            </div><img src={ VectorsWrapper } loading="lazy" alt="" className="image-2 _223" /><img src={ VectorsWrapper } loading="lazy" alt="" className="image-2" />
          </div>
          <div className="frame-2072749922">
            <div className="_5">
              <div className="text-13">$CORT study progression</div>
              <div className="_69">69% </div><img src={VectorsWrapper1} loading="lazy" width="228" height="161" alt="" className="vectors-wrapper-11" /><img src={VectorsWrapper8} loading="lazy" alt="" className="image" /><img src={VectorsWrapper2} loading="lazy" width="155" height="155" alt="" className="vectors-wrapper-12" /><img src={ VectorsWrapper } loading="lazy" alt="" className="image-2" />
            </div>
            <Chat />
          </div>
        </section>
      </section>
      <ToastContainer/>
    </>
    
  );
}

export default App;
