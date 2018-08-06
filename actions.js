import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

const comments = {
  addComment: function (text) {
    return {
      type: ADD_COMMENT,
      text,
      id: uuid.v4()
    }
  },

  editComent: function (id, text) {
    return {
      type: EDIT_COMMENT,
      id,
      text
    }
  },

  removeComment: function (id) {
    return {
      type: REMOVE_COMMENT,
      id
    }
  },

  thumbUpComment: function (id) {
    return {
      type: THUMB_UP_COMMENT,
      id
    }
  },

  thumbDownComment: function (id) {
    return {
      type: THUMB_DOWN_COMMENT,
      id
    }
  }
}

export { comments };