const products = [
  { id: 1, title: 'tomato', price: '10' },
  { id: 2, title: 'orange', price: '134' },
  { id: 3, title: 'persik', price: '155' },
  { id: 4, title: 'mango', price: '200' }
]

export const productsRepository = {
  findProducts(title: string | null | undefined) {
    if (title) {
      const filtredProduct = products.filter((p) => p.title.indexOf(title) > -1)
      return filtredProduct
    } else {
      return products
    }
  },
  createProduct(title: string, price: string) {
    const newProdyct = {
      id: +new Date(),
      title: title,
      price: price
    }
    products.push(newProdyct)
    return products
  },
  getProductById(id: number) {
    let product = products.find((p) => p.id === id)
    if (product) {
      return product
    } else {
      return 404
    }
  },
  updateProduct(id: number, title: string, price: string) {
    const product = products.find((p) => p.id === id)
    if (product) {
      product.title = title
      product.price = price
      // return product
      return products
    } else {
      return 404
    }
  },
  deleteProduct(id: number) {
    console.log(typeof id)
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products.splice(i, 1)
        return `продукт ${products[i].title} удален`
      }
    }
    return 404
  }
}
// 19:19
