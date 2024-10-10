import axios from 'axios'

const server = axios.create({
  baseURL: '/api',
  withCredentials: true
  // timeout: 20000, // 請求時間超過 20000毫秒(20秒)，請求會被中止

  // 序列化參數 ???
  // paramsSerializer: (params) => qs.stringify(params, { indices: false })

  // 在上傳、下載途中可執行的事情 (progressBar、Loading)
  // onUploadProgress(progressEvt) { /* 原生 ProgressEvent */  },
  // onDownloadProgress(progressEvt) { /* 原生 ProgressEvent */ },
})

// 攔截 API request 的請求
server.interceptors.request.use(
  async (request) => {
    return request
  },
  (error) => {
    // 如果送出前失敗了，這邊就可以做一些處理
    return Promise.reject(error)
  }
)

// 攔截 API response 的回傳
server.interceptors.response.use(
  (response) => {
    // 這邊可以對回來的資料先進行驗證處理，再來決定要不要把資料給吐出去
    return Promise.resolve(response)
  },
  async (error) => {
    const { response, request } = error

    if (response) {
      return Promise.reject(error.response.data)
    } else if (error.request) {
      console.error('No response received from the server.')
    } else {
      console.error('Error sending the request:', error.message)
    }

    // can not receive response
    // 請求過時或者是斷網
    if (!window.navigator.onLine) {
      console.log('There are some problems on network. Please reload again')
    } else {
      // maybe Program have some problem
      return Promise.reject(err)
    }

    return Promise.reject(error)
  }
)

export default server
