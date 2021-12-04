export default async function ({ $auth}) {
    const user = await $auth.loggedIn


    return {
        "Content-type": "application/json",
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjMwOTEzNDQ4LCJleHAiOjE2MzA5MTcwNDgsIm5iZiI6MTYzMDkxMzQ0OCwianRpIjoieXRpZ0tZRUs3R3JnQ0NkQSIsInN1YiI6MywicHJ2IjoiMWQwYTAyMGFjZjVjNGI2YzQ5Nzk4OWRmMWFiZjBmYmQ0ZThjOGQ2MyJ9.59wrzHkORWePIaZktVQmCxNq5yRZ0zYfodMRam81bps',
    };
  }