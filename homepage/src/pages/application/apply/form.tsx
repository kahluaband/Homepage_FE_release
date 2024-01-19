import axios from "axios";
import { useEffect, useState } from "react";

const OPTIONS_Gender = [
    { value: "남성", name: "남성" },
    { value: "여성", name: "여성" },
    ];

const OPTIONS_Session1 = [
    { value: "보컬", name: "보컬" },
    { value: "드럼", name: "드럼" },
    { value: "기타", name: "기타" },
    { value: "베이스", name: "베이스" },
    { value: "신디", name: "신디" },
    ];

const OPTIONS_Session2 = [
    { value: "보컬", name: "보컬" },
    { value: "드럼", name: "드럼" },
    { value: "기타", name: "기타" },
    { value: "베이스", name: "베이스" },
    { value: "신디", name: "신디" },
    ];

const OPTIONS_Major = [
    { value: "컴퓨터공학과", name: "컴퓨터공학과" },
    { value: "자율전공학과", name: "자율전공학과" },
    ];
    

export default function Form(){
    const [name, setName] = useState('');
    const [phone_num, setPhoneNum] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [gender, setGender] = useState('남성');
    const [major, setMajor] = useState('컴퓨터공학과');
    const [address, setAddress] = useState('');
    const [first_preference, setFirst] = useState('보컬');
    const [second_preference, setSecond] = useState('보컬');
    const [play_instrument, setInstrument] = useState('');
    const [motive, setMotive] = useState('');
    const [experience_and_reason, setExperience] = useState('');
    const [finish_time, setFinishTime] = useState('');
    const [meeting, setMeeting] = useState(true);
    const [readiness, setReadiness] = useState('');
    const [isFormComplete, setIsFormComplete] = useState(false);


    useEffect(() => {
        const isDataComplete =
        name.trim() !== '' &&
        phone_num.trim() !== '' &&
        birthdate.trim() !== '' &&
        gender.trim() !== '' &&
        address.trim() !== '' &&
        first_preference.trim() !== '' &&
        second_preference.trim() !== '' &&
        experience_and_reason.trim() !== '' &&
        motive.trim() !== '' &&
        finish_time.trim() !== '' &&
        true;
        setIsFormComplete(isDataComplete);
    }, [name, phone_num, birthdate, gender, address, major, first_preference, second_preference, experience_and_reason, play_instrument, motive, finish_time, meeting, readiness]);
    

    const handleSubmit = async () => {
        try {
            const formData = {
                name,
                phone_num,
                birthdate,
                gender,
                address,
                major,
                first_preference,
                second_preference,
                experience_and_reason,
                play_instrument,
                motive,
                finish_time,
                meeting,
                readiness
            };

            const validGenderChoices = ['남성', '여성'];
            const validSessionChoices = ['보컬', '드럼', '기타', '베이스', '신디'];

            // Validate gender
            if (!validGenderChoices.includes(gender)) {
                console.error(`${gender} is not a valid choice for gender.`);
                return;
            }

            // Validate first_preference
            if (!validSessionChoices.includes(first_preference)) {
                console.error(`${first_preference} is not a valid choice for first preference.`);
                return;
            }

            // Validate second_preference
            if (!validSessionChoices.includes(second_preference)) {
                console.error(`${second_preference} is not a valid choice for second preference.`);
                return;
            }

            const response = await axios.post('https://kahluaband.com/application/apply/', formData);
            console.log(response)

            if (response.status === 200 || response.status === 201) {
                console.log('요청이 성공적으로 처리되었습니다.');
                console.log('응답 데이터:', response.data);
            } else {
                console.error('요청이 실패했습니다. HTTP 상태 코드:', response.status);
                console.error('에러 응답:', response.data);
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    type SelectBoxProps = {
        options : {value: string; name : string}[];
        onChange : (value: string) => void;
        value : string;
    }
    
    const SelectBox: React.FC<SelectBoxProps> = (props) => {
        const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            props.onChange(e.target.value);
        };
    
        return (
            <div className="flex flex-col">
              <select
                className="text-base cursor-pointer w-full h-[64px] rounded-[10px] border border-[#464646] border-solid text-center"
                onChange={handleOptionChange}
                value={props.value}
              >
                <option value="" disabled>
                  선택
                </option>
                {props.options.map((option: any) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          );
    };

    const RadioButton = ({ label, value, checked, onChange }: any) => (
        <label className="flex flex-row items-center justify-center">
          <input
            type="radio"
            name="뒷풀이"
            value={value}
            checked={checked}
            onChange={() => onChange(value === 'true')}
            className="mr-[18px] accent-[#281CFF] w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] flex-shrink-0"
          />
          <div className="font-[500]">{label}</div>
        </label>
      );

    return(
        <>
            <div className="flex flex-col justify-center pb-10">
                <div className="inline-flex flex-wrap flex-row items-start justify-between">
                    <div className="s:w-[calc(50%-16px)] p:w-full h-auto pt-8">
                        <p className="s:text-xl font-bold text-lg">이름 *</p>
                        <div className="input-with-placeholder relative h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
                            <input value={name} minLength={30} type="text" className="text-sm s:text-base w-full h-full rounded-[10px] p-4 " placeholder="지원자 이름" onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="s:w-[calc(50%-16px)] p:w-full h-auto pt-8">
                        <p className="s:text-xl font-bold text-lg">생년월일 *</p>
                        <div className="input-with-placeholder relative h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
                            <input value={birthdate} type="text" className="text-sm s:text-base w-full h-full rounded-[10px] p-4" placeholder="8자리로 입력해주세요" onChange={(e) => setBirthdate(e.target.value)}/>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8">
                    <p className="s:text-xl font-bold text-lg">전화번호 *</p>
                    <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
                        <input value={phone_num} type="text" className="text-sm s:text-base w-full h-full rounded-[10px] p-4" placeholder="기호없이 11자리로 입력해주세요 '예:01012345678'" onChange={(e) => setPhoneNum(e.target.value)}/>
                    </div>                                              
                </div>
                <div className="inline-flex flex-wrap flex-row items-start justify-between">
                    <div className="s:w-[calc(50%-16px)] p:w-full h-auto pt-8">
                        <p className="s:text-xl font-bold text-lg">성별 *</p>
                        <div className="h-[64px] flex-shrink-0 rounded-[10px] mt-4">
                            <SelectBox options={OPTIONS_Gender} onChange={(value) => setGender(value)} value={gender}/>
                        </div>
                    </div>
                    <div className="s:w-[calc(50%-16px)] p:w-full h-auto pt-8">
                        <p className="s:text-xl font-bold text-lg">학과 *</p>
                        <div className="h-[64px] flex-shrink-0 rounded-[10px] mt-4">
                            <SelectBox options={OPTIONS_Major} onChange={(value) => setMajor(value)} value={major}/>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <p className="s:text-xl font-bold text-lg">거주지 *</p>
                    <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
                        <input value={address} type="text" className="text-sm s:text-base w-full h-full rounded-[10px] p-4" placeholder="기숙사의 경우 '예:2기숙사/부산'으로 입력해주세요" onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                </div>
                
            </div>

            <div className="mt-2 h-[3px] mx-auto bg-[#D3D3D3]"/>

            <div className="flex flex-col justify-center pb-10">
                <div className="inline-flex flex-wrap flex-row items-start justify-between">
                    <div className="s:w-[calc(50%-16px)] p:w-full h-auto pt-8">
                        <span className="s:text-xl font-bold text-lg">1지망 선택 *</span>
                        <span className="text-xs text-[#8E8E8E] ml-2">세션 중 1가지 선택</span>
                        <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 rounded-[10px] mt-4">
                            <SelectBox options={OPTIONS_Session1} onChange={(value) => setFirst(value)} value={first_preference}/>
                        </div>
                    </div>
                    <div className="s:w-[calc(50%-16px)] p:w-full h-auto pt-8">
                        <span className="s:text-xl font-bold text-lg">2지망 선택 *</span>
                        <span className="text-xs text-[#8E8E8E] ml-2">1지망에 선택한 세션을 제외하고 선택</span>
                        <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 mt-4">
                            <SelectBox options={OPTIONS_Session2} onChange={(value) => setSecond(value)} value={second_preference}/>
                        </div>
                    </div>
                    <div className="mt-8 w-full">
                        <p className="s:text-xl font-bold text-lg">지원 세션의 경력과 지원 이유 *</p>
                        <textarea value={experience_and_reason} className="text-sm s:text-base w-full h-[256px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4 p-4" placeholder="" onChange={(e) => setExperience(e.target.value)}/>
                    </div>
                </div>
                
            </div>

            <div className="mt-2 h-[3px] mx-auto bg-[#D3D3D3]"/>
            
            <div className="flex flex-col justify-center pb-10">
                <div className="mt-8">
                    <p className="s:text-xl font-bold text-lg">깔루아 지원 동기 *</p>
                    <textarea value={motive} className="text-sm s:text-base w-full h-[256px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4 p-4" placeholder="" onChange={(e) => setMotive(e.target.value)}/>
                </div>          
                <div className="mt-8">
                    <p className="s:text-xl font-bold text-lg">이외에 다룰 줄 아는 악기</p>
                    <textarea value={play_instrument} className="text-sm s:text-base w-full h-[120px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4 p-4" placeholder="" onChange={(e) => setInstrument(e.target.value)}/>
                </div>
            </div>

            <div className="mt-2 h-[3px] mx-auto bg-[#D3D3D3]"/>

            <div className="flex flex-col justify-center pb-10">
                <div className="mt-8">
                    <p className="s:text-xl font-bold text-lg">3월 18일 면접 시간 조정을 위한 월요일 수업이 끝나는 시간 *</p>
                    <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
                        <input value={finish_time} type="text" className="text-sm s:text-base w-full h-full rounded-[10px] p-4" placeholder="예: 5시 / 월공강" onChange={(e) => setFinishTime(e.target.value)}/>
                    </div>
                </div>

                <div className="mt-8">
                    <p className="s:text-xl font-bold text-lg">면접 후 뒷풀이 참여 유무 *</p>
                    <p className="text-xs text-[#8E8E8E] mt-2">참여하시는 분은 신분증을 꼭 지참해주세요</p>
                    <div className="mt-4 text-base flex flex-row gap-[8.8vw]">
                        <RadioButton
                            label="참"
                            value="true"
                            checked={meeting}
                            onChange={() => setMeeting(true)}
                        />
                        <RadioButton
                            label="불참"
                            value="false"
                            checked={!meeting}
                            onChange={() => setMeeting(false)}
                        />
                    </div>
                </div>

                <div className="mt-8">
                    <p className="s:text-xl font-bold text-lg">면접 전 각오 한마디</p>
                    <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
                        <input value={readiness} type="text" className="text-sm s:text-base w-full h-full rounded-[10px] p-4" placeholder="" onChange={(e) => setReadiness(e.target.value)}/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <button disabled={!isFormComplete} className="w-full s:w-80 h-16 bg-ocean disabled:bg-[#B9B9B9] rounded-[10px] mt-28 mb-32 text-[#FFFFFF]" onClick={handleSubmit}>
                    제출하기
                </button>
            </div>
        </>

    )
}

