import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 68fe4d99babab1927b48945b426820dcadbb90e409b3614ee3a3514dd3f58f2d'
      }
})