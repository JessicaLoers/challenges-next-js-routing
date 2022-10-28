import Link from 'next/link';
import { getAllTeamMembers } from '../../util/helpers';

export default function Team() {
  const coachies = getAllTeamMembers();

  return (
    <>
      <h1>Team content here</h1>
      <ul>
        {coachies.map((coach) => {
          return (
            <li key={coach.name}>
              <Link href={`/team/${coach.name}`}>{coach.name}</Link>
            </li>
          );
        })}
        {/* <li>
          <Link href='/team/jessica'>Jessica</Link>
        </li>
        <li>
          <Link href='/team/michael'>Michael</Link>
        </li> */}
      </ul>
    </>
  );
}
