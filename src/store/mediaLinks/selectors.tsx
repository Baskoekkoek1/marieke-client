type State = {
  mediaLinks: {
    all_links: {
      id: number;
      title: string;
      description: string;
      tag: string;
      link: string;
      imgLink: string;
    };
    addLinkMode: boolean;
    deleteLinkMode: boolean;
  };
};

export const selectAllLinks = (state: State) => state.mediaLinks.all_links;

export const selectAddLinkMode = (state: State) => state.mediaLinks.addLinkMode;

export const selectDeleteLinkMode = (state: State) =>
  state.mediaLinks.deleteLinkMode;

export {};
