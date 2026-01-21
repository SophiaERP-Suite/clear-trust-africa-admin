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

export const fetchAllIncidentReports = async (filterData: object) => {
  const token = localStorage.getItem('accessToken');
  const params = new URLSearchParams();
  Object.entries(filterData).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== "") {
      params.append(key, value);
    }
  })
  const url = `${BaseURL}/api/employer/IncidentReports?${params}`;
  console.log(url);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response
}

export const fetchAllIncidentReportsForSearch = async (filterData: object) => {
  const token = localStorage.getItem('accessToken');
  const params = new URLSearchParams();
  Object.entries(filterData).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== "") {
      params.append(key, value);
    }
  })
  const url = `${BaseURL}/api/employer/IncidentReports/cta-search?${params}`;
  console.log(url);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response
}

export const matchIncidentDataToApplication = async (data: FormData) => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`${BaseURL}/api/employer/IncidentReports/match-search`, {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${token}`
    },
    body: data
  })
  return response
}

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

export const fetchDbsPartners = async () => {
  const token = localStorage.getItem("accessToken");

  const response = await fetch(`${BaseURL}/api/admin/DbsPartners/GetAll`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response;
}

export const fetchEscalations = async (incidentReportId: number) => {
  const token = localStorage.getItem("accessToken");

  const response = await fetch(`${BaseURL}/api/employer/IncidentEscalation/${incidentReportId}/GetAll`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response;
};

export const fetchIncidentReportById = async (incidentReportId: number) => {
  const token = localStorage.getItem("accessToken");

  const response = await fetch(`${BaseURL}/api/employer/IncidentReports/${incidentReportId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response;
};

export const createNewIncidentReport = async (data: FormData) => {
  const token = localStorage.getItem("accessToken");
  const response = await fetch(
    `${BaseURL}/api/employer/IncidentReports`,
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

export const fetchIncidentAction = async () => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`${BaseURL}/incident-action-type`, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response
}

export const submitIncidentAction = async (data: FormData) => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`${BaseURL}/incident-action-type`, {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${token}`
    },
    body: data
  })
  return response
}

export const updateIncidentAction = async (data: FormData, actionId: number) => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`${BaseURL}/incident-action-type/${actionId}`, {
    method: 'PATCH',
    headers: {
      "Authorization": `Bearer ${token}`
    },
    body: data
  })
  return response
}

export const fetchDBSPartner = async (filterData: object) => {
  const token = localStorage.getItem('accessToken');
  const params = new URLSearchParams();
  Object.entries(filterData).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== "") {
      params.append(key, value);
    }
  })
  const url = `${BaseURL}/dbs-partners?${params}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response
}

export const submitDBSPartner = async (data: FormData) => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`${BaseURL}/dbs-partners`, {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${token}`
    },
    body: data
  })
  return response
}

export const updateDBSPartner = async (data: FormData, partnerId: number) => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`${BaseURL}/dbs-partners/${partnerId}`, {
    method: 'PATCH',
    headers: {
      "Authorization": `Bearer ${token}`
    },
    body: data
  })
  return response
}

export const updateIncidentReportStatus = async (data: FormData, reportId: number) => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`${BaseURL}/api/employer/IncidentReports/${reportId}/updateStatus`, {
    method: 'PUT',
    headers: {
      "Authorization": `Bearer ${token}`
    },
    body: data
  })
  return response
}

export const fetchIncidentActionByReport = async (filterData: object, reportId: number) => {
  const token = localStorage.getItem('accessToken');
  const params = new URLSearchParams();
  Object.entries(filterData).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== "") {
      params.append(key, value);
    }
  })
  const url = `${BaseURL}/incident-actions/${reportId}/?${params}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response
}

export const submitIncidentActionByReport = async (data: FormData, reportId: number) => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`${BaseURL}/incident-actions/${reportId}/`, {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${token}`
    },
    body: data
  })
  return response
}

export const linkActionToCTAPartner = async (data: FormData, actionId: string) => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`${BaseURL}/incident-actions/partner/${actionId}/`, {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${token}`
    },
    body: data
  })
  return response
}
