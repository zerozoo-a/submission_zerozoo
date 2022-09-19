// your-app-name/src/fetchGraphQL.js
const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;
async function fetchGraphQL(text, variables) {
  if (
    REACT_APP_GITHUB_AUTH_TOKEN == null ||
    REACT_APP_GITHUB_AUTH_TOKEN === ""
  ) {
    throw new Error(
      "THIS APP REQUIRES A GITHUB AUTHENTICATION TOKEN TO BE CONFIGURED. SEE README.md"
    );
  }

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
