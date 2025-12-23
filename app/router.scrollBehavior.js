export default function (to, from, savedPosition) {
  // console.log('ScrollBehavior triggered:', { to: to.path, from: from?.path, savedPosition })

  if (to.path === '/games' || to.path.startsWith('/games/')) {
    // console.log('Scrolling /games to top')
    return { x: 0, y: 0 }
  }

  if (savedPosition) {
    // console.log('Using saved position:', savedPosition)
    return savedPosition
  }

  return { x: 0, y: 0 }
}
