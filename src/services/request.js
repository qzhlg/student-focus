import instance from '../utils/interface'

export function UserLogin(payload) {

  const url = "/emstu/teacher/login"
  return instance.post(url, payload)
}

export function UserRegistry(payload){
  console.log(payload)
  const url="/emstu/teacher/register"
  return instance.post(url,payload)
}