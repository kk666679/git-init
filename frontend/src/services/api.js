const API_BASE_URL = 'http://localhost:5000/api';

export const getProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  return response.json();
};

export const registerVendor = async (vendorData) => {
  const response = await fetch(`${API_BASE_URL}/vendors/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(vendorData),
  });
  return response.json();
};
