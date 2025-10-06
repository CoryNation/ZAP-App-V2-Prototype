export type UUID = string;

export type Plant = {
  id: UUID;
  name: string;
};

export type Line = {
  id: UUID;
  plant_id: UUID;
  name: string;
};

export type LineSpeedEvent = {
  id: UUID;
  line_id: UUID;
  ts: string;
  ft_per_min: number;
  source?: string;
  quality_flag?: boolean;
};

export type WorkRequest = {
  id: UUID;
  title: string;
  description?: string;
  requester_id: UUID;
  priority: 'low'|'medium'|'high'|'urgent';
  status: 'new'|'triage'|'in_progress'|'blocked'|'done'|'cancelled';
  assignee_id?: UUID;
  due_date?: string;
};
