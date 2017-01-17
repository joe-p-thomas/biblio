export const fetchReviews = (bookId) => (
  $.ajax({
    method: 'GET',
    url: 'api/reviews',
    data: { book_id: bookId }
  })
);

export const createReview = (review) => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
);

export const updateReview = (review) => (
  $.ajax({
    method: 'PATCH',
    url: `api/reviews/${review.id}`,
    data: { review }
  })
);

export const deleteReview = (review) => (
  $.ajax({
    mathod: 'DELETE',
    url: `api/reviews/${review.id}`
  })
);
