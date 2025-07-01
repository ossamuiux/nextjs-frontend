import { http, HttpResponse } from 'msw';
import articles from './articles.json';

let maxId = Math.max(...articles.map((item) => item.id));

export const articlesHandlers = [
  http.get('http://localhost:9090/articles', async ({ request }) => {
    await sleep(200);

    // request객체에 searchParams가 없으므로 js URL객체로 변환
    const url = new URL(request.url);
    const search = url.searchParams.get('search');
    // parseInt는 문자열만 허용하므로 Number로 변경
    const page = Number(url.searchParams.get('page'));
    // 페이지별 데이터 가져오기
    function getDataByPage(
      data: { id: number; title: string; content: string }[],
      page: number,
      limit: number
    ) {
      const totalPages = Math.ceil(data.length / limit);

      if (page < 1 || page > totalPages) {
        return [];
      }

      // 잘라낼 배열 시작 위치
      const start = (page - 1) * limit;
      // 끝위치
      const end = start + limit;

      return {
        result: data.slice(start, end),
        total: data.length,
      };
    }

    // 검색어에 대한 데이터 필터링하여 보냄
    if (search !== 'undefined' && search) {
      const filterd = articles.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
      const result = getDataByPage(filterd, page, 5);

      return HttpResponse.json(result);
    }
    // 검색어 없는 경우 모두 보냄
    const result = getDataByPage(articles, page, 5);

    return HttpResponse.json(result);
  }),
  http.get('http://localhost:9090/articles/:id', async ({ params }) => {
    await sleep(200);

    const { id } = params;
    // find는 배열요소 하나만 찾아줌
    const article = articles.find((item) => item.id === Number(id));

    return HttpResponse.json(article);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
