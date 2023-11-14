// 1. 다음의 요청을 async await 문법으로 바꿔보세요.

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then(console.log);

const getProducts = async () => {
  const response1 = await fetch("https://dummyjson.com/products");
  const data1 = await response1.json();
  console.log("1", data1);
  return data1;
};

getProducts();
// 2. 다음의 요청을 async await 문법으로 바꿔보세요.

// fetch("https://dummyjson.com/products/add", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "BMW Pencil",
//     /* other product data */
//   }),
// })
//   .then((res) => res.json())
//   .then(console.log);

const addProdust = async () => {
  const response2 = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "BMW Pencil",
      /* other product data */
    }),
  });
  const data2 = await response2.json();
  console.log("2", data2);
  return data2;
};

addProdust();
