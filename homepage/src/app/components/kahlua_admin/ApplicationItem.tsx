const AppItem: React.FC<{ application: any }> = ({application}) => {
    const {name, gender, birthdate, phone_num, major, address, first_preference, second_preference, experience_and_reason, motive, play_instrument, finish_time, meeting, readiness} = application;
    let meetingText = meeting ? "참" : "불참";

    return(
        <li className="flex flex-row h-auto w-[2692px] px-4 items-center text-center">
            <p className="flex justify-center items-center w-[100px] h-full text-sm p-2">
                {name}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-sm p-2">
                {gender}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-sm p-2">
                {birthdate}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-sm p-2">
                {phone_num}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-sm p-2">
                {major}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-sm p-2 whitespace-pre-line py-2">
                {address}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-sm p-2">
                {first_preference}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-sm p-2">
                {second_preference}
            </p>
            <p className="flex justify-center items-center w-[400px] h-full text-sm p-2 whitespace-pre-line py-2">
                {experience_and_reason}
            </p>
            <p className="flex justify-center items-center w-[400px] h-full text-sm p-2 whitespace-pre-line py-2">
                {motive}
            </p>
            <p className="flex justify-center items-center w-[400px] h-full text-sm p-2 whitespace-pre-line py-2">
                {play_instrument}
            </p>
            <p className="flex justify-center items-center w-[140px] h-full text-sm p-2 whitespace-pre-line py-2">
                {finish_time}
            </p>
            <p className="flex justify-center items-center w-[120px] h-full text-sm p-2">
                {meetingText}
            </p>
            <p className="flex justify-center items-center w-[400px] h-full text-sm p-2 whitespace-pre-line py-2">
                {readiness}
            </p>
        </li>
    )
}

export default AppItem;