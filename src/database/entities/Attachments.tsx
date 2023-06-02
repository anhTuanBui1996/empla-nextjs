/**
 * Attachment object of attachment column type
 */
type Attachments = {
  id: string | undefined;
  url: string;
  fileName: string | undefined;
  size: number | undefined;
  type: string | undefined;
  width: number | undefined;
  height: number | undefined;
  thumbnails: {
    small: {
      url: string | undefined;
      width: number | undefined;
      height: number | undefined;
    };
    large: {
      url: string | undefined;
      width: number | undefined;
      height: number | undefined;
    };
  };
};
