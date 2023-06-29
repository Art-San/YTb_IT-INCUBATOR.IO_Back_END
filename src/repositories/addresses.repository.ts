// Business Layer
// Data Access Layer

const addresses = [
  { id: 1, value: 'Nezalejnasti 12' },
  { id: 2, value: 'Selickaga 11' },
  { id: 3, value: 'Lebedeva 30' },
  { id: 4, value: 'Altayskaya 160' }
]
export const addressesRepository = {
  findAllAddresses() {
    return addresses
  },
  findAddressById(id: number) {
    const adress = addresses.find((a) => a.id === id)
    if (adress) {
      return adress
    } else {
      return 404
    }
  }
}
