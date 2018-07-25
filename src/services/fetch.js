const fetchz = (url) => {
  return fetch(url)
    .then(response => response.json())
}

export default fetchz
