export default function ({ store, error }) {
  if (!store.state.auth.isLoggedIn) {
    error({
      message: 'You are not logged in.',
      statusCode: 403
    })
  }
}
