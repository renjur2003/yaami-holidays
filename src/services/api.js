import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Removed interceptor as auth is removed

export const getBoats = async () => {
    const response = await api.get('/boats');
    return response.data;
};

export const getBoatById = async (id) => {
    const response = await api.get(`/boats/${id}`);
    return response.data;
};

export const createEnquiry = async (enquiryData) => {
    const response = await api.post('/bookings', enquiryData);
    return response.data;
};

export const getEnquiries = async () => {
    const response = await api.get('/bookings');
    return response.data;
};

export const createBoat = async (boatData) => {
    const response = await api.post('/boats', boatData);
    return response.data;
};

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    const response = await api.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};

export default api;
