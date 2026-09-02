import { DEPOSIT_ROWS, INCENTIVE_ROWS, PRICING_ROWS } from "@/lib/content";

export function PricingTable() {
  return (
    <div className="overflow-x-auto">
      <table className="stack-table">
        <caption className="mb-3 text-left text-sm text-text-muted">
          Preserve North prices by home type. Starting prices have not been announced.
        </caption>
        <thead>
          <tr>
            <th scope="col">Home Type</th>
            <th scope="col">Starting Price</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {PRICING_ROWS.map((row) => (
            <tr key={row.type}>
              <th scope="row">{row.type}</th>
              <td className="tabular">{row.price}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DepositScheduleTable() {
  return (
    <div className="overflow-x-auto">
      <table className="stack-table">
        <caption className="mb-3 text-left text-sm text-text-muted">
          Preserve North deposit structure. Amounts and due dates have not been published.
        </caption>
        <thead>
          <tr>
            <th scope="col">Milestone</th>
            <th scope="col">Amount</th>
            <th scope="col">Due</th>
          </tr>
        </thead>
        <tbody>
          {DEPOSIT_ROWS.map((row) => (
            <tr key={row.milestone}>
              <th scope="row">{row.milestone}</th>
              <td className="tabular">{row.amount}</td>
              <td>{row.due}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function IncentivesTable() {
  return (
    <div className="overflow-x-auto">
      <table className="stack-table">
        <caption className="mb-3 text-left text-sm text-text-muted">
          Preserve North incentives. Nothing listed here is a confirmed offer.
        </caption>
        <thead>
          <tr>
            <th scope="col">Incentive</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {INCENTIVE_ROWS.map((row) => (
            <tr key={row.item}>
              <th scope="row">{row.item}</th>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
