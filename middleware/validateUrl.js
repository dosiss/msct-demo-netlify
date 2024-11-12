export default function ({ route, redirect }) {
  const path = route.path;

  // Regular expression to allow only valid internal paths:
  // - Starts with /
  // - Contains alphanumeric characters, dashes (-), and forward slashes (/)
  const validPathPattern = /^\/[a-zA-Z0-9-/]*$/;

  // Check for disallowed patterns in the path:
  // 1. Disallow multiple consecutive slashes (///)
  // 2. Disallow encoded backslashes or actual backslashes in the path
  if (!validPathPattern.test(path) || /\/{2,}|%5C|\\/.test(path)) {
    console.warn('Invalid or suspicious path detected:', path);
    return redirect('/');
  }
}
