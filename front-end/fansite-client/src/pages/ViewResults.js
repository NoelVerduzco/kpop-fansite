import { useNavigate } from 'react-router-dom';

function ViewResults({ results, query }) {
    const navigate = useNavigate();

    const handleResultClick = (index) => {
        const result = results[index];
        if (result.groupName) {
            navigate(`/groups/${result.id}`);
        } else if (result.stage_name) {
            navigate(`/idols/${result.id}`);
        }
    };

    return (
        <div
        className="container text-center mt-5"
        style={{ minHeight: '80vh' }}
    >
            <h1 className="text-center" >Results</h1>
            <div className="table-container">

            {results.length > 0 ? (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Groups</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result, index) => (
                            <tr
                                className="table-primary"
                                key={index}
                                onClick={() => handleResultClick(index)}
                            >
                                <td>{result.groupName ? result.groupName : null}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : null}

            {results.length > 0 ? (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Idols</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result, index) => (
                            <tr
                                className="table-primary"
                                key={index}
                                onClick={() => handleResultClick(index)}
                            >
                                <td>{result.stage_name ? result.stage_name : null}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : null}

            {results.length === 0 && (
                <h3 className="text-center text-secondary">Sorry, there are no results matching your search.</h3>
            )}

            </div>
        </div>
    );
}

export default ViewResults;
