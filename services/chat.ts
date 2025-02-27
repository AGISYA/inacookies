import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getChat(id: number | string, userInput: string) {
  const url = `${ROOT_API}/${API_VERSION}/send-data/${id}?user_input=${encodeURIComponent(userInput)}`;

  console.log('URL GET:', url);

  return callAPI({
    url,
    method: 'GET',
    token: 'false',
  });
}

export async function sendChat(
  projectId: number | string,
  phone: string,
  message: string,
  // userId: number | string
) {
  const url = `${ROOT_API}/${API_VERSION}/send-data/${projectId}`;

  console.log("URL POST:", url);

  return callAPI({
    url,
    method: "POST",
    token: 'true',
    data: {
      phone,
      message,
      // user_id: userId,
    },
  });
}