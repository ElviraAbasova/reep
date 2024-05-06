function reducer(state, action) {
  switch (action.type) {
    case "SetStore":
      return { ...state, store: action.store };
    case "SetAZ":
      let sortAZ = state.search.sort((a, b) => a.title.localeCompare(b.title));
      return { ...state, search: sortAZ };
    case "SetZA":
      let sortZA = state.search.sort((a, b) => b.title.localeCompare(a.title));
      return { ...state, search: sortZA };
      case "SetSearch":
        return { ...state, search: action.search };
      case "SetSearchUs":
    return { ...state, searchUs: action.searchUs };
      case "SetCategory":
        let filterCategory;
        if (action.category == "") {
          filterCategory = state.store;
        } else {
          filterCategory = state.store.filter(item => item.category === action.category);
        }
        return { ...state, search: filterCategory };
      
      case "SetAZUs":
      let sortAZUs = state.searchUs.sort((a, b) => a.name.localeCompare(b.name));
      return { ...state, searchUs: sortAZUs };
      case "SetAdmins":
        let admins = state.searchUs.filter(elem => elem.isAdmin == true);
        return { ...state, searchUs: admins};
    case "SetZAUs":
      let sortZAUs = state.searchUs.sort((a, b) => b.name.localeCompare(a.name));
      return { ...state, searchUs: sortZAUs };
    case "PriceHl":
      let priceH = state.search.sort((a, b) => b.price - a.price);
      return { ...state, search: priceH };
    case "PriceLh":
      let priceL = state.search.sort((a, b) => a.price - b.price);
      return { ...state, search: priceL };
    case "CountHl":
      let CountH = state.search.sort((a, b) => b.rating.count - a.rating.count);
      return { ...state, search: CountH };
    case "CountLh":
      let CountL = state.search.sort((a, b) => a.rating.count - b.rating.count);
      return { ...state, search: CountL };
    case "RatingHl":
      let RatingH = state.search.sort((a, b) => b.rating.rate - a.rating.rate);
      return { ...state, search: RatingH };
    case "RatingLh":
      let RatingL = state.search.sort((a, b) => a.rating.rate - b.rating.rate);
      return { ...state, search: RatingL };
    case "SetDelStore":
      let deleteStore = state.search.filter((item) => item.id != action.id);
      return { ...state, search: deleteStore };
    case "SetUsers":
      return { ...state, users: action.users };
    case "SetDelUser":
      let userDel = state.searchUs.filter((item) => item.id != action.id);
      return { ...state, searchUs: userDel };
      


      
  }
}

export default reducer;
