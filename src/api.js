export async function fetchSampleUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const users = await res.json();
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
  } catch (err) {
    console.error(err);
    return [];
  } finally {
    console.log("fetchSampleUsers operation complete.");
  }
}

export function fetchSampleUsersPromise() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((users) =>
      users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
      }))
    )
    .catch((err) => {
      console.error(err);
      return [];
    });
}