export const getData = async (url: string) => {
    return fetch(url).then((res) => res.json());
  };

  