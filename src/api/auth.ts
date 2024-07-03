/* eslint-disable import/prefer-default-export */

const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT || "";

export interface IVerifyDataResponse {
  access_token: string;
}

export const verifyAuthTgData = async ({
  tgData,
}: any): Promise<IVerifyDataResponse> => {
  const response = await fetch(`${endpoint}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tgData),
  });

  if (!response.ok) {
    const errorData: any = await response.json();
    throw new Error(errorData);
  }

  return response.json();
};

export const startPurchase = async (token: string): Promise<string> => {
  const response = await fetch(`${endpoint}/payment/create-stars-invoice`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData: any = await response.json();
    throw new Error(errorData.message || "Failed to start purchase");
  }

  const data = await response.json();
  return data.invoiceUrl; // Предполагается, что сервер возвращает invoiceUrl
};
