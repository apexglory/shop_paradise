import { createStore } from "vuex";
export default createStore({
    state: {
        cartData: localStorage.getItem("cartData") || null,
    },
    mutations: {
        setCartData(state, payload) {
            state.cartData = payload;
            localStorage.setItem("cartData", payload);
        },
        clearCartData() {
            localStorage.removeItem("cartData");
        },
    },
    actions: {
        SET_CART_DATA(context, payload) {
            context.commit("setCartData", payload);
        },
        CLEAR_CART_DATA(context) {
            context.commit("clearCartData");
        },
    }
});
