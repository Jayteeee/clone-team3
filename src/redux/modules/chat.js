import React from "react";
import { combineReducers } from "redux";
import * as type from "../constants/actionTypes";

//Action
export const SEND_CHAT = "SEND_CHAT";
export const RECEIVE_CHAT = "RECEIVE_CHAT";

//Actioncreation
export const sendChat = () => {
  return {
    type: type.SEND_CHAT,
  };
};

export const receiveChat = (data) => {
  return {
    type: type.RECEIVE_CHAT,
    data,
  };
};

//initialState
const chatStates = {
  chatList: [],
  socketId: null,
};

//reducer
const chatReducer = (state = chatStates, action) => {
  switch (action.type) {
    case type.MY_SOCKET_ID:
      return { ...state, socketId: action.socketId };
    case type.RECEIVE_CHAT:
      let newChatList = state.chatList.slice();
      newChatList.push(action.data);
      return { ...state, chatList: newChatList };
    case type.CLEAR_CHAT:
      return { ...state, chatList: [] };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ chatReducer });
export default rootReducer;
