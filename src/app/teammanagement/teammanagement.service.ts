import { Injectable } from '@angular/core';
import { Team } from './team';

@Injectable({
  providedIn: 'root',
})
export class TeammanagementService {
  saveTeam(team: Team) {
    console.log('------------TEAM------------');
    console.log('Team Name: ' + team.teamName);
    console.log('----- Employee Detail -----');
    for (let emp of team.employees) {
      console.log('Emp Name: ' + emp);
      console.log('-------------------');
    }
  }
}
