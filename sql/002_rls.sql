-- Enable RLS and provide simple org/plant scoped example policies later
alter table plants enable row level security;
alter table lines enable row level security;
alter table line_speed_events enable row level security;
alter table work_requests enable row level security;

-- Example permissive policy for development (replace before prod)
do $$ begin
  if not exists (
    select 1 from pg_policies where polname = 'dev_all_select_plants'
  ) then
    create policy dev_all_select_plants on plants for select using (true);
    create policy dev_all_select_lines on lines for select using (true);
    create policy dev_all_select_lse on line_speed_events for select using (true);
    create policy dev_all_select_wr on work_requests for select using (true);
    create policy dev_all_insert_wr on work_requests for insert with check (true);
    create policy dev_all_update_wr on work_requests for update using (true) with check (true);
  end if;
end $$;
