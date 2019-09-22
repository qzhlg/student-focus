import request from '../utils/request';

export function query() {
  return request('/api/users');
}

// export function President(){
//   return request('http://{{hp}}/emstu/class/create')
// }