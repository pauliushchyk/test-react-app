export const mapResponse = response => {
  if (response.status === 204) {
    return { result: {}, response: { ok: true } };
  }

  return response.json().then(result => ({ result, response }));
};

export const callAPI = (url, options = {}) =>
  new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => mapResponse(response))
      .then(({ result, response }) => (response.ok ? result : reject(result)))
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
