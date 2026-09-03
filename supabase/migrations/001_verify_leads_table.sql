-- Shared Preserve North leads table.
-- This site inserts site_source = 'preservenorthmattamy.com'.
select to_regclass('public.preserve_north_leads') as leads_table_exists;

-- Idempotent safety net — only creates the table if it is genuinely missing;
-- a no-op if preservenorthhomes.com already created it.
create table if not exists preserve_north_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  is_broker boolean not null default false,
  site_source text not null,
  consent boolean not null default false,
  consent_timestamp timestamptz,
  page_path text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text
);

alter table preserve_north_leads enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'preserve_north_leads'
      and policyname = 'anon can insert preserve_north_leads'
  ) then
    create policy "anon can insert preserve_north_leads"
      on preserve_north_leads for insert
      to anon
      with check (true);
  end if;
end $$;
