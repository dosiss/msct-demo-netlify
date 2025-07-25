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
  //  const variant = this.getVariant(testName)
  // Check if we already have a stored variant for this test
    const storedVariant = sessionStorage.getItem(`ab_test_${testName}_variant`)

    let variant
    if (storedVariant && variants[storedVariant]) {
      // Use stored variant
      variant = storedVariant
    } else {
      // Assign new variant and store it
      variant = this.getVariant(testName)
      sessionStorage.setItem(`ab_test_${testName}_variant`, variant)
    }

    this.tests[testName] = variant

    // console.log(`Test ${testName} assigned variant: ${variant}`) // Debug log

    return variants[variant] || variants.variantA
  }

  trackClick(testName, metadata = {}) {
    // console.log('🎯 trackClick called with:', testName) // Add this line
    // console.log('Variant from this.tests:', this.tests[testName]) // Debug log
    // console.log('Already clicked?', this.clickedTests.has(testName)) // Add this line
    // console.log('Process client?', process.client) // Add this line
    // console.log('DataLayer available?', !!(window.dataLayer)) // Add this line

    // If variant is missing from memory, try to get it from storage
    if (!this.tests[testName]) {
      const storedVariant = sessionStorage.getItem(`ab_test_${testName}_variant`)
      if (storedVariant) {
        this.tests[testName] = storedVariant
        // console.log('Restored variant from storage:', storedVariant)
      } else {
        // console.error('❌ No variant found for test:', testName)
        return
      }
    }

    // Prevent duplicate clicks for the same test
    const clickKey = `ab_test_${testName}_clicked`
    if (sessionStorage.getItem(clickKey)) {
      // console.log('Click already tracked for:', testName)
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

      // console.log('📤 About to push to dataLayer:', eventData) // Add this line
      window.dataLayer.push(eventData)
//      this.clickedTests.add(testName) // Mark as clicked
      sessionStorage.setItem(clickKey, 'true') // Mark as clicked


      // console.log('Click Event Tracked:', eventData)
    } else {
      // console.log('❌ Cannot track - client or dataLayer not available') // Add this line
    }
  }
}
