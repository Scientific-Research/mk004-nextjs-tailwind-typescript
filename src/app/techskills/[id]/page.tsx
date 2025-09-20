'use client';
import { use } from 'react';

export default function PageTechSkillsItem({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  console.log(id);

  return (
    <>
      <p>showing id:{id}</p>
    </>
  );
}
