import { http, HttpResponse } from 'msw';
import blogUsers from './blog-users.json';

let maxId = Math.max(...blogUsers.map((item) => item.id));

export const blogUsersHandlers = [
  http.get('http://localhost:9090/blog-users/:id', async ({ params }) => {
    await sleep(1000);

    const { id } = params;
    const blogUser = blogUsers.find((user) => user.id === Number(id));
    return HttpResponse.json(blogUser);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
