import React, { useState } from "react";
import { Fade, ListGroup, ListGroupItem, Table } from "reactstrap";
import Pagination from "./components/Pagination";

const WordList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [wordsPerPage] = useState(20);

  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;
  const currentWords = props.words.slice(indexOfFirstWord, indexOfLastWord);
  const totalPagesNum = Math.ceil(props.words.length / wordsPerPage);

  return (
    <div>
      <h2>
        {props.info.title} - {props.currentCategory}
      </h2>
      <Table>
        <thead>
          <tr>
            <th>ENG</th>
            <th>TR</th>
          </tr>
        </thead>
        <tbody>
          {currentWords.map((word) => (
            <tr>
              <td>{word.ENG}</td>
              <td>{word.TR}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default WordList;
