import { getToken } from "./tokens";

export const getHeaderConfig = (type) => {
  switch (type) {
    case "withtoken": {
      const accessToken = getToken();
      return {
        Authorization: `Bearer ${accessToken}`,
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
