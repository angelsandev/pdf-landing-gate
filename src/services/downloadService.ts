import api from './api';

export const downloadService = {
  sendEmail: async (email: string) => {
    const response = await api.post('/downloads/', { email });
    return response.data;
  }
};
