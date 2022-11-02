import { useRouter } from 'next/router';
import useSWR from 'swr';
import { getMemberByName } from '../../../util/helpers';

function fakeFetcher(url) {
  return getMemberByName(url.split('/').at(-1));
}

export default function MemberDetail() {
  const router = useRouter();
  const { name } = router.query;

  // const member = getMemberByName(name);

  const { data: member, error } = useSWR(`/team/name/${name}`, fakeFetcher);

  if (!name) {
    return;
  }

  if (!member) {
    return;
  }

  return (
    <>
      <h1>Hello {member.name}</h1>
      <span role='img' aria-label='favourite emoji'>
        Coach favourite is: {member.favorite}
      </span>
    </>
  );
}
