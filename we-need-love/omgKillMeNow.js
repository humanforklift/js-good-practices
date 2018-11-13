function check_to_see_if_the_first_cart_is_full(carts) {
 return carts.size > 100;
}

let the_carts = [{
  name: 'Shopping Cart',
  size: 101
}];

let the_first_cart = the_carts[0];
let is_the_cart_full = check_to_see_if_the_first_cart_is_full(the_first_cart);
