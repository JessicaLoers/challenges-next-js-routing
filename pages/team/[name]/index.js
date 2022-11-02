import { useRouter } from 'next/router';
import { getMemberByName } from '../../../util/helpers';
export default function MemberDetail() {
  const router = useRouter();
  const { name } = router.query;

  const member = getMemberByName(name);

  if (!name) {
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
