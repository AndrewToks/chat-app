type MessageProps = {
  message: {
    id: number;
    text: string;
    name:string;
  };
};

const Message = ({ message }: MessageProps) => {
  return <div>
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="" />
        </div>
      </div>
      <div className="chat-header">
        {message.name}
      </div>
      <div className="chat-bubble">{message.text}</div>
    </div>
  </div>;
};

export default Message;
