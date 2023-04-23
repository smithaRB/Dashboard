import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const List = () => {

    const rows = [
        {
            id: 1143155,
            product : "Acer Nitro 5",
            customer: "John Smith",
            date: "1 March",
            amount : 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 1142155,
            product : "playStation 5",
            customer: "Michael Doe",
            date: "1 March",
            amount : 900,
            method: " online Payment",
            status: "pending",
        },
        {
            id: 1142166,
            product : "Redragon $101",
            customer: "John Smith",
            date: "1 March",
            amount : 35,
            method: "Cash on Delivery",
            status: "pending",
        },
        {
            id: 1142167,
            product : "Razer Blade 15",
            customer: "John Smith",
            date: "1 March",
            amount : 920,
            method: "online",
            status: "Approved",
        },
        {
            id: 1142169,
            product : "ASUS ROG Strix",
            customer: "Harold Carol",
            date: "1 March",
            amount : 920,
            method: "online",
            status: "Approved",
        }
    ]
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking Id</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer </TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
             
            >
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default List
