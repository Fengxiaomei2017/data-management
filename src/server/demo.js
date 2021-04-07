import http from './http'

export default {
  addSemesterDto: function (data) {
      return http('/api/app/semester', data, POST)
  }
}
