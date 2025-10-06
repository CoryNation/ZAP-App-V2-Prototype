-- Core entities
create table if not exists plants (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  created_at timestamptz default now()
);

create table if not exists lines (
  id uuid primary key default gen_random_uuid(),
  plant_id uuid not null references plants(id) on delete cascade,
  name text not null,
  created_at timestamptz default now(),
  unique(plant_id, name)
);

create table if not exists line_speed_events (
  id uuid primary key default gen_random_uuid(),
  line_id uuid not null references lines(id) on delete cascade,
  ts timestamptz not null,
  ft_per_min numeric not null,
  source text,
  quality_flag boolean default true
);

create table if not exists work_requests (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  requester_id uuid,
  priority text check (priority in ('low','medium','high','urgent')) default 'medium',
  status text check (status in ('new','triage','in_progress','blocked','done','cancelled')) default 'new',
  assignee_id uuid,
  due_date date,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index if not exists idx_line_speed_events_line_ts on line_speed_events(line_id, ts desc);
