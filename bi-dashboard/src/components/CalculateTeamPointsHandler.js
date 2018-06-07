import React from 'react';

export function calculateTeamPointsHandler(user, team) {

    let teams = [],
    points = 0,
    teamMembers = 0;

    //Loop over all teams and bind the users to the right team
    for( let i = 0, x = team.length; i < x; i++) {
        for( let j = 0, k = user.length; j < k; j++) {
            if( team[i].href === user[j].teamhref ) {
                points += user[j].points;
                teamMembers++;
            }
            if( j === user.length - 1){
                let totalPoints = (points / teamMembers);
                teams.push( { name: team[i].name, points: totalPoints, totalMembers: teamMembers, picture: team[i].picture } );
                points = 0;
                teamMembers = 0;
            }
        }
    }
    // sort the teams by points
    return teams.slice().sort( ( a, b ) => a.points < b.points ? 1 : -1);
}
