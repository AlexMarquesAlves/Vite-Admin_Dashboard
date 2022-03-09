import { ReactNode } from "react";

import "./styles.scss";

interface TableProps {
  headData: any[];
  renderHead: (arg0: any, arg1: any) => any;
  bodyData: any[];
  renderBody: (arg0: any, arg1: any) => any;
}

function Table(props: TableProps) {
  return (
    <div className="table-wrapper">
      <table>
        {props.headData && props.renderHead ? (
          <thead>
            <tr>
              {props.headData.map((item, index) =>
                props.renderHead(item, index)
              )}
            </tr>
          </thead>
        ) : null}
        {props.bodyData && props.renderBody ? (
          <tbody>
            {props.bodyData.map((item, index) => props.renderBody(item, index))}
          </tbody>
        ) : null}
      </table>
    </div>
  );
}

export default Table;
