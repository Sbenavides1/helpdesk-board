'use client';

'use client';

import { useState, useEffect } from 'react';

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch ticket later
  return (
    <section className="mt-4 space-y-4">
      <h2 className="text-xl font-semibold mb-2">Tickets</h2>
      <p>Total tickets: {tickets.lenght}</p>
    </section>
  );
}