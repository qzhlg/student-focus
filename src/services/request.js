import instance from '../utils/interface'


// export async function UserLogin(payload){
//   const url="/api/emstu/teacher/login"
//   console.log(payload)
//   return await request.post(url,{
//     ...payload
//   })
// }
export function UserLogin(payload) {
  console.log(payload)
  const url = "/emstu/teacher/login"
  return instance.post(url, payload)
}
