const ApiRootUrl = 'http://127.0.0.1:8360/api/';

module.exports = {
  IndexUrl: ApiRootUrl + 'index/index', //首页数据接口
  CatalogList: ApiRootUrl + 'catalog/index',  //分类目录全部分类数据接口
  CatalogCurrent: ApiRootUrl + 'catalog/current',  //分类目录当前分类数据接口

  GoodsCount: ApiRootUrl + 'goods/count',  //统计商品总数
  GoodsList: ApiRootUrl + 'goods/list',  //获得商品列表
  //{categoryId: that.data.id, page: that.data.page, size: that.data.size}
  //{ brandId: that.data.id, page: that.data.page, size: that.data.size}
  GoodsCategory: ApiRootUrl + 'goods/category',  //获得分类数据
  GoodsDetail: ApiRootUrl + 'goods/detail',  //获得商品的详情
  //{ id: that.data.id }
  GoodsNew: ApiRootUrl + 'goods/new',  //新品
  GoodsHot: ApiRootUrl + 'goods/hot',  //热门
  GoodsRelated: ApiRootUrl + 'goods/related',  //商品详情页的关联商品（大家都在看）
	//{ id: that.data.id }
  BrandList: ApiRootUrl + 'brand/list',  //品牌列表
  //{ page: that.data.page, size: that.data.size }
  BrandDetail: ApiRootUrl + 'brand/detail',  //品牌详情
	//{ id: that.data.id }
  CartList: ApiRootUrl + 'cart/index', //获取购物车的数据
  
  CartAdd: ApiRootUrl + 'cart/add', // 添加商品到购物车
  //{ goodsId: this.data.goods.id, number: this.data.number, productId: checkedProduct[0].id }, "POST"
  CartUpdate: ApiRootUrl + 'cart/update', // 更新购物车的商品

  CartChecked: ApiRootUrl + 'cart/checked', // 选择或取消选择商品
  // { productIds: productIds.join(','), isChecked: that.isCheckedAll() ? 0 : 1 }, 'POST'
  CartGoodsCount: ApiRootUrl + 'cart/goodscount', // 获取购物车商品件数
  CartCheckout: ApiRootUrl + 'cart/checkout', // 下单前信息确认
  //{ addressId: that.data.addressId, couponId: that.data.couponId }

  OrderSubmit: ApiRootUrl + 'order/submit', // 提交订单
  //{ addressId: this.data.addressId, couponId: this.data.couponId }, 'POST'

  CollectList: ApiRootUrl + 'collect/list',  //收藏列表
  //api.CollectList, { typeId: that.data.typeId}
  CollectAddOrDelete: ApiRootUrl + 'collect/addordelete',  //添加或取消收藏

 




};