/* eslint-disable camelcase */
type AppType = {
   title: string;
   description: string;
   projectUrl: string;
   readme?: string;
   languages: Array<string>;
   downloadable: Boolean;
};

type StoreAppType = {
   id?: string;
   user?: string;
   repo?: string;
   title: string;
   description: string;
   projectUrl: string;
   readme?: string;
   languages: Array<string>;
   downloadable: Boolean;
};

type GithubFileType = {
   name: string;
   path: string;
   sha: string;
   size: number;
   url: string;
   html_url: string;
   git_url: string;
   download_url: string;
   type: string;
   _links: {
      self: string;
      git: string;
      html: string;
   };
};

type ReadmeType = {
   id: string;
   content: string;
};

type StoreAppId = {
   user: string;
   repo: string;
};

export { AppType, GithubFileType, ReadmeType, StoreAppType, StoreAppId };
