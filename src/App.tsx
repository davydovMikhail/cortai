import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useActions } from './storeHooks/useActions';

function App() {
  

  return (
    <>
      <section className="section">
        <div id="w-node-_438df5a7-ec38-3fa2-8541-5f4b6bc41c3d-61efa9ba" className="w-layout-layout quick-stack wf-layout-layout">
          <div id="w-node-_438df5a7-ec38-3fa2-8541-5f4b6bc41c3e-61efa9ba" className="w-layout-cell cell">
            <h1 className="heading">Tokenomics</h1>
          </div>
          <div id="w-node-_438df5a7-ec38-3fa2-8541-5f4b6bc41c3f-61efa9ba" className="w-layout-cell cell-3">
            <div className="w-layout-blockcontainer container w-container"></div>
            <h1 className="heading main">Cortana AI - $cort</h1>
          </div>
          <div id="w-node-f009a186-84ea-db52-5fb9-54849d141fa9-61efa9ba" className="w-layout-cell chat">
            <h1 className="heading">user info</h1>
          </div>
          <div id="w-node-_7faf3c8f-5074-3892-6742-42bd61e9560e-61efa9ba" className="w-layout-cell cell">
            <h1 className="heading">contract</h1>
          </div>
          <div id="w-node-_948ec0e0-45f5-d4b8-747c-a3cfd2c033f7-61efa9ba" className="w-layout-cell cell-user">
            <h1 className="heading">Chat ai</h1>
          </div>
          <div id="w-node-_53038b5b-c0e3-ea68-504e-ece5171b7ddd-61efa9ba" className="w-layout-cell cell">
            <h1 className="heading">links</h1>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </>
    
  );
}

export default App;
