import axios, { AxiosRequestConfig } from 'axios';

interface CallAPIProps extends AxiosRequestConfig {
  token?: string;
  serverToken?: string;
  data?: any;
  url?: string;
  method?: string;
  params?: any;
}

export default async function callAPI({
  url,
  method = 'GET',
  data,
  token,
  serverToken,
  params,
}: CallAPIProps) {
  let headers: Record<string, string> = {};

  // Set headers jika token digunakan
  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  } else if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  try {
    // Lakukan request ke server menggunakan axios
    const response = await axios({
      url,
      method,
      data,
      headers,
      params,
    });

    // Mengambil data dari response
    const { length } = Object.keys(response.data);
    const res = {
      error: false,
      message: response.data.message || 'Request successful',
      data: length > 1 ? response.data : response.data.data,
    };

    return res;
  } catch (err: any) {
    // Jika ada error, tangkap dan tangani dengan aman
    const message =
      err.response?.data?.message || 'An unknown error occurred'; 

    const res = {
      error: true,
      message,
      data: null,
    };

    // Log jika diperlukan untuk debugging
    console.log('Error in callAPI:', err);

    // Kembalikan error response
    return res;
  }
}
