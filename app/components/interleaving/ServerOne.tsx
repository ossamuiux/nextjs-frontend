import fs from 'fs/promises';

export default async function ServerOne() {
  const contents = await fs.readFile(
    './app/ui/interleaving/ServerOne.tsx',
    'utf-8'
  );

  return (
    <div>
      ServerOne
      <p>{contents}</p>
    </div>
  );
}
