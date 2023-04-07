import axios from "axios";


const POLYGON_API_KEY = "PxjglkVHQ7ta_KqA8LjGYXG3KCDEPw5_"

const axiosClient = axios.create({
baseURL: 'http://localhost:5000/api'
})

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  config.headers.Authorization = `Bearer ${token}`
  return config;
})

const axiosClientPolygon = axios.create({
  baseURL: 'https://api.polygon.io/'
  })
  
  axiosClientPolygon.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${POLYGON_API_KEY}`
    return config;
  })


export { axiosClient, axiosClientPolygon  }