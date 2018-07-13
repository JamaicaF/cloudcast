export const fetchCasts = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/casts'
  });
};

export const fetchCast = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/casts/${id}`
  });
};

export const createCast = (cast) => {
  return $.ajax({
    method: 'POST',
    url: '/api/casts',
    data: { cast }
  });
};

export const updateCast = (cast) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/casts/${cast.id}`,
    data: { cast }
  });
};

export const deleteCast = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/posts/${id}`
  });
};
