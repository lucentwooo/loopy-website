/* Line icons shared by How it works (step 02) and Better input. They sit on a
   white .tile; size and stroke come from the global .docic / .globeic rules. */

export function GlobeIcon() {
  return (
    <svg className="docic globeic" viewBox="0 0 30 30" role="img" aria-label="Your client's website">
      <circle cx="15" cy="15" r="11.5" />
      <path d="M3.5 15h23M15 3.5c3.2 3.1 4.8 7 4.8 11.5S18.2 23.4 15 26.5M15 3.5c-3.2 3.1-4.8 7-4.8 11.5s1.6 8.4 4.8 11.5" />
    </svg>
  );
}

export function DocIcon() {
  return (
    <svg className="docic" viewBox="0 0 26 30" role="img" aria-label="Your files">
      <path d="M4.5 1.8h11.2l6.8 6.8v17.6a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2V3.8a2 2 0 0 1 2-2z" />
      <path d="M15.5 1.8v5.4a1.6 1.6 0 0 0 1.6 1.6h5.4" />
      <path d="M7.5 15h11M7.5 19h11M7.5 23h7" />
    </svg>
  );
}
