const AppItem = (application: any) => {
    const {key, st_name, gender, birthdate, phone_num, major, address, first_preference, second_preference, reason, motive, instrument, finish_time, meeting, readiness} = application
    return(
    <div className="whitespace-nowrap overflow-auto flex flex-col">
      {<>
        <li className="flex flex-row h-16 w-[1712px] px-4 items-center text-center" key={key}>
            <p className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
            {st_name}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
            {gender}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
            {birthdate}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
            {phone_num}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
            {major}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
            {address}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
            {first_preference}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
            {second_preference}
            </p>
            <p className="flex justify-center items-center w-[220px] h-full text-base font-bold p-2">
            {reason}
            </p>
            <p className="flex justify-center items-center w-[140px] h-full text-base font-bold p-2">
            {motive}
            </p>
            <p className="flex justify-center items-center w-[140px] h-full text-base font-bold p-2">
            {instrument}
            </p>
            <p className="flex justify-center items-center w-[140px] h-full text-base font-bold p-2">
            {finish_time}
            </p>
            <p className="flex justify-center items-center w-[120px] h-full text-base font-bold p-2">
            {meeting}
            </p>
            <p className="flex justify-center items-center w-[120px] h-full text-base font-bold p-2">
            {readiness}
            </p>
        </li>
      </>}
    </div>
    )
}

export default AppItem;