import server from '@/api/server'

class BaseServer {
  constructor(resource) {
    // 透過建構子取得 resource
    this.resource = resource
  }

  get_all(params) {
    return server.get(`/${this.resource}`, { params })
  }

  get_by_id(id, params) {
    return server.get(`/${this.resource}/${id}`, { params })
  }

  create(data) {
    return server.post(`/${this.resource}`, data)
  }

  update(id, data) {
    return server.put(`/${this.resource}/${id}`, data)
  }

  patch(id, data) {
    return server.patch(`/${this.resource}/${id}`, data)
  }

  delete(id) {
    return server.delete(`/${this.resource}/${id}`)
  }
}

export default BaseServer
