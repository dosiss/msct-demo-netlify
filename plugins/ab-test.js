// plugins/ab-test.js
export default class ABTestManager {
  constructor() {
    this.userId = this.getUserId()
    this.tests = {}
    this.clickedTests = new Set() // Track which tests have been clicked
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

  runTest(testName, variants) {
    if (!process.client) return variants.variantA

    // Only assign variant, don't track anything
    const variant = this.getVariant(testName)
    this.tests[testName] = variant

    return variants[variant] || variants.variantA
  }

  trackClick(testName, metadata = {}) {
    // Prevent duplicate clicks for the same test
    if (this.clickedTests.has(testName)) {
      console.log('Click already tracked for:', testName)
      return
    }

    if (process.client && window.dataLayer) {
      const eventData = {
        event: 'ab_test_click',
        test_name: testName,
        variant: this.tests[testName],
        user_id: this.userId,
        timestamp: Date.now(),
        ...metadata
      }

      window.dataLayer.push(eventData)
      this.clickedTests.add(testName) // Mark as clicked

      console.log('Click Event Tracked:', eventData)
    }
  }
}
