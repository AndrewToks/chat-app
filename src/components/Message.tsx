type MessageProps = {
  message: {
    id: number;
    message: string;
  };
};

const Message = ({ message }: MessageProps) => {
  return <div>{message.message}</div>;
};

export default Message;
