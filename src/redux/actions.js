import { 
   ADD_COMMENT, 
   ADD_DISHES, 
   DISHES_FAILED, 
   DISHES_LOADING, 
   FETCH_DISHES, 
   FETCH_LEADERS, 
   HIDE_LOADER, 
   SHOW_LOADER ,
   ADD_PROMOS,
   FETCH_PROMOS,
   PROMOS_FAILED,
   FETCH_COMMENTS,
   ADD_FEEDBACK
} from "./types";
import { baseUrl } from "../mocks/baseUrl";

export const addComment = (comment) => ({
   type: ADD_COMMENT,
   payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

   const newComment = {
       dishId: dishId,
       rating: rating,
       author: author,
       comment: comment
   };
   newComment.date = new Date().toISOString();
   
   return fetch(baseUrl + 'comments', {
       method: "POST",
       body: JSON.stringify(newComment),
       headers: {
         "Content-Type": "application/json"
       },
       credentials: "same-origin"
   })
   .then(response => {
       if (response.ok) {
         return response;
       } else {
         var error = new Error('Error ' + response.status + ': ' + response.statusText);
         error.response = response;
         throw error;
       }
     },
     error => {
           throw error;
     })
   .then(response => response.json())
   .then(response => dispatch(addComment(response)))
   .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const dishesLoading = () => ({
   type: DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
   type: DISHES_FAILED,
   payload: errmess
});

export const addDishes = (dishes) => ({
   type: ADD_DISHES,
   payload: dishes
});

export function showLoader() {
   return {
      type: SHOW_LOADER
   }
}

export function hideLoader() {
   return {
      type: HIDE_LOADER
   }
}

export const addPromos = (promos) => ({
   type: ADD_PROMOS,
   payload: promos
});

export const promosFailed = (errmess) => ({
   type: PROMOS_FAILED,
   payload: errmess
});

export const addFeedback = (feedback) => ({
   type: ADD_FEEDBACK,
   payload: feedback
});


export const postFeedback = (firstname, lastname, telnum) => (dispatch) => {

   const newFeedback = {
       firstname,
       lastname,
       telnum,
   };

      return fetch(baseUrl + 'feedback', {
       method: "POST",
       body: JSON.stringify(newFeedback),
       headers: {
         "Content-Type": "application/json"
       },
       credentials: "same-origin"
   })
   .then(response => {
       if (response.ok) {
         return response;
       } else {
         var error = new Error('Error ' + response.status + ': ' + response.statusText);
         error.response = response;
         throw error;
       }
     },
     error => {
           throw error;
     })
   .then(response => response.json())
   .then(response => dispatch(addFeedback(response)))
   .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};


export const fetchDishes = () => (dispatch) => {   
   return fetch(baseUrl + 'dishes')
   .then(response => {
       if (response.ok) {
         return response;
       } else {
         var error = new Error('Error ' + response.status + ': ' + response.statusText);
         error.response = response;
         throw error;
       }
     },
     error => {
           var errmess = new Error(error.message);
           throw errmess;
     })
   .then(response => response.json())
   .then(dish => dispatch({type: FETCH_DISHES, payload: dish}))
   .catch(error => dispatch(dishesFailed(error.message)));
}

export const fetchPromos = () => (dispatch) => {    
   return fetch(baseUrl + 'promotions')
   .then(response => {
       if (response.ok) {
         return response;
       } else {
         var error = new Error('Error ' + response.status + ': ' + response.statusText);
         error.response = response;
         throw error;
       }
     },
     error => {
           var errmess = new Error(error.message);
           throw errmess;
     })
   .then(response => response.json())
   .then(promos => dispatch({type: FETCH_PROMOS, payload: promos}))
   .catch(error => dispatch(promosFailed(error.message)));
};
export const fetchComments = () => (dispatch) => {    
   return fetch(baseUrl + 'comments')
   .then(response => {
       if (response.ok) {
         return response;
       } else {
         var error = new Error('Error ' + response.status + ': ' + response.statusText);
         error.response = response;
         throw error;
       }
     },
     error => {
           var errmess = new Error(error.message);
           throw errmess;
     })
   .then(response => response.json())
   .then(comment => dispatch({type: FETCH_COMMENTS, payload: comment}))
   .catch(error => dispatch(promosFailed(error.message)));
};



export function fetchLeaders() {
   return async dispatch => {
      dispatch(showLoader())

      const response = await fetch(baseUrl + 'leaders')
      const json = await response.json()

      setTimeout(() => {
         dispatch({type: FETCH_LEADERS, payload: json})
      dispatch(hideLoader())
      }, 500);
   }
}

export function addComments() {
   return async dispatch => {
      dispatch(showLoader())

      const response = await fetch(baseUrl + 'comments')
      const json = await response.json()

      setTimeout(() => {
         dispatch({type: FETCH_COMMENTS, payload: json})
      dispatch(hideLoader())
      }, 500);
   }
}

export function fetchPosts() {
   return async dispatch => {
      dispatch(showLoader())

      const response = await fetch(baseUrl + 'dishes')
      const json = await response.json()

      setTimeout(() => {
         dispatch({type: FETCH_DISHES, payload: json})
      dispatch(hideLoader())
      }, 500);
   }
}