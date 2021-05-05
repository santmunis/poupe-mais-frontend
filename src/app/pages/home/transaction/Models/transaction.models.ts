import { ITag } from './tag.models';

export interface Transaction {
  id?: number;
  name: string;
  description: string;
  value: number;
  type: string;
  created_at?: Date;
  tag?: ITag;
  tag_id: string;
}


