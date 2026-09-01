const BaseURL = "http://192.168.1.178:5181";

export const fetchUser = async (token: string) => {
  const response = await fetch(`${BaseURL}/auth/profile`, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response
}

export const fetchOrgMembers = async () => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`${BaseURL}/api/admin/Organisations/users`, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response
}

export const fetchOrgCaseAdmins = async () => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`${BaseURL}/api/admin/Organisations/case-admins`, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response
}

export const updatePassword = async (data: object, orgId: number) => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`${BaseURL}/user/${orgId}/change-password`, {
    method: 'PUT',
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  return response
}

export const updateUserDetails = async (data: object) => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`${BaseURL}/user`, {
    method: 'PATCH',
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  return response
}

export const updateOrgDetails = async (data: object) => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`${BaseURL}/user/organisation`, {
    method: 'PATCH',
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  return response
}
