import { PROFILE_TYPES } from "../actions/profileAction";
import { EditData } from "../actions/globalTypes";

const initialState = {
  loading: false,
  ids: [],
  users: [],
  posts: [],
  isAmin: false,
  profile_users: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PROFILE_TYPES.GET_USER:
      return {
        ...state,
        users: [...state.users, action.payload.user],
        isAmin: action.payload.user.role,
      };
    case PROFILE_TYPES.FOLLOW:
      return {
        ...state,
        users: EditData(state.users, action.payload._id, action.payload),
      };
    case PROFILE_TYPES.UNFOLLOW:
      return {
        ...state,
        users: EditData(state.users, action.payload._id, action.payload),
      };
    case PROFILE_TYPES.GET_ID:
      return {
        ...state,
        ids: [...state.ids, action.payload],
      };
    case PROFILE_TYPES.GET_POSTS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case PROFILE_TYPES.UPDATE_POST:
      return {
        ...state,
        posts: EditData(state.posts, action.payload._id, action.payload),
      };
    case PROFILE_TYPES.GET_ALL_USERS:
      return {
        ...state,
        profile_users: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
