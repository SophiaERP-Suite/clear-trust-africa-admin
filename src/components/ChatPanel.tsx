// ChatPanel.tsx
import { useState, useEffect, useRef } from "react";
import { Send, Paperclip, Smile, Check, CheckCheck } from "lucide-react";
import { type ChatMessage, type ChatParticipant, markMessagesAsRead, fetchIncidentChatMessages, fetchChatParticipants, sendChatMessage } from "../utils/Requests/IncidentRequests";



interface ChatPanelProps {
  incidentReportId: number;
  currentUserId: number;
  currentUserName: string;
  onClose: () => void;
}

export default function ChatPanel({ 
  incidentReportId, 
  currentUserId,
  onClose 
}: ChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [participants, setParticipants] = useState<ChatParticipant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadChatData();
    markMessagesAsRead(incidentReportId);
    const interval = setInterval(loadChatData, 5000);
    
    return () => clearInterval(interval);
  }, [incidentReportId]);

  const loadChatData = async () => {
    try {
      const [resMessages, resParticipants] = await Promise.all([
        fetchIncidentChatMessages(incidentReportId),
        fetchChatParticipants(incidentReportId)
      ]);
      if (resMessages.status === 200) {
        const fetchedMessages: ChatMessage[] = await resMessages.json()
        setMessages(fetchedMessages);
      }
      if (resParticipants.status === 200) {
          const fetchedParticipants: ChatParticipant[] = await resParticipants.json();
          setParticipants(fetchedParticipants);
      }
    } catch (error) {
      console.error("Error loading chat:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || isSending) return;

    setIsSending(true);
    try {
      const resSent = await sendChatMessage(incidentReportId, newMessage);
      if (resSent.status === 200) {
        const sentMessage: ChatMessage = await resSent.json()
        setMessages(prev => [...prev, sentMessage]);
      }
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSending(false);
    }
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6">
          <p>Loading chat...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-[80vh] flex flex-col">
        {/* Chat Header */}
        <div className="border-b p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Incident Chat</h3>
            <p className="text-sm text-gray-500">
              {participants.length} participants
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Participants List (Optional Sidebar) */}
        <div className="border-b p-3 bg-gray-50">
          <div className="flex items-center gap-2 overflow-x-auto">
            {participants.map(participant => (
              <div
                key={participant.userId}
                className="flex flex-col items-center px-3 py-1 bg-white rounded-lg border"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                  {participant.userName.charAt(0)}
                </div>
                <span className="text-xs mt-1">{participant.userName}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Messages Container */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4"
        >
          {messages.map(message => {
            const isOwnMessage = message.senderId === currentUserId;
            
            return (
              <div
                key={message.messageId}
                className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    isOwnMessage
                      ? 'bg-blue-500 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold">
                      {message.senderName}
                    </span>
                    <span className="text-xs opacity-75">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                  <p className="whitespace-pre-wrap">{message.message}</p>
                  <div className="flex justify-end mt-1">
                    {isOwnMessage && (
                      <span className="text-xs">
                        {message.isRead ? (
                          <CheckCheck size={12} />
                        ) : (
                          <Check size={12} />
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="border-t p-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <Paperclip size={20} />
            </button>
            <button
              type="button"
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <Smile size={20} />
            </button>
            
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e);
                }
              }}
            />
            
            <button
              type="submit"
              disabled={isSending || !newMessage.trim()}
              className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}