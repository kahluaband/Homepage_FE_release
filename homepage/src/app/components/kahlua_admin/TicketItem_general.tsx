const GeneralTicketItem: React.FC<{ ticket: any }> = ({ticket}) => {
    const {id, buyer, phone_num, count, member, major, student_id, meeting, reservation_id, merchant_order_id, transaction_status} = ticket;
    
    return(
        <li className="flex flex-row h-16 w-[1712px] px-4 items-center text-center">
            <p className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
                {reservation_id}
                {merchant_order_id}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
                {buyer}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
                {phone_num}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
                {count}
                {member}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
                {transaction_status}
            </p>
        </li>
    )
}

export default GeneralTicketItem;