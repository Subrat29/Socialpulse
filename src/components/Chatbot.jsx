import { useState, useEffect } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { MessageCircle, X } from 'lucide-react'

const defaultMessage = {
  text: "Hello! I'm your AI assistant for social media analytics. How can I help you today?",
  isUser: false
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([defaultMessage])
    }
  }, [isOpen])

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }])
      // Simulated bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "I'm analyzing your request. Please note that I'm a demo chatbot and my responses are simulated.", 
          isUser: false 
        }])
      }, 1000)
      setInput('')
    }
  }

  return (
    <>
      {!isOpen && (
        <Button
          className="fixed bottom-4 right-4 rounded-full p-4"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle size={24} />
        </Button>
      )}
      {isOpen && (
        <Card className="fixed bottom-4 right-4 w-80">
          <CardHeader className="flex flex-row items-center">
            <CardTitle className="flex-grow">AI Assistant</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X size={24} />
            </Button>
          </CardHeader>
          <CardContent className="h-64 overflow-y-auto">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-2 ${message.isUser ? 'text-right' : 'text-left'}`}
              >
                <span 
                  className={`inline-block p-2 rounded-lg ${
                    message.isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <div className="flex w-full space-x-2">
              <Input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button onClick={handleSend}>Send</Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  )
}