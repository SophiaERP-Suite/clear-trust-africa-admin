const BaseURL = "http://localhost:5181";

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
export const fetchIncidentChatMessages = async (incidentReportId: number) => {
  const token = localStorage.getItem("accessToken");
  const response = await fetch(
    `${BaseURL}/api/employer/IncidentReports/${incidentReportId}/chat`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  
  return response;
};

export const sendChatMessage = async (
  incidentReportId: number,
  message: string
) => {
  const token = localStorage.getItem("accessToken");
  const response = await fetch(
    `${BaseURL}/api/employer/IncidentReports/${incidentReportId}/chat`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    }
  );
  
  return response;
};

export const markMessagesAsRead = async (incidentReportId: number): Promise<void> => {
  const token = localStorage.getItem("accessToken");
  await fetch(
    `${BaseURL}/api/employer/IncidentReports/${incidentReportId}/chat/read`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const fetchChatParticipants = async (incidentReportId: number) => {
  const token = localStorage.getItem("accessToken");
  const response = await fetch(
    `${BaseURL}/api/employer/IncidentReports/${incidentReportId}/chat/participants`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  
  return response;
};

export const fetchIncidentReports = async (page: number, pageSize: number) => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`${BaseURL}/api/employer/IncidentReports/${page}/${pageSize}/GetAllByAdmin`, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
    return response;
};

export const UpdateStatus = async (incidentReportId: number) => {
  const token = localStorage.getItem("accessToken");

  const response = await fetch(
    `${BaseURL}/api/employer/IncidentReports/${incidentReportId}/updateStatus`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

export const fetchIncidentAttachments = async (incidentReportId: number) => {
  const token = localStorage.getItem("accessToken");

  const response = await fetch(
    `${BaseURL}/api/employer/IncidentAttachments/${incidentReportId}/attachments`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
};

export const createIncidentEscalation = async (
  data: FormData,
  organisationId: number,
  incidentReportId: number
) => {
  const token = localStorage.getItem("accessToken");
  const response = await fetch(
    `${BaseURL}/IncidentEscalation/${organisationId}/${incidentReportId}/register`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    }
  );
  return response;
};

export const fetchIncidentType = async () => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`${BaseURL}/incident-type`, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response
}

export const submitIncidentType = async (data: FormData) => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`${BaseURL}/incident-type`, {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${token}`
    },
    body: data
  })
  return response
}

export const updateIncidentType = async (data: FormData, incidentTypeId: number) => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`${BaseURL}/incident-type/${incidentTypeId}`, {
    method: 'PATCH',
    headers: {
      "Authorization": `Bearer ${token}`
    },
    body: data
  })
  return response
}
