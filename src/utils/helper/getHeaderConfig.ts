import { getToken } from "./tokens";

export const getHeaderConfig = (type) => {
  const accessToken = getToken();
  switch (type) {
    case "withToken": {
      return {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      };
    }
    case "withoutToken":{
        return {
            "Content-Type": "application/json",
          };
    }
  }
};
