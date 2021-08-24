type AppType = {
   id: string,
   title: string;
   description: string;
   projectUrl: string;
   readme: string;
   languages: Array<string>;
   downloadable: Boolean;
};


type GithubFileType = {
   name: string;
   path: string;
   sha: string;
   size: BigInteger;
   url: string;
   html_url: string;
   git_url: string;
   download_url:string;
   type: string;
   _links: {
      self: string;
      git: string;
      html: string;
   }
};

type ReadmeType = {
   id: string;
   content: string;
};

export { AppType, GithubFileType, ReadmeType };
