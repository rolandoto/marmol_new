const ENDPOINT = "http://localhost:4000/api/product/CreateProduct";

  const UploaService = ({form}) => {
    return fetch(`${ENDPOINT}`, {
      method: "POST",
      body: form,
    })
      .then((resp) => {
        console.log(resp)
        return resp.json();
      })
      .then((resp) => {
        return resp;
      });
  };
  export default UploaService