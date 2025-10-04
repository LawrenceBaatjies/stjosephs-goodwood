-- Update RLS policies for calendar_events to allow public event creation

-- Drop the existing restrictive insert policy
DROP POLICY IF EXISTS "Authenticated users can create events" ON calendar_events;

-- Create new policy allowing anyone to create events
CREATE POLICY "Anyone can create events"
ON calendar_events
FOR INSERT
TO public
WITH CHECK (true);

-- Also update the created_by column to be nullable if not already
-- This allows events to be created without requiring authentication
ALTER TABLE calendar_events 
ALTER COLUMN created_by DROP NOT NULL;