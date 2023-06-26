import moment from "moment";

const apiUrl = "https://eventregistry.org/api/v1";

const apiKey = process.env.REACT_APP_API_KEY;

const handleResponse = async (get) => {
  const response = await get();
  if (!response.ok) {
    throw new Error("Error in response, status code: " + response.status);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error("Api error: " + data.error);
  }

  return data;
};

export const defaultData = {
  keyword: "Elon Musk",
  resultType: "articles",
  articlesSortBy: "date",
  dataType: "news",
  lang: "eng",
  dateStart: moment().subtract(1, "month").format("YYYY-MM-DD"),
  articlesCount: 12,
  isDuplicateFilter: "skipDuplicates",
  hasDuplicateFilter: "skipDuplicates",
};

export const defaultEvents = {
  resultType: "events",
  keyword: "Top",
  eventsCount: 12,
};

export async function getArticles(params = {}) {
  return handleResponse(() => {
    const urlParams = new URLSearchParams({
      ...defaultData,
      ...params,
      apiKey,
    });

    return fetch(`${apiUrl}/article/getArticles?${urlParams}`);
  });
}

export async function getEvents(params = {}) {
  return handleResponse(() => {
    const urlParams = new URLSearchParams({
      ...defaultEvents,
      ...params,
      apiKey,
    });

    return fetch(`${apiUrl}/event/getEvents?${urlParams}`);
  });
}