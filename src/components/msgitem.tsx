

type IMsg = any;

const MsgItem = (props: IMsg, index: number) => {



    if (props.role == "user") {
        return (
            <>
                <div 
                    className="message-2"
                    key={index}
                >
                    <div className="text-14">{props.content}</div>
                </div>
            </>    
        )
    }

    if (props.role == "assistant") {
        return (
            <>
                <div 
                    className="frame-2072749679"
                    key={index}
                >
                    <div className="message-4">
                        <div className="text-14">{props.content}</div>
                    </div>
                </div>
            </>    
        )
    }
    

}

export default MsgItem;