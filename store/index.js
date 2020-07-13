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
    addMedicine(state, payload) {
      state.enquiry.books.push(payload);
    },
  
    removeMedicine(state, {
      index
    }) {
      state.enquiry.books = state.enquiry.books.filter((m, i) => i != index);
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
    medicines(state) {
      return state.enquiry.books;
    },
  
    prescriptions(state) {
      return state.enquiry.name;
    },
  
    enquiry(state) {
      return state.enquiry;
    },
  
    form(state) {
      return state.show;
    }
  }
  