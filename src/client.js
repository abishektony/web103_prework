import { createClient } from '@supabase/supabase-js';

const URL = 'https://qlaolpgkjmvuasgeonyl.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsYW9scGdram12dWFzZ2VvbnlsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDQ0MzI0NiwiZXhwIjoyMDY2MDE5MjQ2fQ.a6GxES3vC9AOjgirDxBG-i5J_CB8zy2JfeXUrHt5Wdg';

export const supabase = createClient(URL, API_KEY);
