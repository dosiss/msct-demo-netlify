// plugins/ab-test-client.js
import ABTestManager from './ab-test.js'

export default ({ app }, inject) => {
  const abTest = new ABTestManager()

  // Inject into Vue context
  inject('abTest', abTest)
}
