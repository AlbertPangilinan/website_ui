import * as api from './api'

export async function getAllProjects() : Promise<any> {
    return await api.get('http://localhost:5000/projects');
}

export async function getProjectById(id : string) : Promise<any> {
    return await api.get(`http://localhost:5000/project/${id}`);
}

export async function getProjectsByTag(tag : string) : Promise<any> {
    return await api.get(`http://localhost:5000/projects${tag}`);
}