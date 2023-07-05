import axios from 'axios';


// const apiUrl = "https://localhost:7113"
axios.defaults.baseURL = 'https://localhost:7113';
export default {
  getTasks: async () => {
    const result = await axios.get(`/items`)    
    return result.data;
  },


  addTask: async(name)=>{
    const result = await axios.post(`/items`,{name:name,isComplete:false})    
    return result.data;
  },


  setCompleted: async (id, isComplete) => {
    await axios.put(`/items/${id}?isComplete=${isComplete}`)
     
  },


  deleteTask:async(id)=>{
    const result = await axios.delete(`/items/${id}`)    
    return result.data;
  }
};
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.error(error);
  return Promise.reject(error);
});
