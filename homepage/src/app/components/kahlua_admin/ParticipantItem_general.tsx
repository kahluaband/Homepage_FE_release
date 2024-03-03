const ParticipantItem: React.FC<{ participant: any }> = ({participant}) => {
    const {name, phone_num} = participant;

    return(
        <p className="flex justify-center items-center w-[140px] h-full text-sm p-2">
            {name}<br/>
            {phone_num}
        </p>
    )
}

export default ParticipantItem;