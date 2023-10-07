function TableHead({ headers }) {
    return (
        <thead>
            <tr>
                {headers.map((h, idx) => (
                    <th key={`${h}-${idx}`}>{h}</th>
                ))}
            </tr>
        </thead>
    );
}

export default TableHead;
