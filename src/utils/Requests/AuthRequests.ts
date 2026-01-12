const BaseURL = "http://localhost:5181";

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
