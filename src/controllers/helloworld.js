const helloWorld = (req, res) => {
  try {
    return res.send({ message: "hello world!" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "Não foi possível enviar resposta!" });
  }
};

module.exports = { helloWorld };
