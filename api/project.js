import axios from "./config.js";

const getProjects = () => {
  return axios.get(`/projects`);
};
const deleteProject = (id) => {
  return axios.delete(`/projects/${id}`);
};
const getProject = (id) => {
  return axios.get(`/projects/${id}`);
};
const updateProject = (project) => {
  return axios.put(`/projects/${project.id}`, project);
};
const addProject = (project) => {
  return axios.post(`/projects`, project);
};

const getProjectByCategory = (id) => {
  return axios.get(`/categories/${id}?_embed=projects`);
};

export {
  getProjects,
  deleteProject,
  getProject,
  updateProject,
  addProject,
  getProjectByCategory,
};
