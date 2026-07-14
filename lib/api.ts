// API utilities
export async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`/api${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`)
  }

  return response.json()
}

export async function getCourses() {
  return fetchAPI('/courses')
}

export async function getCourse(id: string) {
  return fetchAPI(`/courses/${id}`)
}

export async function getCocktails() {
  return fetchAPI('/cocktails')
}

export async function getFlairTricks() {
  return fetchAPI('/flair')
}
