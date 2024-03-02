const ParticipantItem: React.FC<{ participant: any }> = ({participant}) => {
    const {id, name, phone_num} = participant;

    return(
        <li className="flex flex-row h-16 w-[1380px] px-4 items-center text-center">
            <p className="flex justify-center items-center w-[100px] h-full text-sm p-2">
                {name}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-sm p-2">
                {phone_num}
            </p>
        </li>
    )
}

export default ParticipantItem;