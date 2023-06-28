const products = [
  { id: 1, title: 'tomato', price: '10' },
  { id: 2, title: 'orange', price: '134' },
  { id: 3, title: 'persik', price: '155' },
  { id: 4, title: 'mango', price: '200' }
]

export const productsRepository = {
  findProducts(title: string | null) {
    if (title) {
      const filtredProduct = products.filter((p) => p.title.indexOf(title) > -1)
      return filtredProduct
    } else {
      return products
    }
  }
}

// 19:19
