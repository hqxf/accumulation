import Goods from './src/components/goods/goods.vue'
import Seller from './src/components/seller/seller.vue'
import Ratings from './src/components/ratings/ratings.vue'
export default [
	{path:"/goods",component:Goods},
	{path:"/seller",component:Seller},
	{path:"/ratings",component:Ratings},
	{path:"*",redirect:"/goods"}
]