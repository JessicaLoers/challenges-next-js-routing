import Link from 'next/link';
import useSWR from 'swr';
import { fetcher, getAllTeamMembers } from '../../util/helpers';

// function fakeFetcher() {
//   return getAllTeamMembers();
// }

export default function Team() {
  const { data, error } = useSWR('/api/team', fetcher);
  const coachies = data;

  if (error) {
    console.error(error)
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
      </ul>
    </>
  );
}
