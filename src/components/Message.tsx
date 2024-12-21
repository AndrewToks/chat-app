type MessageProps = {
  message: {
    id: number;
    text: string;
  };
};

const Message = ({ message }: MessageProps) => {
  return <div>{message.text}</div>;
};

export default Message;
