import React from 'react';
import BarChart from './BarChart';
import Table from './Table';
import ColumnTable from './ColumnTable';

function ViewData({data}) {
    if (!data.status) {
        return (<div>Server error</div>);
    }

    const results = data.results.map((row, i) => {
        delete row.n_dataleak.enumeration;
        return (

            <div key={i} className="row">
                <dl className='col-12 p-3 mt-3 border rounded'>
                    <dt className="col-sm-3">ID Summary</dt>
                    <dd className="col-sm-9">{row.idsummary}</dd>
                    <dt className="col-sm-3">Summary Text</dt>
                    <dd className="col-sm-12 overflow-auto">{row.summary_text}</dd>
                    <dt className="col-sm-3">Summary Text English</dt>
                    <dd className="col-sm-12 overflow-auto">{row.summary_text_en}</dd>
                    <dt className="col-sm-3">Risk Score</dt>
                    <dd className="col-sm-9">{row.risk_score}</dd>
                    <dt className="col-sm-3">Creation Date</dt>
                    <dd className="col-sm-9">{row.creation_date}</dd>
                    <dt className="col-sm-3">Last Edit</dt>
                    <dd className="col-sm-9">{row.last_edit}</dd>
                    <dt className="col-sm-3">Domain Name</dt>
                    <dd className="col-sm-9">{row.domain_name}</dd>
                    <dt className="col-sm-3">Exposed Services Score</dt>
                    <dd className="col-sm-9">{row.servizi_esposti_score}</dd>
                    <dt className="col-sm-3">Data Leak Score</dt>
                    <dd className="col-sm-9">{row.dataleak_score}</dd>
                    <dt className="col-sm-3">Leak Email Score</dt>
                    <dd className="col-sm-9">{row.rapporto_leak_email_score}</dd>
                    <dt className="col-sm-3">Spoofing Score</dt>
                    <dd className="col-sm-9">{row.spoofing_score}</dd>
                    <dt className="col-sm-3">Open Ports Score</dt>
                    <dd className="col-sm-9">{row.open_ports_score}</dd>
                    <dt className="col-sm-3">Blacklist Score</dt>
                    <dd className="col-sm-9">{row.blacklist_score}</dd>
                    <dt className="col-sm-3">Active Vulnerability Score</dt>
                    <dd className="col-sm-9">{row.vulnerability_score_active}</dd>
                    <dt className="col-sm-3">Passive Vulnerability Score</dt>
                    <dd className="col-sm-9">{row.vulnerability_score_passive}</dd>
                    <dt className="col-sm-3">Certificate Score</dt>
                    <dd className="col-sm-9">{row.certificate_score}</dd>
                    <dt className="col-sm-3">Unique IPV4</dt>
                    <dd className="col-sm-9">{row.unique_ipv4}</dd>
                    <dt className="col-sm-3">Unique IPV6</dt>
                    <dd className="col-sm-9">{row.unique_ipv6}</dd>
                </dl>
                <div className='col-12 p-3 border rounded d-flex justify-content-between'>                    
                    <div className="col-8">
                        <Table
                            title="Dataleak Number"
                            labelsColumn={Object.keys(Object.values(row.n_dataleak)[0])}
                            labelsRow={Object.keys(row.n_dataleak)}
                            tableData={Object.values(row.n_dataleak).map(datarow => Object.values(datarow))}
                        />
                    </div>
                    <div className="col-3">
                        <ColumnTable
                            title="WAF"
                            label="Assets"
                            tableData={row.waf.assets}
                        />
                    </div>
                </div>
                <div className='col-12 p-3 mt-3 border rounded d-flex justify-content-between'>   
                    <div className="col-8">
                        <Table
                            title="Vulnerabilities Number"
                            labelsColumn={Object.keys(Object.values(row.n_vulns)[0])}
                            labelsRow={Object.keys(row.n_vulns)}
                            tableData={Object.values(row.n_vulns).map(datarow => Object.values(datarow))}
                        />
                    </div>
                    <div className="col-3">
                        <ColumnTable
                            title="CDN"
                            label="Assets"
                            tableData={row.cdn.assets}
                        />
                    </div>
                </div>
                <div className='col-12 p-3 mt-3 border rounded d-flex justify-content-between'>  
                    <div className="col-12">
                    <h4 className="mb-3 badge rounded-pill bg-primary secondary-badge"> Domain Ports</h4>
                        <BarChart
                            title="Domain Ports"
                            labels={Object.keys(row.n_port)}
                            data={Object.values(row.n_port).map(port => port.n)}
                        />
                    </div>
                </div>
            </div>
        );
    });

    return (<div>{results}</div>);
}

export default ViewData;
