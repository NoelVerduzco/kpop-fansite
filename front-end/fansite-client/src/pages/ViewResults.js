import React from 'react';

function ViewResults({ results }) {
  return (
    <div>
      <h1 className="text-center text-primary">Results</h1>
      <div className="table-container"> 
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr className="table-primary" key={index}>
                <td>{result.groupName || result.stage_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewResults;
