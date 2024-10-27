import React from 'react';
import {useParams, useNavigate} from 'react-router-dom'

export default function AboutTeamMember () {
    const {id} = useParams();
    const navigate = useNavigate();

    const teamMembersData = {
        1 : {name:'Dhruv', role: 'Dev', dept: 'IT'},
        2 : {name:'Pooja', role: 'Dev', dept: 'IT'},
        3 : {name:'Sagar', role: 'Dev', dept: 'IT'}
    };
    const member = teamMembersData[id];
    if (!member) {
        return (
            <div>No Such Team member found</div>
        ); 
    }

    const navigateNextTeamMember = () => {
        const nextId = (parseInt(id)%3)+1;
        navigate(`/about/team/${nextId}`);
    }

    const navigateToTeamList = () => {
        navigate('/about/team')
    }
 
    return (
        <div>
            <h2>Name: {member.name}</h2>
            <h3>Role: {member.role}</h3>
            <h3>Dept: {member.dept}</h3>
            <button onClick={navigateNextTeamMember}>Next Team Member</button><br />
            <button onClick={navigateToTeamList}>Team List</button>
        </div>
    );
}