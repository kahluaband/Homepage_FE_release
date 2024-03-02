const AllTicketItem: React.FC<{ ticket: any }> = ({ticket}) => {
    const {id, buyer, phone_num, count, member, major, student_id, meeting, reservation_id, merchant_order_id, status} = ticket;
    let statusText
    if (status === true) {
        statusText = "결제완료"
    }
    if (status === false) {
        statusText = "결제대기"
    }

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
            <div className="flex justify-center items-center w-[100px] h-full text-sm p-2">
                <p className={`${status ? "text-black" : "text-red-500"}`}>
                    {statusText}
                </p>
            </div>
        </li>
    )
}

export default AllTicketItem;