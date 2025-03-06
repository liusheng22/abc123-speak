export default defineNuxtRouteMiddleware(() => {
  return navigateTo('https://abc123speak.vercel.app', { external: true })
})
