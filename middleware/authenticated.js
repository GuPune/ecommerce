export default function ({ store, redirect }) {
    // If the user is not authenticated
    console.log('store.state.auth.loggedIn',store.state.auth.loggedIn);
    if (!store.state.auth.loggedIn) {
     return redirect('/form/login')
    }
  }