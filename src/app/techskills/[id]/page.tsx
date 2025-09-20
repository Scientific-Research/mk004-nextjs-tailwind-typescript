'use client';
import { AppContext } from '@/AppContext';
import { use, useContext } from 'react';

export default function PageTechSkillsItem({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  // console.log(id);
  const { techSkills } = useContext(AppContext);
  const techSkill = techSkills.find((m) => String(m.id) === id);

  return (
    <>
      {techSkill && (
        <div>
          <p className="font-bold">{techSkill.name}</p>
          <p className="italic">{techSkill.description}</p>
          <p>
            <a className="underline" target="_blank" href={techSkill.url}>
              more info
            </a>
          </p>
        </div>
      )}
    </>
  );
}
