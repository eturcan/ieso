const Register = async (args = {}) => {
  const callbackUrl = (args && args.callbackUrl) ? args.callbackUrl : window.location

  // Redirect to sign in page if no valid provider specified
  window.location = `/auth/register?callbackUrl=${encodeURIComponent(callbackUrl)}`
}

export default Register