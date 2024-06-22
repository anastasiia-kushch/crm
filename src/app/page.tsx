import ActiveLabel from './components/active-label';
import NotActiveLabel from './components/not-active-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not active</NotActiveLabel>
    </main>
  );
}
