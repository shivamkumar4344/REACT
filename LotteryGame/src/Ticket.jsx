import TicketNum from "./TicketNum";

export default function Ticket({ ticket }) {
    return (
        <div style={{border:"1px solid pink",borderRadius:"14px",width:"250px",marginBottom:"16px"}}>
            <h2>Ticket</h2>
            {ticket.map((n, idx) => (
                <TicketNum n={n} key={idx} />
            ))}
        </div>
    )
};