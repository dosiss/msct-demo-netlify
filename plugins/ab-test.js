// plugins/ab-test.js
export default class ABTestManager {
  constructor() {
    this.userId = this.getUserId()
    this.tests = {}
  }

  getUserId() {
    if (process.client) {
      let userId = localStorage.getItem('user_id')
      if (!userId) {
        userId = 'user_' + Math.random().toString(36).substr(2, 9)
        localStorage.setItem('user_id', userId)
      }
      return userId
    }
    return null
  }

  getVariant(testName, trafficSplit = 50) {
    if (!this.userId) return 'variantA'

    const hash = this.simpleHash(this.userId + testName)
    return (hash % 100) < trafficSplit ? 'variantB' : 'variantA'
  }

  simpleHash(str) {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash
    }
    return Math.abs(hash)
  }

  trackEvent(testName, eventType, metadata = {}) {
    if (process.client && window.dataLayer) {
      const eventData = {
        event: 'ab_test_event',
        ab_test_name: testName,
        ab_test_variant: this.tests[testName],
        ab_test_event_type: eventType,
        ab_test_user_id: this.userId,
        ab_test_timestamp: Date.now(),
        ...metadata
      }

      window.dataLayer.push(eventData)

      // Also log for debugging
      console.log('AB Test Event:', eventData)
    }
  }

  runTest(testName, variants) {
    if (!process.client) return variants.variantA

    const variant = this.getVariant(testName)
    this.tests[testName] = variant

    // Track assignment
    this.trackEvent(testName, 'assignment')

    return variants[variant] || variants.variantA
  }

  trackClick(testName, metadata = {}) {
    this.trackEvent(testName, 'click', metadata)
  }
}
