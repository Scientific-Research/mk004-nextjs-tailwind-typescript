'use client';
export default function PageTechSkillsItem({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return (
    <>
      <p>showing id:{id}</p>
    </>
  );
}
