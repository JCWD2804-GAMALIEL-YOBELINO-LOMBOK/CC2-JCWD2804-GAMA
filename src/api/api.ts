import axios from "axios";

export const BASE_URL = "http://localhost:4000/products";

interface ProductItem {
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  onDetailClick: () => void;
}

export const getProducts = async () => {
  await axios
    .get(BASE_URL + "products")
    .then((response: any) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error: any) => {
      return {
        error: error,
      };
    });
};

export const getProductsById = async (id: string) => {
  await axios
    .get(BASE_URL + `products/${id}`)
    .then((response: any) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error: any) => {
      return {
        error: error,
      };
    });
};

export const postProduct = async (data: ProductItem) => {
  const body = {
    name: data.name,
    description: data.description,
    price: data.price,
    image: data.image,
    category: data.category,
  };

  await axios
    .post(BASE_URL + "products", body)
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      return {
        error: error,
      };
    });
};

export const editProduct = async (data: ProductItem, id: string) => {
  const body = {
    name: data.name,
    description: data.description,
    price: data.price,
    image: data.image,
    category: data.category,
  };

  await axios
    .put(BASE_URL + `products/${id}`, body)
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      return {
        error: error,
      };
    });
};

export const deleteProduct = async (id: string) => {
  await axios
    .delete(BASE_URL + `products/${id}`)
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      return {
        error: error,
      };
    });
};
