import Link from 'next/link';
import useSWR from 'swr';
import { getAllTeamMembers, fetcher } from '../../util/helpers';

export default function Team() {
  //const coachies = getAllTeamMembers();

  const { data, error } = useSWR('/team', fetcher);

  if (error) {
    console.dir(error);
    return 'nope, not working';
  }

  if (!data) {
    return (
      <>
        <h1>Team content here</h1>
        <h2>Still loading ... </h2>
      </>
    );
  }

  return (
    <>
      <h1>Team content here</h1>
      <ul>
        {data?.map((coach) => {
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
