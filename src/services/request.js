import instance from '../utils/interface'

export function UserLogin(payload) {
  console.log(payload)
  const url = "/emstu/teacher/login"
  return instance.post(url, payload)
}
