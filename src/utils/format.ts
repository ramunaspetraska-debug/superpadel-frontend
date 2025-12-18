export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(date));

export const formatStatus = (status: string) => {
  const map: Record<string, string> = {
    upcoming: 'Upcoming',
    'in-progress': 'In Progress',
    completed: 'Completed',
    scheduled: 'Scheduled',
  };

  return map[status] ?? status;
};

