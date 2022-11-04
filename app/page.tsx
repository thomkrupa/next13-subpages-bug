export const runtime = 'experimental-edge';
export const preferredRegion = 'edge';

export default async function (props: any) {
  const { searchParams, params } = props;
  const pathname = `${params.team}/${params.domain}/co2`;

  return (
    <>
      <p>test 123</p>
    </>
  );
}
