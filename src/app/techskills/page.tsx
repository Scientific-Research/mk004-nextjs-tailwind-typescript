'use client';

import { AppContext } from '@/AppContext';
import Link from 'next/link';
import { useContext } from 'react';

export default function PageTechSkills() {
  const { techSkills } = useContext(AppContext);

  return (
    <>
      <p className="techskills-p">
        There are <span>{techSkills.length}</span> tech skills!
      </p>
      <ul className="techskills">
        {techSkills.map((techSkill) => (
          <li key={techSkill.id}>
            <Link href={`/techskills/${techSkill.id}`}>{techSkill.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
