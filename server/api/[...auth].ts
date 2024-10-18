export default defineEventHandler((event) => {
  return authenticate.handler(toWebRequest(event));
});
