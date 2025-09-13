export type Breed = string[]

export type BreedImage = string[]


export type TPr = {
  id: string, author: string
  link: string
  pullRequestType: string
  repository: string
  status: string
  title: string
  reviewedByUser: boolean
}

export type TChunk = {
  id: string, text: string
}

interface IPollJob {
  analysisType: 'summary' | 'chunk' | 'chunk_analysis' | "completed"
  jobId: string
}

interface Author {
  name: string;
}

interface LinesChanged {
  added: number;
  removed: number;
}

export interface IPollJobDataSummary {
  authors: Author[];
  fileList: string[];
  filesChanged: number;
  jobId: string;
  linesChanged: LinesChanged;
  summary: string;
  summaryId: string;
}


export interface Chunk {
  chunk: string;
  chunkEndLine: number;
  chunkStartLine: number;
  chunkId: string;
  chunkReason: string;
  jobId: string;
  filename: string;
}

export interface ChunkComment {
  chunkCommentId: string;
  chunkId: string;
  comment: string;
  commentPosition: number;
  commentType: 'bug' | 'security-issue' | 'code-style' | 'not-optimal' | 'other'
  jobId: string;
  filename: string;
}

export type IPollJobDataChunk = Chunk[];

export type IPollJobDataChunkAnalysis = ChunkComment[];

type IPollJobData = | {
  data: IPollJobDataSummary
} | {
  data: IPollJobDataChunk
} | {
  data: IPollJobDataChunkAnalysis
} | {
  data: null
};

export type TPollJob = IPollJob & IPollJobData
