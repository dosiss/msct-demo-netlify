export default ({ app }) => {
  if (process.client) {
    app.router.beforeEach((to, from, next) => {
      // Detect external navigation
      const isExternalNavigation = !from.name

      // console.log('🔍 Router navigation detected:', {
      //   to: to.path,
      //   from: from.path || 'external',
      //   fromName: from.name,
      //   isExternal: isExternalNavigation
      // })

      // Only handle /games from external sources
      if (isExternalNavigation && to.path === '/games') {
        // console.log('✅ External navigation to /games detected - forcing scroll to top')

        // Force scroll to top
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0

        // console.log('📍 Scroll position after immediate scroll:', window.scrollY)

        // Retry after a delay for slow content
        setTimeout(() => {
          window.scrollTo(0, 0)
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0
          // console.log('📍 Scroll position after 100ms delay:', window.scrollY)
        }, 100)
      } else if (to.path === '/games') {
        // console.log('ℹ️ Internal navigation to /games - using default behavior')
      }

      next()
    })
  }
}
