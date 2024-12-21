import Message from "./Message"
const ChatBox = () => {
    const messages = [
        {
            id:1,
            message:"Hello there"
        },
        {
            id:2,
            message:"Hi"
        }
    ]
  return (
    <div className="pb-44 pt-20 containerWrap">
        {messages.map((message)=>(
            <Message key={message.id} message= {message} />
        ))}
    </div>
  )
}

export default ChatBox