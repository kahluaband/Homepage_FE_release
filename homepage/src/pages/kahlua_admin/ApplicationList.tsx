import React, {Component, useEffect, useState} from "react";
import ApplicationInfo from "./ApplicationInfo";
import AppItem from "./ApplicationInfo";
import axios from "axios";

// class ApplicationList extends Component {
//     id = 1;
//     state = {};

//     render() {
//         const { Applicationinfo } = this.props;
//         return (
//             <ul>
//                 {Applicationinfo &&
//                     Applicationinfo.map((itemdata, insertIndex) => {
//                         return (
//                             <ApplicationInfo
//                                 key={insertIndex}
//                                 st_name={itemdata.name}
//                                 gender={itemdata.gender}
//                                 birthdate={itemdata.birthdate}
//                                 phone_num={itemdata.phoneNum}
//                                 major={itemdata.major}
//                                 address={itemdata.address}
//                                 first_preference={itemdata.first_preference}
//                                 second_preference={itemdata.second_preference}
//                                 reason={itemdata.experience_and_reason}
//                                 motive={itemdata.motive}
//                                 instrument={itemdata.play_instrument}
//                                 finish_time={itemdata.finish_time}
//                                 meeting={itemdata.meeting}
//                                 readiness={itemdata.readiness}
//                             />
//                         );
//                     })}
//             </ul>
//         )
//     }
// }

// export default ApplicationList;

const sampleApplication = {
    "id": 196,
    "created": "2024-02-03T15:54:56.401973Z",
    "updated": "2024-02-03T15:54:56.402027Z",
    "name": "afds",
    "phone_num": "af",
    "birthdate": "afs",
    "gender": "남성",
    "address": "sdf",
    "major": "컴퓨터공학과",
    "first_preference": "보컬",
    "second_preference": "보컬",
    "experience_and_reason": "sdf",
    "play_instrument": "sdf",
    "motive": "sfd",
    "finish_time": "sdf",
    "meeting": true,
    "readiness": "sdf",
    "count": 1
}

const AppList = () => {

    const [applications, setApplications] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://api.kahluaband.com/kahlua_admin/application/apply_forms/`,
                );
                setApplications(response.data.apply_forms)
            } catch(error){
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    },[]);

    if (loading) {
        return <div>대기 중 ...</div>;
    }

    if (!applications) {
        return null;
    }

    return (
        <div>
            {applications.map((application) => (
                <AppItem application={sampleApplication}/>
            ))}
        </div>
    );
}

export default AppList;