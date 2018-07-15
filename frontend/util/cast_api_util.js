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

export const createCast = (formData) => {
  return $.ajax({
    method: 'POST',
    url: '/api/casts',
    processData: false,
    contentType: false,
    data: formData
  });
};

export const updateCast = (id, formData) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/casts/${id}`,
    processData: false,
    contentType: false,
    data: formData
  });
};

export const deleteCast = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/posts/${id}`
  });
};
