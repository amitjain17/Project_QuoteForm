import axios from "axios";

const url = 'https://quote-form.herokuapp.com/student';

//For Testing Purpose
const url1 = 'http://localhost:8083/login';


export const fetchData = () => axios.get(`${url}`);
export const generateData = async (newForm) => await axios.post(url, newForm);
export const updateData = (id, updateForm) => axios.put(`${url}/${id}`, updateForm);
export const deleteData = (id) => axios.delete(`${url}/${id}`);

export const validate = (data) => axios.post(url1, data).then(console.log(data));

// export const fetchPosts = () => axios.get(url);

// export const updatePost = (id, updatePost) => axios.patch(`${url}/${id}`, updatePost)
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);