import { jwtDecode } from 'jwt-decode';

const URL = "http://localhost:8000"

export const getAuthToken = () => {
  
  const regex = new RegExp(`(^| )gps=([^;]+)`)
  const match = document.cookie.match(regex)
  if (match) {
      let info = jwtDecode(match[2])
      return info
  }
  return false
 
}
export const getToken = () => {
  const regex = new RegExp(`(^| )gps=([^;]+)`)
  const match = document.cookie.match(regex)
  if (match) {
    return match
  }
  return false
}


export const signIn = async (body) => {
    let res = await fetch(`${URL}/auth/signin`,  {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        method: "POST",
        body: JSON.stringify(body)
    })
    let json = await res.json()

    return json


}
export const signOut = async () => {
    let res = await fetch(`${URL}/auth/logout`,  {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        method: "POST",
    })
    let json = await res.json()

    return json


}

export const addBus = async (body) => {
    let res = await fetch(`${URL}/bus/add`,  {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()[2]}`

        },
        credentials: 'include',
        method: "POST",
        body: JSON.stringify(body)
    })
    let json = await res.json()

    return json


}
export const updateBus = async (body, busId) => {
    let res = await fetch(`${URL}/bus/update/${busId}`,  {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()[2]}`

        },
        credentials: 'include',
        method: "PUT",
        body: JSON.stringify(body)
    })
    let json = await res.json()

    return json


}
export const getBuses = async () => {
    let res = await fetch(`${URL}/bus/bus`,  {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()[2]}`
        },
        credentials: 'include',
        method: "GET"
    })
    let json = await res.json()

    return json


}

export const getBusById = async (busId) => {
    let res = await fetch(`${URL}/bus/bus/${busId}`,  {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()[2]}`
        },
        credentials: 'include',
        method: "GET"
    })
    let json = await res.json()

    return json


}

export const getStudents = async (page, limit) => {
    let res = await fetch(`${URL}/student/students?page=${page}&limit=${limit}`,  {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()[2]}`
        },
        credentials: 'include',
        method: "GET"
    })
    let json = await res.json()

    return json


}

export const getStudentById = async (studentId) => {
    let res = await fetch(`${URL}/student/student/${studentId}`,  {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()[2]}`
        },
        credentials: 'include',
        method: "GET"
    })
    let json = await res.json()

    return json


}