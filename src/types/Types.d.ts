interface responseType {
  count: number;
  created: string;
  offset: number;
  recordings: any[];
}

interface ErrorType {
  error: boolean;
  message: string;
}

interface Recording {
  id;
  score;
  title;
  length;
  video;
  "artist-credit";
  releases;
}
