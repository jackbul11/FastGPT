import type { ModuleItemType } from '../module/type.d';

export type PluginItemSchema = {
  _id: string;
  userId: string;
  name: string;
  avatar: string;
  intro: string;
  updateTime: Date;
  modules: ModuleItemType[];
};
