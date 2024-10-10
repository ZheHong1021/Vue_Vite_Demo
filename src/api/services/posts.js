import BaseService from '@/api/BaseService'
import server from '@/api/server'

class PostService extends BaseService {
  constructor() {
    super('posts')
  }
}

export default new PostService()
