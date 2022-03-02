axios
  .get(
    "https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=7bb32b9e08d245a7a705cf0475ff5513"
  )
  .then((res) => {
      console.log(res.data.products);
  })
  .catch((e) => {
      console.log(e);
  })
