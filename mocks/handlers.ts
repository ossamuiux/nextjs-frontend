import { http, HttpResponse } from 'msw';
import user from './user.json';

let maxId = Math.max(...user.map((item) => item.id));

export const handlers = [
  http.get('http://localhost:9090/user', async () => {
    await sleep(200);

    return HttpResponse.json(user);
  }),
  http.post('http://localhost:9090/user', async ({ request }) => {
    await sleep(200);

    const item: any = await request.json();

    maxId++;
    user.push({ ...item, id: maxId });

    return HttpResponse.json(user);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
