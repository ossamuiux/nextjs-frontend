import { createMiddleware } from '@mswjs/http-middleware';
import express from 'express';
import cors from 'cors';
import { handlers } from '@/mocks/handlers';
import { postsHandlers } from '@/mocks/posts-handlers';
import { articlesHandlers } from '@/mocks/articles-handlers';
import { blogPostsHandlers } from '@/mocks/blog-posts-handlers';
import { blogUsersHandlers } from '@/mocks/blog-users-handlers';

const app = express();
const port = 9090;

app.use(
  cors({
    origin: 'http://localhost:3000', // 클라이언트 주소
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(express.json());
app.use(
  createMiddleware(
    ...handlers,
    ...postsHandlers,
    ...articlesHandlers,
    ...blogPostsHandlers,
    ...blogUsersHandlers
  )
); // MSW 핸들러 연결

app.listen(port, () => console.log(`Mock server is running on port: ${port}`));
