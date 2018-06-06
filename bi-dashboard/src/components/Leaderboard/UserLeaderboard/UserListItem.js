import React from 'react';
import CountUp from 'react-countup';
import {fetchTips} from '../../../actions';


const UserListItem = (props) => {

      
    return (
        props.data.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td><img src={!row.picture ? '../images/bi-logo.png' :row.picture } draggable="false" alt="user"/>{`${row.firstname} ${row.lastname}`}</td>
                    <td>
                        <CountUp
                            start={0}
                            end={100}
                        />
                    </td>
                    <td>
                        <CountUp
                            start={0}
                            end={row.points}
                        />
                    </td>
                </tr>
            );
        }

    ));
};

export default UserListItem;
