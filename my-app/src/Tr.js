import React, { useState } from "react";
import { Fade, ListGroup, ListGroupItem } from "reactstrap";
import Pagination from "./components/Pagination";

const Tr = (props) => {
  const [fadeIn, setFadeIn] = useState(false);

  const toggle = () => setFadeIn(!fadeIn);

  const [currentPage, setCurrentPage] = useState(1);
  const [wordsPerPage] = useState(10);

  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;
  const currentWords = props.words.slice(indexOfFirstWord, indexOfLastWord);
  const totalPagesNum = Math.ceil(props.words.length / wordsPerPage);

  return (
    <div>
      <h2> Turkish Tutorial - {props.currentCategory}</h2>
      <ListGroup>
        {currentWords.map((word) => (
          <ListGroupItem onClick={() => props.getDataTr(word)}>
            <span onClick={toggle}>
              {word.TR}
              {word.ENG === props.currentData && (
                <Fade in={fadeIn} tag="h7" className="mt-3">
                  {` - ${word.ENG}`}
                </Fade>
              )}
            </span>
          </ListGroupItem>
        ))}
      </ListGroup><br/>
      <Pagination
        pages={totalPagesNum}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Tr;
