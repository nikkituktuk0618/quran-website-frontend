export const getToken = () =>{
    const token = localStorage.getItem("accessToken")
    return token;
}

export const decodeToken = () =>{
    const token = localStorage.getItem("accessToken")
    if(!token) return {}
    const parts = token.split('.');
    
    // Decode the payload
    const payload = parts[1];
    const decodedPayload = atob(payload);

    // Parse the JSON data
    const jsonPayload = JSON.parse(decodedPayload);
    return jsonPayload;
}

export const logout = () =>{
    localStorage.removeItem("accessToken");
    window.location.href = "/"
}