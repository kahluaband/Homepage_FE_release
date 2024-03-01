const AllTicketItem: React.FC<{ ticket: any }> = ({ticket}) => {
    const {id, buyer, phone_num, count, member, major, student_id, meeting, reservation_id, merchant_order_id, transaction_status} = ticket;
    
    return(
        <li className="flex flex-row h-16 w-[1380px] px-4 items-center text-center">
            <p className="flex justify-center items-center w-[100px] h-full text-sm p-2">
                {reservation_id}
                {merchant_order_id}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-sm p-2">
                {buyer}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-sm p-2">
                {phone_num}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-sm p-2">
                {count}
                {member}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-sm p-2">
                {major}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-sm p-2">
                {student_id}
            </p>
            <p className="flex justify-center items-center w-[120px] h-full text-sm p-2">
                {meeting}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-sm p-2">
                {transaction_status}
            </p>
        </li>
    )
}

export default AllTicketItem;