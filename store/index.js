export const state = () => ({
    enquiry: {
      books: [],
      name: "",
      authorName: "",
      price: "",
      desc: ""
    },
  
    show: false
  })
  
  export const mutations = {
    addBook(state, payload) {
      state.enquiry.books.push(payload);
    },
  
    removeBook(state, {
      index
    }) {
      state.enquiry.books = state.enquiry.books.filter((b, i) => i != index);
    },
  
    hide(state) {
      state.show = false
    },
  
    show(state) {
      state.show = true;
    },
  
    clear(state) {
      state.enquiry = {
        books: [],
        name: "",
        authorName: "",
        price: "",
        desc: ""
      }
    },
  }
  
  export const getters = {
    books(state) {
      return state.enquiry.books;
    },
  
    enquiry(state) {
      return state.enquiry;
    },
  
    form(state) {
      return state.show;
    }
  }
  