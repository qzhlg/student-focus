import instance from '../utils/interface'
// 登陆
export function UserLogin(payload) {
  const url = "/emstu/teacher/login"
  return instance.post(url, payload)
}
// 注册
export function UserRegistry(payload){
  console.log(payload)
  const url="/emstu/teacher/register"
  return instance.post(url,payload)
}
// 获取用户信息
export function getUserInfo(){
  const url="/emstu/teacher/checkuser"
  return instance.post(url)
}
// 重点名单列表
export function getSeriousList(){
  const url="/emstu/student/lists"
  return instance.get(url)
}
// 添加重点学生
export function addSeriousStudent(params){
  const url="/emstu/student/add"
  return instance.put(url,params)
}
// 班级列表
export function classList(params){
  const url="/emstu/class/lists"
  return instance.get(url,params)
}
// 创建班级
export function createClass(params){
  const url="/emstu/class/create"
  return instance.put(url,params)
}
// 成绩列表
export function achieveMent(){
  const url="/emstu/student/recordlists"
  return instance.get(url)
}
// 添加成绩
export function addAchieveMent(params){
  const url="/emstu/student/addrecord"
  return instance.put(url,params)
}