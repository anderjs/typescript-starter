/* eslint-disable prettier/prettier */
"use strict"

module.exports = {
  /**
   * @param {import ('sequelize').QueryInterface} queryInterface
   * @param {import ('sequelize').Sequelize} Sequelize
   */
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Products",
      {
        brand: "Apple",
        name: "iPhone X",
        sku: "123456789",
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=95&.v=1567602408000",
        price: 999.99
      },
      {
        brand: "Apple",
        name: "iPhone XS",
        sku: "123456789",
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=95&.v=1567602408000",
        price: 999.99
      },
      {
        brand: "Apple",
        name: "iPhone XS Max",
        sku: "123456789",
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=95&.v=1567602408000",
        price: 999.99
      },
      {
        brand: "Apple",
        name: "iPhone XR",
        sku: "123456789",
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=95&.v=1567602408000",
        price: 999.99
      },
      {
        brand: "Apple",
        name: "iPhone 11",
        sku: "123456789",
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=95&.v=1567602408000",
        price: 999.99
      },
      {
        brand: "Apple",
        name: "iPhone 11 Pro",
        sku: "123456789",
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=95&.v=1567602408000",
        price: 999.99
      },
      {
        brand: "Apple",
        name: "iPhone 11 Pro Max",
        sku: "123456789",
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=95&.v=1567602408000",
        price: 999.99
      },
      {
        brand: "Apple",
        name: "iPhone SE",
        sku: "123456789",
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=95&.v=1567602408000",
        price: 999.99
      },
      {
        brand: "Apple",
        name: "iPhone SE 2",
        sku: "123456789",
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=95&.v=1567602408000"
      },
      {
        brand: "Apple",
        name: "iPhone SE 3",
        sku: "123456789",
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=95&.v=1567602408000"
      },
      {
        brand: "AMD",
        name: "Ryzen 5 3600",
        sku: "123456789",
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=95&.v=1567602408000",
        price: 999.99
      },
      {
        brand: "AMD",
        name: "Ryzen 5 2600",
        sku: "123456789",
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=95&.v=1567602408000",
        price: 999.99
      },
      {
        brand: "Intel",
        name: "Core i7-9700K",
        sku: "123456789",
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=95&.v=1567602408000",
        price: 999.99
      }
    )
  },
  /**
   * @param {import ('sequelize').QueryInterface} queryInterface
   * @param {import ('sequelize').Sequelize} Sequelize
   */
  async down(queryInterface) {
    await queryInterface.bulkDelete("Products", null, {})
  }
}
