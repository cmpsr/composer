import { TOKEN_GENERATOR_URL } from "../constants";

export const fetchAccessToken = async (identity: string) => {
  return await fetch(TOKEN_GENERATOR_URL, {
    method: "POST",
    body: JSON.stringify({
      identity: identity,
      device: "browser",
    }),
  })
    .then(response => response.json())
    .then(result => result.token)
    .catch(error => {
      console.log("fetchAccessToken", error);
    });
};
