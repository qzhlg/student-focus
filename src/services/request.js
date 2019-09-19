import request from '../utils/request';
import axios from 'axios'
export function query() {
  return request('/api/users');
}

export async function UserLogin(payload){
  const url="/api/emstu/teacher/login"
  console.log(payload)
  return await request.post(url,{
    ...payload
  })
}