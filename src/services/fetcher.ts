export default async (url: string, info: RequestInit) => {
  const response = await fetch(url, info);

  return await response.json();
};
