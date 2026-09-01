export interface ChatMessage {
  messageId: number;
  incidentReportId: number;
  senderId: number;
  senderName: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

export interface ChatParticipant {
  userId: number;
  userName: string;
  role: string;
  lastSeen: string;
}

// Chat API functions
export const fetchIncidentChatMessages = async (incidentReportId: number): Promise<ChatMessage[]> => {
  const token = localStorage.getItem("accessToken");
  const response = await fetch(
    `http://localhost:5181/api/employer/IncidentReports/${incidentReportId}/chat`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  
  if (!response.ok) throw new Error("Failed to fetch chat messages");
  return await response.json();
};

export const sendChatMessage = async (
  incidentReportId: number,
  message: string
): Promise<ChatMessage> => {
  const token = localStorage.getItem("accessToken");
  const response = await fetch(
    `http://localhost:5181/api/employer/IncidentReports/${incidentReportId}/chat`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    }
  );
  
  if (!response.ok) throw new Error("Failed to send message");
  return await response.json();
};

export const markMessagesAsRead = async (incidentReportId: number): Promise<void> => {
  const token = localStorage.getItem("accessToken");
  await fetch(
    `http://localhost:5181/api/employer/IncidentReports/${incidentReportId}/chat/read`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const fetchChatParticipants = async (incidentReportId: number): Promise<ChatParticipant[]> => {
  const token = localStorage.getItem("accessToken");
  const response = await fetch(
    `http://localhost:5181/api/employer/IncidentReports/${incidentReportId}/chat/participants`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  
  if (!response.ok) throw new Error("Failed to fetch participants");
  return await response.json();
};