
const ListBoards = ({ boards }) => {
    if (!boards || boards.length === 0) {
        return <div style={{ height: "184px" }}></div>;
    }
    return (
        <div>
            {/* {boards.map((title, id) => (<div key={id}>{title}</div>))} */}
        </div>
    )
}
export default ListBoards;