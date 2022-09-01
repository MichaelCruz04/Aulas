import { useState } from "react";
import { api, apiPath } from "../../services/api";
import Button from "../Button";
import { List } from "./style";
import { TJokesProps } from "./types";

const Jokes = () => {
  const [jokes, setJokes] = useState<TJokesProps>();

  const getJoke = () => {
    api
      .get(`${apiPath}/jokes/random`)
      .then((response) => setJokes(response.data))
      .catch((err) => err);
  };

  return (
    <div>
      <div>{jokes?.value ? <List>{jokes?.value}</List> : null}</div>
      <Button onClick={getJoke}>Buscar</Button>
    </div>
  );
};
export default Jokes;
