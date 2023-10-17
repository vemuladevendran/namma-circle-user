export const Token = () => {
  const tokenKey = "AUTH_TOKEN";

  const saveToken = (data) => {
    const details = JSON.stringify(data);
    localStorage.setItem(tokenKey, details);
  };

  const getToken = () => {
    return localStorage.getItem(tokenKey);
  };

  const isTokenExist = () => {
    return !!getToken();
  };

  const removeToken = () => {
    localStorage.removeItem(tokenKey);
  };

  const getTokenPayloadData = () => {
    const token = JSON.parse(getToken());
    const base64PayloadData = token.split(".")[1].split(".")[0];
    const payload = Buffer.from(base64PayloadData, "base64");
    const data = JSON.parse(payload.toString()).data;
    return data;
  };

  return {
    saveToken,
    getToken,
    isTokenExist,
    removeToken,
    getTokenPayloadData,
  };
};

export default Token;
