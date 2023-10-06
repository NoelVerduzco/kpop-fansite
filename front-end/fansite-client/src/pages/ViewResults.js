import React from 'react';


function ViewResults() {
    return (
        <div>
          <h1 className="text-center text-primary">Results</h1>
          <div className="table-container"> 
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Result</th>
                  <th scope="col">Result Detail</th>
                </tr>
              </thead>
              <tbody>
                {/* {results.map((result) => (
                  <tr className="table-primary" key={result.id} onClick={() => handleResultClick(result.id)}>
                    <td>{result.result_name}</td>
                    <td>{result.result_detail}</td>
                  </tr>
                ))} */}
                <p>results coming...</p>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

export default ViewResults;
