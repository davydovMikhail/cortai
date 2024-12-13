import { useState, useEffect, useRef, useCallback } from "react";
import VectorsWrapper3 from '../images/Vectors-Wrapper_3.svg';
import VectorsWrapper4 from '../images/Vectors-Wrapper_4.svg';
import VectorsWrapper11 from '../images/Vectors-Wrapper_11.svg';
import { useTypedSelector } from '../storeHooks/useTypedSelector';
import { useActions } from '../storeHooks/useActions';
import MsgItem from "./msgitem";

const Chat = () => {
    const { messages } = useTypedSelector(state => state.main);
    const { PushMessage, ClearMessages } = useActions();

    const [inputMessage, setInputMessage] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    let ws = useRef<any>(null);
    
    useEffect(() => {
        if (isOpen) {
            let history = getMessages();
            
            // ws.current = new WebSocket("wss://194.87.97.198:16804"); // создаем ws соединение
            ws.current = new WebSocket("wss://x2ecosystem.io:16804"); // создаем ws соединение
            ws.current.onopen = () => sendMessage(ws.current, history);	// callback на ивент открытия соединения
            ws.current.onclose = () => setIsOpen(false); // callback на ивент закрытия соединения

            gettingData();
        }

        // return () => ws.current.close(); // кода меняется isPaused - соединение закрывается
    }, [ws, isOpen]);

    function getLastMessages() {
        return messages[messages.length - 1];
    }

    const gettingData = useCallback(() => {
        if (!ws.current) return;
        ws.current.onmessage = (e: any) => {                //подписка на получение данных по вебсокету
            if (!isOpen) return;
            let obj = JSON.parse(e.data); // получили obj.part
            let lstMsg = getLastMessages();
            concatContent(lstMsg, obj.part);
        };
    }, [isOpen]);

    function concatContent(message: any, added: string) {        
        let newMsg = message;
        newMsg.content = newMsg.content.concat(added);
        return newMsg;
    }

    function getMessages() {
        return messages;
    }

    function sendMessage(ws: any, history: any[]) {
        let sendData = 
            {
                "message": inputMessage,
                "history": history
            };        
        let dataStringify = JSON.stringify(sendData);
        ws.send(dataStringify);
        setInputMessage("");
    }

    const openWS = async (e: any) => {        
        e.preventDefault();
        let dataForPushUser = {
            "role": "user",
            "content": inputMessage
        }
        let dataForPushAssistant = {
            "role": "assistant",
            "content": ""
        }
        PushMessage(dataForPushUser);
        PushMessage(dataForPushAssistant);
        setIsOpen(true);
    }

    const onChangeHandler = (event: any) => {        
        setInputMessage(event.target.value);
    };
    
    function clearMsgs() {
        ClearMessages();
    }

    return (
        <>
            <div className="_6">
              <div className="message">
                <div className="frame-48096125">
                  <div className="frame-48096124">
                    <img src={VectorsWrapper11} loading="lazy" width="48" height="48.000003814697266" alt="" className="vectors-wrapper-13" />
                    <div className="text-8">Cortana chat</div>
                    <img src={ VectorsWrapper3 } loading="lazy" width="26" height="26" alt="" className="vectors-wrapper-14" />
                  </div>
                </div>
                <div style={{ cursor: "pointer" }} onClick={() => clearMsgs()} className="frame-2072749665">
                  <div className="frame-48096132"><img src={ VectorsWrapper4 } loading="lazy" width="24" height="24" alt="" className="vectors-wrapper-15" /></div>
                </div>
              </div>
              <div className="frame-2072749680">
                <div className="frame-2072749679">
                  <div className="message-4">
                    <div className="text-14">Can I help you?</div>
                  </div>
                </div>
                {   
                    getMessages().map((msg, index) => MsgItem(msg, index)) 
                }
              </div>
              <div className="div-block">
                <div className="w-form">
                  <form 
                    id="email-form" 
                    name="email-form" 
                    data-name="Email Form" 
                    method="get" 
                    className="form-2" 
                    data-wf-page-id="6717b20bef0a0bfd61efa9ba" 
                    data-wf-element-id="6c10236e-2f11-ba2a-50d6-560a228f000f"
                    onSubmit = {openWS}
                >
                    <input 
                        className="text-field-2 w-input" 
                        name="field" 
                        data-name="Field" 
                        placeholder="Message..." 
                        type="text" 
                        id="field"
                        onChange={onChangeHandler}
                        value={inputMessage} 
                        autoComplete="off"
                    />
                    <input 
                        type="submit" 
                        data-wait="Please wait..." 
                        className="submit-button-2 w-button" 
                        value="Send" 
                        disabled={isOpen}
                    />
                  </form>
                </div>
              </div>
            </div>
        </>
    );

}

export default Chat;