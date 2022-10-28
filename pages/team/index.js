import Link from 'next/link';
import useSWR from 'swr';
import { getAllTeamMembers } from '../../util/helpers';

export default function Team() {
  //const coachies = getAllTeamMembers();

  function fakeFetcher() {
    return getAllTeamMembers();
  }

  const { data, error } = useSWR('/team', fakeFetcher);
  const coachies = data;

  if (error) {
    return (
      <>
        <h1>Team content here</h1>
        <p>There is something wrong</p>
      </>
    );
  }
  if (!data) {
    return (
      <>
        <h1>Team content here</h1>
        <p>Loading... </p>
      </>
    );
  }

  return (
    <>
      <h1>Team content here</h1>
      <ul>
        {coachies?.map((coach) => {
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
