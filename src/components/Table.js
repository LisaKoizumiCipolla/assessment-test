import React from "react";

function Table({title, labelsRow, labelsColumn, tableData}){
  return(
    <React.Fragment>
        <h4 className="mb-3 badge rounded-pill bg-primary secondary-badge">
            {title}
        </h4>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th></th>
                    {labelsColumn.map((label, i) => <th className=" text-capitalize" key={i}>{label}</th>)}
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((row, i) => (
                        <tr key={i}>
                            <td className="fw-bold text-capitalize">{labelsRow[i]}</td>
                            {row.map((cell, j) =>(
                                <td key={j}>{cell}</td>
                            ))}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </React.Fragment>
  )
}

export default Table;