import { http, HttpResponse } from 'msw';
import blogPosts from './blog-posts.json';

let maxId = Math.max(...blogPosts.map((item) => item.id));

export const blogPostsHandlers = [
  http.get('http://localhost:9090/blog-posts', async () => {
    await sleep(200);

    return HttpResponse.json(blogPosts);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
