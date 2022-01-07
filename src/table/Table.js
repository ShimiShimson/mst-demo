import React from "react";
import './Table.css';

function Table(props) {

  return (
    <>
      {!props.response.length ?
        null :
        (
          <table>
            <thead>
              <tr>
                {Object.keys(props.response[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.response.map((item) => (
                <tr>
                  {Object.values(item).map((val) => (
                    <td>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )
      }
    </>
  );
};

export default Table;