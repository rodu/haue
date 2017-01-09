
function filterByKey(response, key) {
  return response.filter((item) => {
    return item.success[key];
  });
}

function buildStateKey(id, prop) {
  return `/lights/${id}/state/${prop}`;
}

export class SuccessResponseReader {
  readXY(id, response) {
    const key = buildStateKey(id, 'xy');
    const value = filterByKey(response, key);
    return value[0].success[key];
  }

  readBRI(id, response) {
    const key = buildStateKey(id, 'bri');
    const value = filterByKey(response, key);
    return value[0].success[key];
  }
}
