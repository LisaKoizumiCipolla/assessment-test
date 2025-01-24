import React from "react";

function ColumnTable({title, label, tableData}){
  return(
    <React.Fragment>
        <h4 className="mb-3 badge rounded-pill bg-primary secondary-badge">
            {title}
        </h4>
        <table className="table table-striped rounde">
            <thead>
                <tr>
                    <th>{label}</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((row, i) => (
                        <tr key={i}><td>{row}</td></tr>
                    ))
                }
            </tbody>
        </table>
    </React.Fragment>
  )
}

export default ColumnTable;